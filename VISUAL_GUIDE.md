# 📸 Visual Setup Guide - Firebase Console

Panduan visual step-by-step untuk setup Firebase (tanpa screenshot, tapi dengan deskripsi detail).

---

## 🔥 Part 1: Create Firebase Project

### Screen 1: Firebase Console Homepage

**URL:** https://console.firebase.google.com/

**Yang akan Anda lihat:**

- Header: "Welcome to Firebase"
- Button besar: "Add project" atau "Create a project"
- (Jika sudah punya project) List project yang ada

**Action:**

- ✅ Klik button **"Add project"**

---

### Screen 2: Create Project - Step 1

**Halaman:** "Enter your project name"

**Form fields:**

- Project name: `[input box]`
- Auto-generated Project ID di bawahnya

**Action:**

- ✅ Ketik nama: **AppMahasiswa** (atau nama lain)
- ✅ Klik **"Continue"**

---

### Screen 3: Create Project - Step 2

**Halaman:** "Google Analytics for your Firebase project"

**Options:**

- Toggle switch: "Enable Google Analytics for this project"
- (Recommended: ON untuk production, OFF untuk belajar)

**Action:**

- ✅ Toggle sesuai kebutuhan (boleh OFF)
- ✅ Klik **"Continue"**

---

### Screen 4: Create Project - Step 3 (jika Analytics ON)

**Halaman:** "Configure Google Analytics"

**Options:**

- Analytics account dropdown
- Location dropdown
- Checkbox agreements

**Action:**

- ✅ Pilih account atau create new
- ✅ Accept agreements
- ✅ Klik **"Create project"**

---

### Screen 5: Project Creation Progress

**Yang akan Anda lihat:**

- Loading animation
- Text: "Creating your project..."
- Text: "Setting up resources..."

**Action:**

- ⏳ Tunggu 30-60 detik

---

### Screen 6: Project Ready

**Halaman:** "Your new project is ready"

**Action:**

- ✅ Klik **"Continue"**

---

## 🔐 Part 2: Setup Authentication

### Screen 7: Project Dashboard

**Sidebar kiri, section "Build":**

- Authentication
- Firestore Database
- Storage
- Hosting
- Functions
- ... (dan lainnya)

**Action:**

- ✅ Klik **"Authentication"** di sidebar

---

### Screen 8: Authentication Get Started

**Halaman:** Authentication introduction

**Yang akan Anda lihat:**

- Besar: "Get started by adding Firebase Authentication to your app"
- Button: "Get started"

**Action:**

- ✅ Klik button **"Get started"**

---

### Screen 9: Authentication Dashboard

**Tabs yang terlihat:**

- Users (tab aktif)
- Sign-in method
- Templates
- Usage
- Settings

**Action:**

- ✅ Klik tab **"Sign-in method"**

---

### Screen 10: Sign-in Method List

**List of providers:**

```
Provider               Status
──────────────────────────────
Email/Password         Disabled    [configure >]
Phone                  Disabled
Google                 Disabled
Play Games            Disabled
Facebook              Disabled
...
```

**Action:**

- ✅ Cari **"Email/Password"** di list
- ✅ Klik row "Email/Password"

---

### Screen 11: Enable Email/Password

**Modal popup muncul:**

**Title:** "Email/Password"

**Content:**

- Toggle: "Enable" (default OFF)
- Toggle: "Email link (passwordless sign-in)" (default OFF)

**Action:**

- ✅ Toggle **"Enable"** ke ON (klik toggle)
- ✅ Pastikan toggle pertama berwarna biru
- ✅ Klik button **"Save"** di bawah

---

### Screen 12: Authentication Enabled

**Kembali ke Sign-in method list:**

```
Provider               Status
──────────────────────────────
Email/Password         Enabled ✓   [configure >]
Phone                  Disabled
...
```

**Konfirmasi:**

- ✅ Email/Password sekarang "Enabled" dengan checkmark hijau

---

## 🗄️ Part 3: Setup Firestore Database

### Screen 13: Back to Sidebar

**Action:**

- ✅ Klik **"Firestore Database"** di sidebar (section Build)

---

### Screen 14: Firestore Introduction

**Halaman:** Introduction to Cloud Firestore

**Yang akan Anda lihat:**

- Informasi tentang Firestore
- Button: "Create database"

**Action:**

- ✅ Klik button **"Create database"**

---

### Screen 15: Firestore Security Rules

**Modal: "Start a Cloud Firestore database"**

**Step 1 of 2: Secure rules**

**Options:**

- ⚪ Start in **production mode**
  - Description: "Denies all reads/writes by default"
- ⚪ Start in **test mode**
  - Description: "Allows reads/writes for 30 days"

**Action:**

- ✅ Pilih radio button **"Start in test mode"**
- ✅ Klik **"Next"**

---

### Screen 16: Firestore Location

**Modal: "Start a Cloud Firestore database"**

**Step 2 of 2: Cloud Firestore location**

**Dropdown:** "Select a location"

**Recommended locations untuk Indonesia:**

- `asia-southeast1` (Singapore)
- `asia-southeast2` (Jakarta)

**Action:**

- ✅ Pilih **"asia-southeast2 (Jakarta)"** atau **"asia-southeast1 (Singapore)"**
- ✅ Klik button **"Enable"**

---

### Screen 17: Firestore Creating

**Loading screen:**

- Text: "Creating Cloud Firestore database..."
- Progress bar

**Action:**

- ⏳ Tunggu 30-60 detik

---

### Screen 18: Firestore Dashboard (Empty)

**Tabs:**

- Data (active)
- Rules
- Indexes
- Usage

**Main area:**

- Message: "Get started by creating your first collection"
- Button: "Start collection"

**Action:**

- ✅ Klik button **"Start collection"**

---

## 📊 Part 4: Add Sample Data

### Screen 19: Create Collection

**Modal: "Start a collection"**

**Form:**

- Collection ID: `[input box]`
- Help text: "Collection IDs must be odd-length path segments..."

**Action:**

- ✅ Ketik: **mahasiswa** (lowercase, no space)
- ✅ Klik **"Next"**

---

### Screen 20: Add First Document

**Modal: "Add its first document"**

**Form:**

- Document ID: `[input box]` dengan button [Auto-ID]
  - Action: ✅ Klik **"Auto-ID"** (biarkan generate otomatis)

**Fields section:** "Add field to this document"

**Empty fields ready to fill:**

```
Field       Type      Value
─────────────────────────────
[+]
```

**Action untuk menambah field:**

1. **Field 1:**

   - ✅ Klik di kolom "Field", ketik: `nim`
   - ✅ Dropdown "Type", pilih: **string**
   - ✅ Kolom "Value", ketik: `2021001`

2. **Field 2:**

   - ✅ Klik icon **[+]** untuk tambah field
   - ✅ Field: `nama`, Type: **string**, Value: `Ahmad Rizki`

3. **Field 3:**

   - ✅ Klik icon **[+]**
   - ✅ Field: `jurusan`, Type: **string**, Value: `Teknik Informatika`

4. **Field 4:**

   - ✅ Klik icon **[+]**
   - ✅ Field: `semester`, Type: **number**, Value: `5`

5. **Field 5:**
   - ✅ Klik icon **[+]**
   - ✅ Field: `createdAt`, Type: **string**, Value: `2024-01-15T10:00:00.000Z`

**Final result akan terlihat seperti:**

```
Field         Type      Value
──────────────────────────────────────────
nim           string    2021001
nama          string    Ahmad Rizki
jurusan       string    Teknik Informatika
semester      number    5
createdAt     string    2024-01-15T10:00:00.000Z
```

**Action:**

- ✅ Double-check semua field benar
- ✅ Klik button **"Save"**

---

### Screen 21: Firestore with First Document

**Main view:**

```
mahasiswa collection
└── [auto-generated-id]
    ├── nim: "2021001"
    ├── nama: "Ahmad Rizki"
    ├── jurusan: "Teknik Informatika"
    ├── semester: 5
    └── createdAt: "2024-01-15T10:00:00.000Z"
```

**Action untuk menambah document lagi:**

- ✅ Klik button **"Add document"**
- ✅ Ulangi proses seperti Screen 20
- ✅ Gunakan data dari `sample-data.json`

**Recommended:** Tambahkan minimal 3-5 dokumen

---

## 🔧 Part 5: Get Firebase Config

### Screen 22: Project Settings

**Action:**

- ✅ Klik icon **⚙️** (gear/settings) di sidebar kiri bawah
- ✅ Klik **"Project settings"**

---

### Screen 23: General Settings

**Tabs:**

- General (active)
- Usage and billing
- Users and permissions
- Integrations
- Service accounts

**Scroll down ke section:** "Your apps"

**Yang terlihat:**

- Subheading: "There are no apps in your project"
- Icons untuk add app:
  - iOS (apple icon)
  - Android (android icon)
  - Web (</> icon)
  - Unity, C++, Flutter icons

**Action:**

- ✅ Klik icon **"</>"** (Web)

---

### Screen 24: Add Firebase to Web App

**Modal/Page:** "Add Firebase to your web app"

**Form:**

- App nickname: `[input box]`
  - Placeholder: "my-app-123"
- ☐ Checkbox: "Also set up Firebase Hosting for this app"

**Action:**

- ✅ Ketik nickname: **AppMahasiswa**
- ✅ **JANGAN** centang "Firebase Hosting"
- ✅ Klik button **"Register app"**

---

### Screen 25: Firebase SDK Setup

**Page:** "Add Firebase SDK"

**Code snippet terlihat:**

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABC123DEF456GHI789JKL012MNO345PQR",
  authDomain: "appmahasiswa-abc123.firebaseapp.com",
  projectId: "appmahasiswa-abc123",
  storageBucket: "appmahasiswa-abc123.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

**CRITICAL ACTION:**

- ✅ **COPY SELURUH OBJECT `firebaseConfig`** (baris 6-12 di contoh)
- ✅ Paste ke notepad/text editor sementara
- ✅ Klik **"Continue to console"**

**Yang perlu di-copy (HANYA object firebaseConfig):**

```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
}
```

---

### Screen 26: Back to Project Settings

**Anda kembali ke Project Settings**

**Konfirmasi:**

- Section "Your apps" sekarang menampilkan:
  - App name: "AppMahasiswa"
  - Type: Web
  - App ID: "1:123456..."

---

## ✅ Part 6: Update Local Config

### Action 1: Open firebaseConfig.js

**File location:** `/AppMahasiswa/firebaseConfig.js`

**Cari baris ini:**

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### Action 2: Paste Config

**Ganti dengan config yang sudah di-copy dari Firebase Console:**

**SEBELUM:**

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  // ...
};
```

**SESUDAH:**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyABC123DEF456GHI789JKL012MNO345PQR",
  authDomain: "appmahasiswa-abc123.firebaseapp.com",
  projectId: "appmahasiswa-abc123",
  storageBucket: "appmahasiswa-abc123.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789",
};
```

### Action 3: Save File

- ✅ Save file (Cmd+S / Ctrl+S)
- ✅ Verify tidak ada typo
- ✅ Verify semua string ada closing quote

---

## 🎯 Navigation Reference

Untuk navigasi di Firebase Console:

**Sidebar Structure:**

```
[Logo] Firebase Console

Project Overview (🏠)

[Engage]
  > Analytics
  > Messaging
  ...

[Build]
  > Authentication    ← Setup di sini
  > Firestore Database ← Setup di sini
  > Storage
  > Hosting
  > Functions
  ...

[Release & Monitor]
  ...

[⚙️] Settings         ← Get config di sini
```

---

## 📋 Quick Checklist Visual Verification

Setelah semua langkah, verify di Firebase Console:

### ✅ Authentication Check

1. Sidebar → Authentication
2. Tab "Sign-in method"
3. Verify: Email/Password = **Enabled** ✓

### ✅ Firestore Check

1. Sidebar → Firestore Database
2. Tab "Data"
3. Verify: Collection **"mahasiswa"** exists
4. Verify: Minimal 3+ documents dengan fields:
   - nim (string)
   - nama (string)
   - jurusan (string)
   - semester (number)
   - createdAt (string)

### ✅ Config Check

1. Sidebar → Settings ⚙️ → Project settings
2. Section "Your apps"
3. Verify: Web app "AppMahasiswa" listed
4. Local file `firebaseConfig.js` sudah updated

---

## 🎨 Color & Icon Legend

**Firebase Console UI Elements:**

- 🔵 Blue buttons = Primary actions (Save, Continue, Enable)
- ⚪ White buttons = Secondary actions (Cancel)
- 🟢 Green checkmark = Feature enabled
- 🔴 Red X = Error or disabled
- ⚙️ Gear icon = Settings
- ➕ Plus icon = Add new

**Tab indicators:**

- Bold text = Active tab
- Normal text = Inactive tab

---

## 🚨 Common Visual Cues for Errors

**Error states di Firebase Console:**

1. **Red banner at top:**

   - "Error creating database"
   - "Invalid configuration"
     → Retry the action

2. **Yellow warning banner:**

   - "Test mode expires in X days"
     → Normal untuk development, update rules nanti

3. **Empty collection:**

   - "This collection is empty"
     → Add documents using "Add document" button

4. **Permission denied:**
   - "Missing or insufficient permissions"
     → Check Firestore Rules di tab "Rules"

---

**Selesai!**

Jika semua screen/step sudah diikuti, Firebase setup Anda sudah complete ✅

Next: Update `firebaseConfig.js` dan jalankan `npx expo start`
