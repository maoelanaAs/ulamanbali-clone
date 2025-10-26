# Front End Test – MINDIMEDIA

Position: Front End Programmer
Framework: Next.js 16
Deployment: Vercel

1. Project Overview

Project ini adalah hasil cloning dari ulamanbali.com, dibuat menggunakan Next.js, Tailwind CSS, Flowbite React, dan GSAP untuk animasi.
Fokus utama: kesamaan UI/UX minimal 80%, performa cepat, struktur komponen rapi, dan responsif di berbagai perangkat.

2. Live Demo & Repository

Live Demo: https://yourproject.vercel.app

GitHub Repo: https://github.com/yourusername/ulamanbali-clone

3. Setup Instructions
   Clone Repository
   git clone https://github.com/yourusername/ulamanbali-clone.git
   cd ulamanbali-clone

Install Dependencies
npm install

Run Development Server
npm run dev

Buka http://localhost:3000 di browser.

Build for Production
npm run build
npm start

Environment Variables

Buat file .env.local jika dibutuhkan untuk variabel API di masa depan.
Saat ini data bersifat statis (tidak menggunakan CMS atau API).

4. Tech Stack

Next.js 16 (App Router)

React 19

Tailwind CSS

Flowbite & Flowbite React untuk komponen UI

GSAP untuk animasi

Vercel untuk deployment

5. Folder Structure
   components/
   ui/
   layout/
   sections/
   pages/
   api/
   public/
   styles/

Struktur ini menjaga komponen tetap modular, mudah diatur, dan mudah digunakan ulang.

6. Additional Questions & Answers
1. Component Structure

Komponen dikelompokkan menjadi:

ui: komponen kecil dan reusable (Button, Modal, Card).

layout: struktur utama (Header, Footer, Layout dasar).

sections: bagian halaman (Hero, Gallery, RoomList).
Pendekatan ini menjaga proyek tetap mudah dipelihara.

2. State Management

Gunakan local state (useState, useReducer) karena aplikasi bersifat statis.
Tidak menggunakan global state seperti Redux atau Zustand karena belum dibutuhkan.

3. Responsive Strategy

Gunakan Tailwind CSS breakpoints (sm, md, lg, xl).

Gunakan grid dan flexbox untuk layout dinamis.

Unit relatif (rem, vw, vh) agar layout tetap proporsional.

4. Performance Optimization

Gunakan next/image untuk optimasi gambar.

Gunakan next/dynamic untuk lazy loading komponen berat.

Gunakan cache browser default Next.js.

Build menggunakan next build agar otomatis minify dan optimize.

5. Data Fetching (Local JSON)

Data statis disimpan dalam file JSON lokal.
Struktur dirancang fleksibel agar mudah dikembangkan menjadi API.

{
"rooms": [],
"facilities": [],
"gallery": []
}

6. API Integration

Belum menggunakan API eksternal.
Struktur project sudah siap untuk penambahan API di masa depan menggunakan folder lib/api atau pages/api.

7. Content Structure

Gunakan struktur sederhana dan konsisten:

{
"title": "Ocean View Suite",
"description": "Kamar dengan pemandangan laut",
"images": ["img1.jpg", "img2.jpg"]
}

Struktur ini mudah diperluas untuk tipe konten baru.

8. Vercel Deployment

Hubungkan repository GitHub ke Vercel.

Deploy otomatis setiap push ke branch main.

next.config.mjs telah diatur untuk optimasi gambar dan output standalone.

9. Environment Setup

Gunakan .env.local untuk development dan .env.production untuk environment produksi di Vercel.
Tidak ada variabel sensitif di project ini.

10. Asset Optimization

Gunakan next/image untuk semua gambar besar.

Gunakan font dari Google Fonts melalui next/font.

Semua asset statis disimpan di folder /public.

11. Code Organization

Gunakan alias @/ di jsconfig.json agar import lebih mudah.
Pisahkan logic dari UI agar mudah diperluas.
Gunakan Prettier dan ESLint untuk menjaga konsistensi kode.

12. Error Handling

Network Error: tampilkan fallback UI atau pesan error.

Data Kosong: tampilkan placeholder.

UI Error: gunakan ErrorBoundary (Next.js default).

7. Focus & Evaluation

Fokus pengembangan:

Kemiripan UI/UX minimal 80%.

Performa cepat dan ringan.

Kode modular dan maintainable.

Siap untuk dikembangkan dengan API atau CMS di masa depan.
