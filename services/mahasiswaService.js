import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

const COLLECTION_NAME = "Mahasiswa";

// Fetch semua data mahasiswa
export const getMahasiswa = async () => {
  try {
    const mahasiswaRef = collection(db, COLLECTION_NAME);
    const q = query(mahasiswaRef, orderBy("nim", "asc"));
    const querySnapshot = await getDocs(q);

    const mahasiswaList = [];
    querySnapshot.forEach((doc) => {
      mahasiswaList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return { success: true, data: mahasiswaList };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Tambah mahasiswa baru
export const addMahasiswa = async (mahasiswaData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...mahasiswaData,
      createdAt: new Date().toISOString(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update data mahasiswa
export const updateMahasiswa = async (id, mahasiswaData) => {
  try {
    const mahasiswaRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(mahasiswaRef, {
      ...mahasiswaData,
      updatedAt: new Date().toISOString(),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Hapus mahasiswa
export const deleteMahasiswa = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
