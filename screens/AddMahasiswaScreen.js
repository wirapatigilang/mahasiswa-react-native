import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { addMahasiswa } from "../services/mahasiswaService";

const AddMahasiswaScreen = ({ navigation, onSuccess }) => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Validasi input
    if (!nim || !nama || !jurusan || !semester) {
      Alert.alert("Error", "Semua field harus diisi");
      return;
    }

    if (isNaN(semester) || semester < 1 || semester > 14) {
      Alert.alert("Error", "Semester harus berupa angka 1-14");
      return;
    }

    const mahasiswaData = {
      nim: nim.trim(),
      nama: nama.trim(),
      jurusan: jurusan.trim(),
      semester: parseInt(semester),
    };

    setLoading(true);
    const result = await addMahasiswa(mahasiswaData);
    setLoading(false);

    if (result.success) {
      Alert.alert("Sukses", "Data mahasiswa berhasil ditambahkan!", [
        {
          text: "OK",
          onPress: () => {
            // Reset form
            setNim("");
            setNama("");
            setJurusan("");
            setSemester("");

            // Callback ke parent untuk refresh data
            if (onSuccess) {
              onSuccess();
            }
          },
        },
      ]);
    } else {
      Alert.alert("Error", "Gagal menambahkan data: " + result.error);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Kembali</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Tambah Mahasiswa</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>NIM *</Text>
          <TextInput style={styles.input} placeholder="Contoh: 2021001" value={nim} onChangeText={setNim} editable={!loading} />

          <Text style={styles.label}>Nama Lengkap *</Text>
          <TextInput style={styles.input} placeholder="Contoh: Ahmad Rizki" value={nama} onChangeText={setNama} editable={!loading} />

          <Text style={styles.label}>Jurusan *</Text>
          <TextInput style={styles.input} placeholder="Contoh: Teknik Informatika" value={jurusan} onChangeText={setJurusan} editable={!loading} />

          <Text style={styles.label}>Semester *</Text>
          <TextInput style={styles.input} placeholder="Contoh: 5" value={semester} onChangeText={setSemester} keyboardType="numeric" editable={!loading} />

          <TouchableOpacity style={[styles.submitButton, loading && styles.buttonDisabled]} onPress={handleSubmit} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.submitButtonText}>Simpan Data</Text>}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddMahasiswaScreen;
