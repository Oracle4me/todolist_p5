Todolist Website using MERN Stack
Ini adalah proyek sederhana untuk membuat aplikasi Todolist menggunakan MERN Stack (MongoDB, Express.js, React.js, Node.js). Todolist adalah aplikasi yang memungkinkan pengguna untuk menambahkan, menghapus, dan menandai tugas-tugas yang perlu dilakukan.

Cara Menjalankan Aplikasi
Berikut adalah langkah-langkah untuk menjalankan aplikasi Todolist di lokal Anda:

1. Clone Repository
bash
Salin kode
git clone https://github.com/namarepo/nama-proyek.git
cd nama-proyek
2. Instal Dependencies
Di dalam folder server dan client, jalankan perintah:

bash
Salin kode
cd server
npm install
cd ../client
npm install
3. Setting Database
Pastikan Anda memiliki MongoDB server berjalan di komputer Anda atau gunakan layanan MongoDB Atlas. Kemudian, buat file .env di dalam folder server dan tambahkan koneksi MongoDB Anda seperti berikut:

makefile
Salin kode
MONGODB_URI=your_mongodb_connection_string
4. Jalankan Server dan Client
Kembali ke root folder proyek, jalankan server dan client secara bersamaan:

bash
Salin kode
# Di dalam folder server
cd ../server
npm start

# Di dalam folder client
cd ../client
npm start
Server akan berjalan pada port 5000, dan client akan berjalan pada port 3000 secara default.

5. Buka Aplikasi di Browser
Buka browser dan kunjungi http://localhost:3000 untuk melihat aplikasi Todolist berjalan.

Fitur
Menambahkan tugas baru.
Menandai tugas yang telah selesai.
Menghapus tugas.
Menampilkan daftar tugas.
Struktur Folder
csharp
Salin kode
nama-proyek/
│
├── client/         # Frontend (React.js)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── ...
│
└── server/         # Backend (Node.js/Express.js)
    ├── config/
    ├── models/
    ├── routes/
    ├── controllers/
    ├── middleware/
    ├── index.js
    └── ...
Teknologi yang Digunakan
MongoDB: Database NoSQL untuk menyimpan data.
Express.js: Framework Node.js untuk membuat server.
React.js: Library JavaScript untuk membangun antarmuka pengguna.
Node.js: Runtime JavaScript yang digunakan untuk menjalankan server.
Kontribusi
Kontribusi selalu disambut! Silakan buat pull request jika Anda ingin memperbaiki atau menambah fitur pada proyek ini.

Lisensi
Proyek ini dilisensikan di bawah MIT License.
