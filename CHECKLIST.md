# ✅ Setup Checklist - AppMahasiswa

Ikuti checklist ini step-by-step untuk setup aplikasi dengan benar.

---

## 📋 Phase 1: Firebase Setup (15 menit)

### Step 1: Buat Firebase Project

- [ ] Buka https://console.firebase.google.com/
- [ ] Klik "Add project" atau "Create a project"
- [ ] Nama project: **AppMahasiswa** (atau nama lain)
- [ ] (Opsional) Enable Google Analytics
- [ ] Klik "Create project"
- [ ] Tunggu hingga project selesai dibuat

### Step 2: Setup Firebase Authentication

- [ ] Di Firebase Console, pilih project Anda
- [ ] Klik "Build" → "Authentication" di sidebar
- [ ] Klik "Get started"
- [ ] Klik tab "Sign-in method"
- [ ] Klik "Email/Password"
- [ ] Toggle switch ke **Enable**
- [ ] Klik "Save"
- [ ] ✅ Authentication sudah aktif

### Step 3: Setup Firestore Database

- [ ] Di Firebase Console, klik "Build" → "Firestore Database"
- [ ] Klik "Create database"
- [ ] Pilih **"Start in test mode"** (untuk development)
- [ ] Klik "Next"
- [ ] Pilih lokasi: **asia-southeast1** atau **asia-southeast2**
- [ ] Klik "Enable"
- [ ] Tunggu hingga database selesai dibuat
- [ ] ✅ Firestore sudah aktif

### Step 4: Tambah Sample Data Mahasiswa

- [ ] Di Firestore Database, klik **"Start collection"**
- [ ] Collection ID: `mahasiswa` (lowercase, exact)
- [ ] Klik "Next"

#### Document 1:

- [ ] Document ID: (biarkan Auto-ID)
- [ ] Tambahkan field:
  - [ ] Field: `nim`, Type: **string**, Value: `2021001`
  - [ ] Field: `nama`, Type: **string**, Value: `Ahmad Rizki`
  - [ ] Field: `jurusan`, Type: **string**, Value: `Teknik Informatika`
  - [ ] Field: `semester`, Type: **number**, Value: `5`
  - [ ] Field: `createdAt`, Type: **string**, Value: `2024-01-15T10:00:00.000Z`
- [ ] Klik "Save"

#### Document 2-5:

- [ ] Klik "Add document"
- [ ] Ulangi untuk data lain (lihat `sample-data.json`)
- [ ] Minimal tambahkan 3-5 dokumen
- [ ] ✅ Sample data sudah ditambahkan

### Step 5: Dapatkan Firebase Configuration

- [ ] Klik icon ⚙️ (Settings) di sidebar kiri bawah
- [ ] Klik "Project settings"
- [ ] Scroll ke bawah ke bagian **"Your apps"**
- [ ] Jika belum ada app, klik icon **"</>"** (Web)
- [ ] App nickname: `AppMahasiswa`
- [ ] **JANGAN** centang "Also set up Firebase Hosting"
- [ ] Klik "Register app"
- [ ] **COPY** konfigurasi yang muncul
- [ ] ✅ Config berhasil di-copy

---

## 📋 Phase 2: Project Configuration (5 menit)

### Step 6: Update Firebase Config

- [ ] Buka file **`firebaseConfig.js`** di project
- [ ] Cari section `firebaseConfig`
- [ ] Ganti nilai-nilai berikut dengan yang dari Firebase Console:
  - [ ] `apiKey: "YOUR_API_KEY"` → ganti dengan API Key Anda
  - [ ] `authDomain: "YOUR_AUTH_DOMAIN"` → ganti
  - [ ] `projectId: "YOUR_PROJECT_ID"` → ganti
  - [ ] `storageBucket: "YOUR_STORAGE_BUCKET"` → ganti
  - [ ] `messagingSenderId: "YOUR_SENDER_ID"` → ganti
  - [ ] `appId: "YOUR_APP_ID"` → ganti
- [ ] **Simpan file** (Cmd+S / Ctrl+S)
- [ ] ✅ Firebase config sudah update

**Contoh hasil setelah update:**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyABC123...",
  authDomain: "appmahasiswa-abc123.firebaseapp.com",
  projectId: "appmahasiswa-abc123",
  storageBucket: "appmahasiswa-abc123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
};
```

### Step 7: Verifikasi Dependencies

- [ ] Buka Terminal di project folder
- [ ] Jalankan: `npm list firebase`
- [ ] Pastikan Firebase terinstall (versi 12.x.x)
- [ ] Jalankan: `npm list @react-native-async-storage/async-storage`
- [ ] Pastikan AsyncStorage terinstall (versi 1.x.x)
- [ ] ✅ Dependencies sudah terinstall

---

## 📋 Phase 3: Running the App (10 menit)

### Step 8: Start Development Server

- [ ] Buka Terminal di project folder
- [ ] Jalankan: `npx expo start`
- [ ] Tunggu hingga QR code muncul
- [ ] Metro bundler berjalan tanpa error
- [ ] ✅ Development server running

### Step 9: Test di Device/Emulator

#### Option A: Test di Physical Device (Recommended)

**iOS (iPhone/iPad):**

- [ ] Download "Expo Go" dari App Store
- [ ] Buka Camera app
- [ ] Scan QR code dari terminal
- [ ] Tap notifikasi untuk buka di Expo Go
- [ ] App berhasil load

**Android:**

- [ ] Download "Expo Go" dari Play Store
- [ ] Buka Expo Go app
- [ ] Tap "Scan QR Code"
- [ ] Scan QR code dari terminal
- [ ] App berhasil load

#### Option B: Test di Emulator

**iOS Simulator:**

- [ ] Pastikan Xcode sudah terinstall
- [ ] Di terminal, press `i`
- [ ] iOS Simulator akan terbuka
- [ ] App berhasil load

**Android Emulator:**

- [ ] Pastikan Android Studio sudah terinstall
- [ ] Buka Android Emulator
- [ ] Di terminal, press `a`
- [ ] App berhasil load di emulator

#### Option C: Test di Web Browser

- [ ] Di terminal, press `w`
- [ ] Browser akan terbuka otomatis
- [ ] App berhasil load di web
- [ ] (Note: Beberapa fitur native mungkin tidak berfungsi di web)

---

## 📋 Phase 4: Testing Features (15 menit)

### Step 10: Test Register Flow

- [ ] App terbuka, muncul **Login Screen**
- [ ] Klik link **"Belum punya akun? Daftar disini"**
- [ ] Masuk ke **Register Screen**
- [ ] Input email: `test@test.com`
- [ ] Input password: `123456`
- [ ] Input confirm password: `123456`
- [ ] Klik button **"Daftar"**
- [ ] Loading indicator muncul
- [ ] Alert "Sukses" muncul
- [ ] Otomatis navigate ke **Mahasiswa Screen**
- [ ] ✅ Register berhasil

### Step 11: Test Mahasiswa Data Display

- [ ] Di **Mahasiswa Screen**, lihat header:
  - [ ] Title: "Data Mahasiswa"
  - [ ] User email: `test@test.com`
  - [ ] Button "Logout" di kanan atas
- [ ] List mahasiswa muncul
- [ ] Setiap card menampilkan:
  - [ ] NIM (badge biru)
  - [ ] Nama mahasiswa
  - [ ] Jurusan
  - [ ] Semester
- [ ] Data terurut berdasarkan NIM
- [ ] ✅ Data mahasiswa tampil dengan benar

### Step 12: Test Pull-to-Refresh

- [ ] Di **Mahasiswa Screen**
- [ ] Swipe/tarik layar ke bawah
- [ ] Loading indicator muncul
- [ ] Data refresh
- [ ] Loading hilang
- [ ] ✅ Pull-to-refresh berfungsi

### Step 13: Test Logout

- [ ] Klik button **"Logout"** di kanan atas
- [ ] Alert konfirmasi muncul: "Apakah Anda yakin ingin logout?"
- [ ] Klik **"Logout"**
- [ ] Navigate kembali ke **Login Screen**
- [ ] ✅ Logout berhasil

### Step 14: Test Login with Existing Account

- [ ] Di **Login Screen**
- [ ] Input email: `test@test.com`
- [ ] Input password: `123456`
- [ ] Klik button **"Login"**
- [ ] Loading indicator muncul
- [ ] Alert "Sukses" muncul
- [ ] Navigate ke **Mahasiswa Screen**
- [ ] Data mahasiswa tampil
- [ ] ✅ Login berhasil

### Step 15: Test Auto-Login (AsyncStorage)

- [ ] **PENTING:** Jangan logout dulu
- [ ] Close/kill aplikasi
- [ ] Buka aplikasi lagi
- [ ] Loading indicator muncul sebentar
- [ ] Langsung masuk ke **Mahasiswa Screen** (tidak ke Login Screen)
- [ ] User masih login (check email di header)
- [ ] Data mahasiswa tampil
- [ ] ✅ Auto-login dari AsyncStorage berfungsi

---

## 📋 Phase 5: Error Testing (10 menit)

### Step 16: Test Validation

**Register Validation:**

- [ ] Buka Register Screen
- [ ] Klik "Daftar" tanpa isi form → Error muncul
- [ ] Isi email saja → Error muncul
- [ ] Password < 6 karakter → Error muncul
- [ ] Password tidak match → Error muncul
- [ ] ✅ Validasi berfungsi

**Login Validation:**

- [ ] Buka Login Screen
- [ ] Klik "Login" tanpa isi form → Error muncul
- [ ] Login dengan email salah → Error muncul
- [ ] Login dengan password salah → Error muncul
- [ ] ✅ Validasi berfungsi

### Step 17: Test Edge Cases

- [ ] Test dengan koneksi internet OFF:
  - [ ] Login → Error network muncul
  - [ ] Fetch data → Error muncul
- [ ] Test dengan collection kosong:
  - [ ] Hapus semua data di Firestore
  - [ ] Refresh app
  - [ ] Empty state message muncul: "Belum ada data mahasiswa"
  - [ ] Tambahkan data lagi di Firestore
- [ ] ✅ Error handling berfungsi

---

## 📋 Phase 6: Final Verification

### Step 18: Code Quality Check

- [ ] Tidak ada error di VS Code
- [ ] Tidak ada warning kritis
- [ ] Semua file tersimpan
- [ ] ✅ Code quality OK

### Step 19: Documentation Check

- [ ] File `README.md` ada dan lengkap
- [ ] File `QUICKSTART.md` ada
- [ ] File `FIREBASE_SETUP.md` ada
- [ ] File `PROJECT_SUMMARY.md` ada
- [ ] File `ARCHITECTURE.md` ada
- [ ] File `sample-data.json` ada
- [ ] ✅ Dokumentasi lengkap

### Step 20: Firebase Console Verification

- [ ] Buka Firebase Console
- [ ] Check **Authentication** → Users:
  - [ ] User test@test.com terdaftar
- [ ] Check **Firestore Database** → mahasiswa:
  - [ ] Collection "mahasiswa" ada
  - [ ] Minimal 3-5 dokumen ada
  - [ ] Field structure benar
- [ ] ✅ Firebase setup verified

---

## 🎉 Completion Checklist

Jika semua item di bawah ini ✅, maka setup BERHASIL!

- [ ] ✅ Firebase project dibuat
- [ ] ✅ Authentication aktif (Email/Password)
- [ ] ✅ Firestore database dibuat
- [ ] ✅ Sample data mahasiswa ditambahkan
- [ ] ✅ firebaseConfig.js sudah diupdate
- [ ] ✅ App running tanpa error
- [ ] ✅ Register berfungsi
- [ ] ✅ Login berfungsi
- [ ] ✅ Data mahasiswa tampil
- [ ] ✅ Pull-to-refresh berfungsi
- [ ] ✅ Logout berfungsi
- [ ] ✅ Auto-login berfungsi (AsyncStorage)
- [ ] ✅ Validasi form berfungsi
- [ ] ✅ Error handling berfungsi

---

## 🚨 Troubleshooting Quick Reference

### Problem: "Firebase: Error (auth/invalid-api-key)"

**Solution:**

- [ ] Re-check firebaseConfig.js
- [ ] Copy-paste ulang dari Firebase Console
- [ ] Pastikan tidak ada spasi atau quote tambahan

### Problem: "Network request failed"

**Solution:**

- [ ] Check koneksi internet
- [ ] Check apakah Authentication sudah enabled di Firebase
- [ ] Restart development server

### Problem: Data mahasiswa tidak muncul

**Solution:**

- [ ] Check collection name = `mahasiswa` (lowercase)
- [ ] Check apakah data sudah ditambahkan di Firestore
- [ ] Check Firestore Rules (test mode)
- [ ] Check console log untuk error

### Problem: Auto-login tidak berfungsi

**Solution:**

- [ ] Check apakah AsyncStorage terinstall
- [ ] Check console log untuk error
- [ ] Clear app data dan test ulang
- [ ] Pastikan logout tidak dipanggil sebelum close app

### Problem: App crash saat dibuka

**Solution:**

- [ ] Check terminal untuk error message
- [ ] Clear cache: `npx expo start -c`
- [ ] Reinstall node_modules:
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## 📞 Need Help?

- Check `README.md` untuk dokumentasi lengkap
- Check `FIREBASE_SETUP.md` untuk panduan Firebase detail
- Check `QUICKSTART.md` untuk panduan cepat
- Check Firebase Console → Authentication/Firestore untuk errors

---

**Congratulations! 🎉**

Jika semua checklist sudah ✅, aplikasi Anda sudah siap digunakan!

Next: Lihat `PROJECT_SUMMARY.md` untuk fitur-fitur tambahan yang bisa dikembangkan.
