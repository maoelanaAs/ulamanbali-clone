# **Front End Test – MINDIMEDIA (Ulaman Bali Clone)**

Ini adalah proyek kloning dari **ulamanbali.com** yang dibuat sebagai bagian dari tes Front End Programmer di Mind Interactive Media. Proyek ini dibangun menggunakan Next.js (App Router), Tailwind CSS, Flowbite React, dan GSAP untuk animasi.

Fokus utama proyek ini adalah mencapai kesamaan UI/UX minimal 80% dengan situs aslinya, memastikan performa yang cepat, menjaga struktur komponen yang rapi, dan responsif di berbagai perangkat.

## **1\. Live Demo & Repository**

- **Live Demo:** https://ulamanbali-clone.vercel.app/
- **GitHub Repo:** https://github.com/maoelanaAs/ulamanbali-clone

## **2\. Tech Stack**

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS
- **UI Components:** Flowbite & Flowbite React
- **Animasi:** GSAP (GreenSock Animation Platform)
- **Deployment:** Vercel

## **3\. Setup & Instalasi**

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

**1\. Clone Repository**

       git clone https://github.com/maoelanaAs/ulamanbali-clone.git
       cd ulamanbali-clone

**2\. Install Dependencies**

       npm install

**3\. Run Development Server**

       npm run dev

Buka http://localhost:3000 di browser Anda.

## **4\. Additional Questions & Answers**

### **1\. Component Structure**

Komponen dibagi berdasarkan fungsinya:

- ui: elemen kecil seperti Button, Card, Modal.
- layout: struktur besar seperti Header, Footer, Layout utama.
- sections: blok halaman seperti Hero, About, Rooms.

Tujuannya agar komponen reusable dan mudah dipelihara.

### **2\. State Management**

Gunakan **local state** (useState/useReducer) untuk komponen kecil.

### **3\. Responsive Strategy**

Gunakan breakpoint Tailwind (sm, md, lg, xl).
Gunakan unit relatif (rem, vw, vh).
Gunakan layout fleksibel seperti grid dan flex agar proporsional di semua layar.

### **4\. Performance Optimization**

- Code splitting dan lazy loading dengan next/dynamic.
- Optimasi gambar menggunakan next/image.

### **5\. Data Fetching (Local JSON)**

### **6\. API Integration**

Gunakan folder lib/api untuk semua request.
Gunakan try/catch untuk error handling dan tampilkan fallback UI.

### **7\. Content Structure**

### **8\. Vercel Deployment**

Konfigurasi optimal:

- next.config.js dengan pengaturan images.domains.
- File vercel.json untuk redirect dan caching.
- Build otomatis via GitHub setiap push ke main branch.

### **9\. Environment Setup**

Gunakan .env.local untuk development dan .env.production untuk produksi di Vercel.
Variabel penting seperti API_URL dan TOKEN tidak ditulis di kode publik.

### **10\. Asset Optimization**

- Gambar dioptimalkan dengan next/image.
- Font dari Google Fonts melalui next/font.
- Asset statis disimpan di /public.

### **11\. API Design (Laravel Filament)**

Gunakan pola RESTful:

- GET /api/rooms
- GET /api/facilities
- POST /api/bookings

Gunakan Laravel Resource untuk output JSON terstandar.

### **12\. Content Modeling**

### **13\. Admin UX**

Fitur penting:

- Upload gambar drag-and-drop.
- Live preview konten.
- Filter dan pencarian.
- Validasi sebelum publish.

### **14\. Code Organization**

Struktur folder modular, gunakan alias @/ untuk import.
Pisahkan logic dari tampilan agar mudah dikembangkan tim.

### **15\. Error Handling**

- **Network Error:** tampilkan notifikasi “Gagal memuat data, coba lagi.”
- **Empty Data:** tampilkan placeholder.
- **UI Error:** gunakan Error Boundary.
