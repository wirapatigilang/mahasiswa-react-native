# Quick Start Guide - AppMahasiswa

Panduan cepat untuk menjalankan aplikasi dalam 5 menit!

## ⚡ Langkah Cepat

### 1. Setup Firebase (5 menit)

1. **Buat Project Firebase**

   - Buka https://console.firebase.google.com/
   - Klik "Add project"
   - Nama: "AppMahasiswa" → Next → Next → Create

2. **Aktifkan Authentication**

   - Sidebar: Authentication → Get started
   - Sign-in method → Email/Password → Enable → Save

3. **Buat Firestore Database**

   - Sidebar: Firestore Database → Create database
   - Test mode → Next → Pilih lokasi (asia-southeast1) → Enable

4. **Tambah Data Sample**

   - Start collection → Collection ID: `mahasiswa`
   - Add document dengan data:

   ```
   nim: "2021001"
   nama: "Ahmad Rizki"
   jurusan: "Teknik Informatika"
   semester: 5
   ```

   - Ulangi untuk 2-3 data lagi

5. **Dapatkan Config**
   - Settings ⚙️ → Project settings
   - Scroll ke "Your apps" → Click </> (Web)
   - Nickname: "AppMahasiswa" → Register app
   - **COPY KONFIGURASI**

### 2. Update firebaseConfig.js

Buka `firebaseConfig.js` dan ganti konfigurasi:

```javascript
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};
```

### 3. Jalankan Aplikasi

```bash
# Jalankan Expo
npx expo start

# Atau langsung buka di browser
npx expo start --web
```

### 4. Test Aplikasi

1. **Register** akun baru (email: test@test.com, password: 123456)
2. Lihat **data mahasiswa** dari Firestore
3. **Logout** dan login kembali (auto-login dari AsyncStorage)

## 📱 Test di Device

### iOS (iPhone)

```bash
npx expo start
```

- Buka Camera app
- Scan QR code
- Buka dengan Expo Go

### Android

```bash
npx expo start
```

- Buka Expo Go app
- Scan QR code

## ✅ Checklist

- [ ] Firebase project dibuat
- [ ] Authentication diaktifkan
- [ ] Firestore dibuat dengan collection `mahasiswa`
- [ ] Data sample ditambahkan
- [ ] firebaseConfig.js sudah diupdate
- [ ] App berhasil running
- [ ] Berhasil register dan login
- [ ] Data mahasiswa muncul

## 🎯 Fitur yang Sudah Jalan

- ✅ Register akun baru
- ✅ Login dengan email & password
- ✅ Auto-login dari AsyncStorage
- ✅ Fetch data mahasiswa dari Firestore
- ✅ Pull to refresh
- ✅ Logout

## 📚 File Penting

- `firebaseConfig.js` - **UPDATE INI DULU!**
- `services/authService.js` - Logic authentication
- `services/mahasiswaService.js` - Logic Firestore
- `screens/LoginScreen.js` - UI Login
- `screens/MahasiswaScreen.js` - UI List Mahasiswa
- `App.js` - Main navigation

## 🚨 Troubleshooting Cepat

**Error: Invalid API Key**
→ Periksa firebaseConfig.js, pastikan copy-paste benar

**Data mahasiswa kosong**
→ Periksa collection name = `mahasiswa` (lowercase)

**Error saat register**
→ Password minimal 6 karakter

**App tidak jalan**
→ Coba: `npx expo start -c` (clear cache)

## 🔥 Tips

1. Gunakan test mode Firestore untuk development
2. Simpan Firebase config di tempat aman
3. Jangan commit Firebase credentials ke Git
4. Test mode Firestore berlaku 30 hari

## 📖 Dokumentasi Lengkap

- Lihat `README.md` untuk dokumentasi lengkap
- Lihat `FIREBASE_SETUP.md` untuk setup Firebase detail

## 🆘 Butuh Bantuan?

Cek file:

- `FIREBASE_SETUP.md` - Panduan Firebase lengkap
- `README.md` - Dokumentasi project
- Firebase Console - Lihat errors di Functions atau Firestore

---

**Happy Coding! 🚀**
