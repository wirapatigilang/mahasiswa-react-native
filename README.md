# App Mahasiswa - React Native dengan Firebase

Aplikasi React Native untuk mengelola data mahasiswa menggunakan Firebase Authentication dan Firestore.

## Fitur

- ✅ Firebase Authentication (Login & Register)
- ✅ AsyncStorage untuk menyimpan informasi login
- ✅ Firebase Firestore untuk database mahasiswa
- ✅ Tampilan list mahasiswa dengan pull-to-refresh
- ✅ Auto-login menggunakan data tersimpan

## Setup Firebase

### 1. Buat Project Firebase

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik "Add project" atau "Tambah project"
3. Ikuti langkah-langkah untuk membuat project baru

### 2. Aktifkan Firebase Authentication

1. Di Firebase Console, pilih project Anda
2. Klik "Authentication" di menu sebelah kiri
3. Klik tab "Sign-in method"
4. Aktifkan "Email/Password"
5. Klik "Save"

### 3. Buat Firestore Database

1. Di Firebase Console, klik "Firestore Database"
2. Klik "Create database"
3. Pilih "Start in test mode" (untuk development)
4. Pilih lokasi server (asia-southeast1 atau asia-southeast2 untuk Indonesia)
5. Klik "Enable"

### 4. Tambahkan Data Sample Mahasiswa

1. Di Firestore Console, klik "Start collection"
2. Collection ID: `mahasiswa`
3. Tambahkan document pertama dengan field:

   - `nim` (string): "2021001"
   - `nama` (string): "Ahmad Rizki"
   - `jurusan` (string): "Teknik Informatika"
   - `semester` (number): 5
   - `createdAt` (string): "2024-01-15T10:00:00.000Z"

4. Tambahkan beberapa document lagi dengan data berbeda:

**Document 2:**

- `nim`: "2021002"
- `nama`: "Siti Nurhaliza"
- `jurusan`: "Sistem Informasi"
- `semester`: 5
- `createdAt`: "2024-01-15T10:05:00.000Z"

**Document 3:**

- `nim`: "2021003"
- `nama`: "Budi Santoso"
- `jurusan`: "Teknik Komputer"
- `semester`: 3
- `createdAt`: "2024-01-15T10:10:00.000Z"

### 5. Dapatkan Firebase Configuration

1. Di Firebase Console, klik icon ⚙️ (Settings) > Project settings
2. Scroll ke bawah ke bagian "Your apps"
3. Klik icon "</>" untuk Web app
4. Daftarkan app dengan nickname (contoh: "AppMahasiswa")
5. Copy konfigurasi yang muncul

### 6. Update File firebaseConfig.js

Buka file `firebaseConfig.js` dan ganti konfigurasi dengan data dari Firebase Console:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...", // Ganti dengan API Key Anda
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
};
```

## Instalasi

Dependencies sudah terinstall. Jika perlu install ulang:

```bash
npm install
```

## Menjalankan Aplikasi

### iOS Simulator

```bash
npm run ios
```

### Android Emulator

```bash
npm run android
```

### Expo Go (Recommended untuk testing)

```bash
npx expo start
```

Kemudian scan QR code dengan:

- **iOS**: Camera app
- **Android**: Expo Go app

## Struktur Project

```
AppMahasiswa/
├── firebaseConfig.js          # Konfigurasi Firebase
├── services/
│   ├── authService.js         # Service untuk Authentication
│   └── mahasiswaService.js    # Service untuk Firestore
├── screens/
│   ├── LoginScreen.js         # Screen Login
│   ├── RegisterScreen.js      # Screen Register
│   └── MahasiswaScreen.js     # Screen List Mahasiswa
├── App.js                     # Main App dengan Navigation
└── package.json
```

## Cara Penggunaan

### 1. Register Akun Baru

- Buka aplikasi
- Klik "Belum punya akun? Daftar disini"
- Masukkan email dan password (min. 6 karakter)
- Klik "Daftar"

### 2. Login

- Masukkan email dan password yang sudah didaftarkan
- Klik "Login"
- Informasi login akan tersimpan di AsyncStorage

### 3. Melihat Data Mahasiswa

- Setelah login, otomatis masuk ke halaman data mahasiswa
- Data diambil dari Firebase Firestore
- Pull down untuk refresh data

### 4. Logout

- Klik tombol "Logout" di kanan atas
- Konfirmasi logout
- Data login akan dihapus dari AsyncStorage

## Fitur AsyncStorage

Informasi yang disimpan di AsyncStorage:

- User ID (uid)
- Email
- Display Name
- Photo URL

Data ini digunakan untuk auto-login ketika aplikasi dibuka kembali.

## Firestore Security Rules (Untuk Production)

Jangan lupa update Firestore Rules untuk production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /mahasiswa/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## Troubleshooting

### Error: Firebase not configured

- Pastikan sudah update `firebaseConfig.js` dengan credentials yang benar

### Error: No user found

- Pastikan sudah registrasi akun terlebih dahulu

### Data mahasiswa kosong

- Pastikan sudah menambahkan data di Firebase Console
- Collection name harus `mahasiswa`

### Error saat build

```bash
# Clear cache dan reinstall
rm -rf node_modules
npm install
npx expo start -c
```

## Teknologi yang Digunakan

- React Native (Expo)
- Firebase Authentication
- Firebase Firestore
- AsyncStorage
- React Navigation

## Pengembangan Selanjutnya

Fitur yang bisa ditambahkan:

- [ ] Tambah mahasiswa baru dari app
- [ ] Edit data mahasiswa
- [ ] Hapus mahasiswa
- [ ] Search/Filter mahasiswa
- [ ] Upload foto mahasiswa
- [ ] Forgot password
- [ ] Email verification

## License

MIT License
