const prisma = require("../../src/libs/prisma");

const articleSeed = async () => {
  const articles = [
    {
      title:
        "Kisah Althaf, Mahasiswa Difabel Tunarungu Selesaikan Kuliah di UGM",
      thumbnail: "https://storage.googleapis.com/hear4u_database/ugm.png",
      content: `Hidup dengan tuli bukan menjadi halangan bagi Muhammad Erwin Althaf (24). Meski menyandang disabilitas tunarungu, Althaf berhasil menyelesaikan pendidikan tinggi. Saat ini, ia sedang menempuh Program Sarjana Ilmu Peternakan di Universitas Gadjah Mada (UGM) dan baru saja menjalani sidang pendadaran.
      \n\nPada sidang pendadaran yang berlangsung Selasa (18/9), Althaf mempresentasikan penelitian tentang "Pengaruh Penambahan Bungkil Jintan Hitam Terhadap Konsumsi dan Kecernaan Pada Domba Merino." Dengan bantuan interpreter dari Unit Kegiatan Mahasiswa (UKM) Peduli Difabel UGM, Althaf mampu menjawab pertanyaan dosen penguji melalui teks yang ditampilkan di layar.
      \n\nSelama kuliah, Althaf mendapat dukungan dari teman-temannya dan bisa memahami materi melalui power point dan tulisan di papan. Namun, ia mengakui kesulitan saat dosen tidak menyampaikan materi secara visual.
      \n\nSejak kecil, Althaf mengalami tuli parsial dan hanya bisa mendengar suara dengan desibel tinggi. Meski begitu, ia tidak pernah menyerah. Althaf pernah merasa minder dan depresi, terutama ketika mendapatkan nilai D. Namun, ia terus berusaha dan bersyukur dengan kondisinya.
      \n\nAlthaf menjalani pendidikan dasar di sekolah umum setelah sebelumnya bersekolah di SLB. Dokter menyarankan orang tuanya untuk memasukkan Althaf ke sekolah umum karena kecerdasannya normal. Althaf kemudian melanjutkan pendidikan SMA di Yogyakarta dan berhasil masuk UGM tanpa tes melalui jalur SNMPTN Undangan.
      \n\nMeskipun memiliki keterbatasan, Althaf termasuk mandiri dan aktif dalam UKM Peduli Difabel UGM. Ia percaya bahwa keterbatasan bukan penghalang untuk meraih mimpi dan sukses.
      \n\nUGM terus berkomitmen untuk mendukung mahasiswa penyandang disabilitas dengan menyediakan fasilitas yang mudah diakses dan sistem pengajaran yang inklusif.
      \n\n[Sumber](https://ugm.ac.id/id/berita/18457-kisah-althaf-mahasiswa-penyandang-disabilitas-tunarungu-selesaikan-kuliah-di-ugm/)`,
      publishedAt: new Date("2019-09-18T15:23:00Z"), // Publish at 18 September 2019, 15:23
    },
    {
      title:
        "Kisah Inspiratif Nadya Andini, Penyandang Tunarungu Raih Cum Laude di ITS",
      thumbnail: "https://storage.googleapis.com/hear4u_database/its.png",
      content: `nNadya Andini, wisudawan ITS penyandang tunarungu saat menerima ijazah dari Rektor ITS Prof Dr Ir Mochamad Ashari MEng saat prosesi wisuda ke-129 ITS di Graha Sepuluh Nopember ITS. 
      \n\nWisuda ke-129 Institut Teknologi Sepuluh Nopember (ITS) Surabaya pada 21 April 2024 menjadi momen berharga bagi Nadya Andini, wisudawan penyandang tunarungu yang menyelesaikan studinya dalam 3,5 tahun dengan predikat Cum Laude. Terlahir dengan kondisi kurang dengar, Nadya membuktikan tekadnya untuk menempuh pendidikan tinggi dengan meraih IPK 3,88.
      \n\nAlat bantu dengar yang kurang efektif membuat Nadya harus merekam penjelasan dosen dan memintanya dijelaskan ulang di rumah oleh ibunya. Meskipun menghadapi kesulitan berkomunikasi dengan teman-temannya, Nadya tidak menyerah dan terus berusaha memahami materi dengan belajar mandiri.
      \n\nGadis kelahiran Pamekasan, 24 Mei 2001 ini aktif dalam berbagai kegiatan di luar akademik, termasuk perlombaan dan program magang. Dukungan dari sang ibu dan motivasi yang kuat mendorongnya untuk terus maju meski dengan segala keterbatasan.
      \n\nNadya berharap kisahnya dapat menjadi inspirasi bagi orang-orang yang berusaha mengejar mimpi. "Keterbatasan hanyalah awal perjalanan, jangan menyerah dan teruslah melangkah untuk meraih cita-cita pendidikan," tegasnya. Pada prosesi wisuda, ia menyampaikan pesan bahwa dukungan dari dosen dan teman-teman memberikan energi positif untuk terus berjuang meraih impian.
      \n\nsumber: SuaraMerdeka Surabaya`,
      publishedAt: new Date("2024-04-22T11:00:00Z"), // Publish at 22 April 2024, 11:00
    },
    {
      title: "Kisah Inspiratif Haydar, Hafizh Qur'an Penyandang Tuna Rungu",
      thumbnail: "https://storage.googleapis.com/hear4u_database/haydar.png",
      content: `Ali Haydar Altway, meski dengan keterbatasan pendengaran dan menggunakan implan koklea, berhasil menghafal Al-Quran 30 juz. Pada 2 Juli 2020, ia menerima penghargaan dari Museum Rekor Indonesia (MURI) sebagai penyintas tuna rungu yang menghafal Al-Quran.
      \n\nHaydar adalah anak dari Ahmad Rifqy dan Nadiya asal Surabaya. Mereka sangat bangga dengan prestasi Haydar dan berharap dapat menjadi inspirasi bagi orangtua anak berkebutuhan khusus. "Tugas kita adalah berusaha sekuat tenaga untuk memberikan yang terbaik," ujar sang ayah.
      \n\nSelain menghafal Al-Quran, Haydar juga sering diminta memberikan motivasi dalam berbagai kegiatan penyandang disabilitas. Pada tahun 2019, ia dinobatkan sebagai salah satu dari 11 role model tuna rungu Indonesia dan mengikuti kongres internasional di Bali dan Jakarta.
      \n\nPola hafalan Al-Quran Haydar terbentuk saat mondok di Pesantren Tahfizh Daarul Quran Ungaran. Meskipun lingkungan pesantren penuh tantangan, Haydar tetap semangat dan berhasil menghafal seluruh isi Al-Quran.
      \n\nKisah Haydar bermula saat usianya belum genap satu tahun. Setelah pemeriksaan di RSCM, ia dinyatakan mengalami gangguan pendengaran berat. Setelah menggunakan Alat Bantu Dengar (ABD), ia menjalani operasi Cochlear Implant (CI) di Singapura pada tahun 2005.
      \n\nKeberhasilan Haydar menghafal Al-Quran membuktikan bahwa keterbatasan fisik tidak menghalangi seseorang untuk meraih prestasi. Sang ayah berpesan agar para orangtua tidak memaksakan anaknya untuk mondok, melainkan dengan ikhlas. "Jangan menyerah, berjuang terus sampai habis," tegas Haydar.`,
      publishedAt: new Date("2021-01-01T09:48:00Z"), // Publish at 1 Januari 2021, 9:48 WIB
    },
    {
      title: "Kenapa Saya Punya Keterbatasan? Kenapa Harus Saya?",
      thumbnail: "https://storage.googleapis.com/hear4u_database/angie.png",
      content: `Sebuah pertanyaan singkat namun sangat mendalam dari seorang gadis cilik kelas dua SD, ketika di vonis sang dokter membuat gelap seluruh dunianya. Hanya kasih sayang Orang Tua dan Keluarga di rumah yang mampu membuatnya bertahan hingga kini, meski harus setiap saat memakai alat bantu dengar.
      \n\nYa, gadis cilik itu adalah Angkie Yudistia. Seorang yang tegar hingga mampu beradaptasi dan melewati berbagai macam cobaan dalam hidup, hingga akhirnya ia menuliskan perjalanan hidupnya dalam sebuah buku "Perempuan Tuna Rungu Menembus Batas". Angkie, sapaan akrabnya yang sedari kecil bersekolah umum selalu di kucilkan oleh kawan-kawan sebayanya karena ia menderita kurang pendengaran, atau tuna rungu. Namun seiring waktu berjalan, ia dapat merubah itu semua, dari suatu keterbatasan menjadi sebuah kelebihan. "Saat duduk di bangku SD, SMP dan SMA, saya selalu jadi pusat perhatian. Sayangnya, kala itu saya tidak mendapat perhatian karena berhasil jadi artis remaja atau bintang iklan terkenal. Tetapi perhatian itu datang karena saya adalah seoragn tuna rungu, yang seringkali bicara terbata-bata dan jarang sekali merespon teguran atau bahkan panggilan orang-orang sekitar..." Ungkap Angkie dalam bukunya.
      \n\nKejujuran itu mahal harganya. Angkie yang selalu menyebutkan bahwa dirinya adalah seorang tuna rungu dalam setiap interview, kembali harus mengalami getirnya kehidupan. Berbulan-bulan ia melamar pekerjaan di berbagai tempat, selama itu juga ia telah ditolak hingga lebih dari 20 perusahaan dengan alasasan yang beragam namun pada intinya sama, mereka tidak menghargai kekurangan seseorang! Yang terlebih menyakitkan lagi adalah ketika ia ditolak mentah-mentah, ketika perusahaan yang dilamar itu mengetahui bahwa Angkie tidak dapat menggunakan fasilitas telepon... Kendati begitu, Angkie tetap berusaha, berusaha dan berusaha tanpa mengenal lelah. Ia beranggapan bahwa di tolak dari sebuah perusahaan atau dua puluh perusahaan sekalipun, tidak mengahalangi niatnya untuk mencobanya lagi. Ia selalu yakin bahwa di Indonesia ini terdapat ribuan perusahaan, dan mengenai ditolaknya ia pada saat melamar sebelumnya sama sekali tidak di ambil hati. Justru itu semua menjadi semacam motivasi yang melecut dalam diri Angkie, sampai datang sebuah kesempatan untuknya bekerja sebagai humas dari sebuah perusahaan multi nasional.
      \n\nPelajaran Berharga dari Angkie. Buku setebal 115 halaman ini mengajarkan kepada kita, yang normal untuk tetap berusaha dan pantang menyerah sebagaimana yang biasa dilakukan oleh Angkie dan juga penderita difabel lainnya. Saya bersyukur sore tadi mendapatkan kiriman buku ini dari Angkie, seorang yang sangat aktif untuk menyuarakan semangat bagi kaum difabel. Seperti halnya sebuah kutipan dari Chappy Hakim yang terdapat dalam buku tersebut: "Jadilah kaum optimis yang bisa berubah menjadi kaum pemenang, Jangan jadi kaum pesimis yang berubah menjadi kaum pecundang."
      \n\nSumber : Kompasiana.com\n25 Juni 2015 05:32`,
      publishedAt: new Date("2015-06-25T05:32:00Z"), // Publish at 25 Juni 2015, 05:32 WIB
    },
  ];

  await prisma.article.createMany({ data: articles });

  return;
};

module.exports = articleSeed;
