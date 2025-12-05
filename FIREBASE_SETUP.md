# Panduan Setup Firebase untuk AppMahasiswa

## Langkah 1: Buat Project di Firebase Console

1. Buka https://console.firebase.google.com/
2. Klik "Add project" atau "Create a project"
3. Masukkan nama project (contoh: "AppMahasiswa")
4. (Opsional) Aktifkan Google Analytics
5. Klik "Create project"

## Langkah 2: Setup Authentication

1. Di sidebar, klik "Authentication"
2. Klik "Get started"
3. Pilih tab "Sign-in method"
4. Klik "Email/Password"
5. Toggle "Enable" menjadi aktif
6. Klik "Save"

## Langkah 3: Setup Firestore Database

1. Di sidebar, klik "Firestore Database"
2. Klik "Create database"
3. Pilih mode:
   - **Test mode** (untuk development) - data bisa diakses siapa saja selama 30 hari
   - **Production mode** - harus setup rules terlebih dahulu
4. Pilih lokasi (recommended: asia-southeast1 atau asia-southeast2)
5. Klik "Enable"

## Langkah 4: Tambah Data Sample Mahasiswa

1. Di Firestore Database, klik "Start collection"
2. Collection ID: **mahasiswa** (harus sama persis)
3. Klik "Next"
4. Document ID: (Auto-ID atau buat manual)
5. Tambahkan fields:

### Data Mahasiswa 1:

```
nim: "2021001" (string)
nama: "Ahmad Rizki" (string)
jurusan: "Teknik Informatika" (string)
semester: 5 (number)
createdAt: "2024-01-15T10:00:00.000Z" (string)
```

6. Klik "Save"
7. Klik "Add document" untuk menambah mahasiswa lainnya

### Data Mahasiswa 2:

```
nim: "2021002" (string)
nama: "Siti Nurhaliza" (string)
jurusan: "Sistem Informasi" (string)
semester: 5 (number)
createdAt: "2024-01-15T10:05:00.000Z" (string)
```

### Data Mahasiswa 3:

```
nim: "2021003" (string)
nama: "Budi Santoso" (string)
jurusan: "Teknik Komputer" (string)
semester: 3 (number)
createdAt: "2024-01-15T10:10:00.000Z" (string)
```

### Data Mahasiswa 4:

```
nim: "2021004" (string)
nama: "Dewi Lestari" (string)
jurusan: "Teknik Informatika" (string)
semester: 7 (number)
createdAt: "2024-01-15T10:15:00.000Z" (string)
```

### Data Mahasiswa 5:

```
nim: "2021005" (string)
nama: "Rizal Firmansyah" (string)
jurusan: "Sistem Informasi" (string)
semester: 3 (number)
createdAt: "2024-01-15T10:20:00.000Z" (string)
```

## Langkah 5: Dapatkan Firebase Config

1. Klik icon ⚙️ (Settings) di sidebar
2. Pilih "Project settings"
3. Scroll ke bawah ke bagian "Your apps"
4. Jika belum ada app, klik icon "</>" (Web)
5. Masukkan App nickname (contoh: "AppMahasiswa")
6. **JANGAN** centang "Also set up Firebase Hosting"
7. Klik "Register app"
8. Copy konfigurasi yang muncul

Contoh konfigurasi yang akan muncul:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "appmahasiswa-xxxxx.firebaseapp.com",
  projectId: "appmahasiswa-xxxxx",
  storageBucket: "appmahasiswa-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890",
};
```

## Langkah 6: Update File firebaseConfig.js

1. Buka file `firebaseConfig.js` di project
2. Ganti bagian `firebaseConfig` dengan konfigurasi dari langkah 5
3. Simpan file

```javascript
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Ganti dengan milik Anda
  authDomain: "appmahasiswa-xxxxx.firebaseapp.com", // Ganti
  projectId: "appmahasiswa-xxxxx", // Ganti
  storageBucket: "appmahasiswa-xxxxx.appspot.com", // Ganti
  messagingSenderId: "123456789012", // Ganti
  appId: "1:123456789012:web:abcdef1234567890", // Ganti
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

## Langkah 7: Test Aplikasi

1. Jalankan aplikasi:

   ```bash
   npx expo start
   ```

2. Scan QR code dengan Expo Go

3. Test fitur:
   - Register akun baru
   - Login dengan akun yang baru dibuat
   - Lihat data mahasiswa
   - Logout
   - Login kembali (auto-login dari AsyncStorage)

## Security Rules untuk Production

Setelah development selesai, update Firestore Rules:

1. Di Firestore Database, klik tab "Rules"
2. Ganti rules dengan:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Mahasiswa collection - hanya user yang login bisa akses
    match /mahasiswa/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

3. Klik "Publish"

## Troubleshooting

### Error: "Firebase: Error (auth/invalid-api-key)"

- Periksa kembali `apiKey` di firebaseConfig.js
- Pastikan tidak ada spasi atau karakter tambahan

### Error: "Firebase: Error (auth/network-request-failed)"

- Periksa koneksi internet
- Periksa apakah Authentication sudah diaktifkan di Firebase Console

### Data mahasiswa tidak muncul

- Periksa nama collection di Firestore (harus: **mahasiswa**)
- Periksa apakah sudah menambahkan data
- Periksa Firestore Rules (untuk test mode, rules default sudah cukup)

### Error saat register: "Password should be at least 6 characters"

- Firebase memerlukan password minimal 6 karakter
- Gunakan password yang lebih panjang

## Tips

1. **Backup Firebase Config**: Simpan konfigurasi Firebase di tempat aman
2. **Jangan commit ke Git**: Tambahkan firebaseConfig.js ke .gitignore jika akan push ke GitHub
3. **Test Mode**: Firestore test mode hanya berlaku 30 hari, setelah itu harus update rules
4. **Email Verification**: Untuk production, aktifkan email verification
5. **Analytics**: Aktifkan Google Analytics untuk tracking usage

## Next Steps

Setelah setup berhasil, Anda bisa:

- Tambah fitur CRUD (Create, Update, Delete) mahasiswa
- Tambah foto profil mahasiswa (Firebase Storage)
- Implementasi search dan filter
- Tambah pagination untuk data banyak
- Setup Cloud Functions untuk notifikasi
