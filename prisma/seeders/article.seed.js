const prisma = require("../../src/libs/prisma");

const articleSeed = async () => {
  const articles = [
    {
      title:
        "Kisah Althaf, Mahasiswa Difabel Tunarungu Selesaikan Kuliah di UGM",
      thumbnail: "https://storage.googleapis.com/hear4u-storage/images/ugm.png",
      content: `Hidup dengan tuli bukan menjadi halangan bagi Muhammad Erwin Althaf (24). Meski menyandang disabilitas tunarungu, Althaf berhasil menyelesaikan pendidikan tinggi. Saat ini, ia sedang menempuh Program Sarjana Ilmu Peternakan di Universitas Gadjah Mada (UGM) dan baru saja menjalani sidang pendadaran.
      \n\nPada sidang pendadaran yang berlangsung Selasa (18/9), Althaf mempresentasikan penelitian tentang "Pengaruh Penambahan Bungkil Jintan Hitam Terhadap Konsumsi dan Kecernaan Pada Domba Merino." Dengan bantuan interpreter dari Unit Kegiatan Mahasiswa (UKM) Peduli Difabel UGM, Althaf mampu menjawab pertanyaan dosen penguji melalui teks yang ditampilkan di layar.
      \n\nSelama kuliah, Althaf mendapat dukungan dari teman-temannya dan bisa memahami materi melalui power point dan tulisan di papan. Namun, ia mengakui kesulitan saat dosen tidak menyampaikan materi secara visual.
      \n\nSejak kecil, Althaf mengalami tuli parsial dan hanya bisa mendengar suara dengan desibel tinggi. Meski begitu, ia tidak pernah menyerah. Althaf pernah merasa minder dan depresi, terutama ketika mendapatkan nilai D. Namun, ia terus berusaha dan bersyukur dengan kondisinya.
      \n\nAlthaf menjalani pendidikan dasar di sekolah umum setelah sebelumnya bersekolah di SLB. Dokter menyarankan orang tuanya untuk memasukkan Althaf ke sekolah umum karena kecerdasannya normal. Althaf kemudian melanjutkan pendidikan SMA di Yogyakarta dan berhasil masuk UGM tanpa tes melalui jalur SNMPTN Undangan.
      \n\nMeskipun memiliki keterbatasan, Althaf termasuk mandiri dan aktif dalam UKM Peduli Difabel UGM. Ia percaya bahwa keterbatasan bukan penghalang untuk meraih mimpi dan sukses.
      \n\nUGM terus berkomitmen untuk mendukung mahasiswa penyandang disabilitas dengan menyediakan fasilitas yang mudah diakses dan sistem pengajaran yang inklusif.
      \n\n[Sumber](https://ugm.ac.id/id/berita/18457-kisah-althaf-mahasiswa-penyandang-disabilitas-tunarungu-selesaikan-kuliah-di-ugm/)`,
      publishedAt: new Date("2024-05-31T21:00:00Z"), 
    },
    {
      title:
        "Kisah Inspiratif Nadya Andini, Penyandang Tunarungu Raih Cum Laude di ITS",
      thumbnail: "https://storage.googleapis.com/hear4u-storage/images/its.png",
      content: `Nadya Andini, wisudawan ITS penyandang tunarungu saat menerima ijazah dari Rektor ITS Prof Dr Ir Mochamad Ashari MEng saat prosesi wisuda ke-129 ITS di Graha Sepuluh Nopember ITS. 
      \n\nWisuda ke-129 Institut Teknologi Sepuluh Nopember (ITS) Surabaya pada 21 April 2024 menjadi momen berharga bagi Nadya Andini, wisudawan penyandang tunarungu yang menyelesaikan studinya dalam 3,5 tahun dengan predikat Cum Laude. Terlahir dengan kondisi kurang dengar, Nadya membuktikan tekadnya untuk menempuh pendidikan tinggi dengan meraih IPK 3,88.
      \n\nAlat bantu dengar yang kurang efektif membuat Nadya harus merekam penjelasan dosen dan memintanya dijelaskan ulang di rumah oleh ibunya. Meskipun menghadapi kesulitan berkomunikasi dengan teman-temannya, Nadya tidak menyerah dan terus berusaha memahami materi dengan belajar mandiri.
      \n\nGadis kelahiran Pamekasan, 24 Mei 2001 ini aktif dalam berbagai kegiatan di luar akademik, termasuk perlombaan dan program magang. Dukungan dari sang ibu dan motivasi yang kuat mendorongnya untuk terus maju meski dengan segala keterbatasan.
      \n\nNadya berharap kisahnya dapat menjadi inspirasi bagi orang-orang yang berusaha mengejar mimpi. "Keterbatasan hanyalah awal perjalanan, jangan menyerah dan teruslah melangkah untuk meraih cita-cita pendidikan," tegasnya. Pada prosesi wisuda, ia menyampaikan pesan bahwa dukungan dari dosen dan teman-teman memberikan energi positif untuk terus berjuang meraih impian.
      \n\nsumber: SuaraMerdeka Surabaya`,
      publishedAt: new Date("2024-05-31T21:00:00Z"), 
    },
    {
      title: "Kisah Inspiratif Haydar, Hafizh Qur'an Penyandang Tuna Rungu",
      thumbnail: "https://storage.googleapis.com/hear4u-storage/images/haydar.png",
      content: `Ali Haydar Altway, meski dengan keterbatasan pendengaran dan menggunakan implan koklea, berhasil menghafal Al-Quran 30 juz. Pada 2 Juli 2020, ia menerima penghargaan dari Museum Rekor Indonesia (MURI) sebagai penyintas tuna rungu yang menghafal Al-Quran.
      \n\nHaydar adalah anak dari Ahmad Rifqy dan Nadiya asal Surabaya. Mereka sangat bangga dengan prestasi Haydar dan berharap dapat menjadi inspirasi bagi orangtua anak berkebutuhan khusus. "Tugas kita adalah berusaha sekuat tenaga untuk memberikan yang terbaik," ujar sang ayah.
      \n\nSelain menghafal Al-Quran, Haydar juga sering diminta memberikan motivasi dalam berbagai kegiatan penyandang disabilitas. Pada tahun 2019, ia dinobatkan sebagai salah satu dari 11 role model tuna rungu Indonesia dan mengikuti kongres internasional di Bali dan Jakarta.
      \n\nPola hafalan Al-Quran Haydar terbentuk saat mondok di Pesantren Tahfizh Daarul Quran Ungaran. Meskipun lingkungan pesantren penuh tantangan, Haydar tetap semangat dan berhasil menghafal seluruh isi Al-Quran.
      \n\nKisah Haydar bermula saat usianya belum genap satu tahun. Setelah pemeriksaan di RSCM, ia dinyatakan mengalami gangguan pendengaran berat. Setelah menggunakan Alat Bantu Dengar (ABD), ia menjalani operasi Cochlear Implant (CI) di Singapura pada tahun 2005.
      \n\nKeberhasilan Haydar menghafal Al-Quran membuktikan bahwa keterbatasan fisik tidak menghalangi seseorang untuk meraih prestasi. Sang ayah berpesan agar para orangtua tidak memaksakan anaknya untuk mondok, melainkan dengan ikhlas. "Jangan menyerah, berjuang terus sampai habis," tegas Haydar.`,
      publishedAt: new Date("2024-05-31T21:00:00Z"), 
    },
    {
      title: "Kenapa Saya Punya Keterbatasan? Kenapa Harus Saya?",
      thumbnail: "https://storage.googleapis.com/hear4u-storage/images/angie.png",
      content: `Sebuah pertanyaan singkat namun sangat mendalam dari seorang gadis cilik kelas dua SD, ketika di vonis sang dokter membuat gelap seluruh dunianya. Hanya kasih sayang Orang Tua dan Keluarga di rumah yang mampu membuatnya bertahan hingga kini, meski harus setiap saat memakai alat bantu dengar.
      \n\nYa, gadis cilik itu adalah Angkie Yudistia. Seorang yang tegar hingga mampu beradaptasi dan melewati berbagai macam cobaan dalam hidup, hingga akhirnya ia menuliskan perjalanan hidupnya dalam sebuah buku "Perempuan Tuna Rungu Menembus Batas". Angkie, sapaan akrabnya yang sedari kecil bersekolah umum selalu di kucilkan oleh kawan-kawan sebayanya karena ia menderita kurang pendengaran, atau tuna rungu. Namun seiring waktu berjalan, ia dapat merubah itu semua, dari suatu keterbatasan menjadi sebuah kelebihan. "Saat duduk di bangku SD, SMP dan SMA, saya selalu jadi pusat perhatian. Sayangnya, kala itu saya tidak mendapat perhatian karena berhasil jadi artis remaja atau bintang iklan terkenal. Tetapi perhatian itu datang karena saya adalah seoragn tuna rungu, yang seringkali bicara terbata-bata dan jarang sekali merespon teguran atau bahkan panggilan orang-orang sekitar..." Ungkap Angkie dalam bukunya.
      \n\nKejujuran itu mahal harganya. Angkie yang selalu menyebutkan bahwa dirinya adalah seorang tuna rungu dalam setiap interview, kembali harus mengalami getirnya kehidupan. Berbulan-bulan ia melamar pekerjaan di berbagai tempat, selama itu juga ia telah ditolak hingga lebih dari 20 perusahaan dengan alasasan yang beragam namun pada intinya sama, mereka tidak menghargai kekurangan seseorang! Yang terlebih menyakitkan lagi adalah ketika ia ditolak mentah-mentah, ketika perusahaan yang dilamar itu mengetahui bahwa Angkie tidak dapat menggunakan fasilitas telepon... Kendati begitu, Angkie tetap berusaha, berusaha dan berusaha tanpa mengenal lelah. Ia beranggapan bahwa di tolak dari sebuah perusahaan atau dua puluh perusahaan sekalipun, tidak mengahalangi niatnya untuk mencobanya lagi. Ia selalu yakin bahwa di Indonesia ini terdapat ribuan perusahaan, dan mengenai ditolaknya ia pada saat melamar sebelumnya sama sekali tidak di ambil hati. Justru itu semua menjadi semacam motivasi yang melecut dalam diri Angkie, sampai datang sebuah kesempatan untuknya bekerja sebagai humas dari sebuah perusahaan multi nasional.
      \n\nPelajaran Berharga dari Angkie. Buku setebal 115 halaman ini mengajarkan kepada kita, yang normal untuk tetap berusaha dan pantang menyerah sebagaimana yang biasa dilakukan oleh Angkie dan juga penderita difabel lainnya. Saya bersyukur sore tadi mendapatkan kiriman buku ini dari Angkie, seorang yang sangat aktif untuk menyuarakan semangat bagi kaum difabel. Seperti halnya sebuah kutipan dari Chappy Hakim yang terdapat dalam buku tersebut: "Jadilah kaum optimis yang bisa berubah menjadi kaum pemenang, Jangan jadi kaum pesimis yang berubah menjadi kaum pecundang."
      \n\nSumber : Kompasiana.com\n25 Juni 2015 05:32`,
      publishedAt: new Date("2024-05-31T21:00:00Z"), 
    },
    {
      title: "Rafi Ridwan: Desainer Muda Indonesia yang Menaklukkan Dunia Mode",
      thumbnail : "https://storage.googleapis.com/hear4u_database/rafi%20design.png",
      content: `Rafi Abdurrahman Ridwan, yang akrab disapa Rafi Ridwan, telah menjadi sorotan dunia internasional. Di usia 14 tahun, Rafi telah mencetak prestasi gemilang sebagai perancang busana termuda di Indonesia dan dunia. Uniknya, Rafi adalah seorang penyandang tunarungu, namun hal tersebut tidak menghalanginya untuk meraih mimpi besar di dunia fashion.
      \n\nKarya-karya Rafi telah dikenakan oleh tokoh-tokoh terkenal, termasuk Tyra Banks dalam kompetisi America's Next Top Model dan Michelle Obama. Perjalanan karier Rafi dimulai sejak dini, pada ulang tahunnya yang ke-9, ia berhasil menggelar mini show berkolaborasi dengan Barli Asmara, salah satu desainer ternama Indonesia. Puncaknya, pada Jakarta Fashion Week (JFW) 2012, koleksi Rafi turut tampil di ajang fashion paling bergengsi di Tanah Air.
      \n\nPrestasi luar biasa Rafi mendapatkan perhatian khusus dari PT Telkom Indonesia (Persero) Tbk (Telkom). Pada ulang tahun Telkom yang ke-52, yang diperingati pada 6 Juli, Rafi menerima penghargaan dalam event Telkom CSR Days yang berlangsung pada 12-13 Juli 2017 di Jakarta. Telkom memberikan bantuan agar Rafi terus berkarya dan menginspirasi kaum muda.
      \n\nRafi dinilai layak menerima penghargaan ini karena prestasinya yang menginspirasi banyak orang, terutama anak muda. Telkom berharap melalui penghargaan ini, dapat mendorong lebih banyak lagi kreativitas yang bermanfaat tidak hanya bagi individu, tetapi juga bagi lingkungan sekitarnya.\n\nKeberhasilan Rafi bukanlah tanpa tantangan. Lahir sebagai penyandang tunarungu tidak menghentikan tekadnya untuk menjadi desainer kelas dunia. Rafi tidak membatasi diri untuk bermimpi besar. Pada usia yang masih belia, mimpi-mimpi Rafi satu demi satu mulai terwujud.\n\nDebut Rafi sebagai desainer dimulai pada 2011 melalui kolaborasi dengan Barli Asmara. Ia kemudian memulai pameran solonya di Jakarta Fashion Week 2012 bersama Nonita Respati dan Ariani Pradjasaputra lewat label PAR. Sejak saat itu, nama Rafi terus mencuri perhatian di kancah fashion nasional dan internasional.
      \n\nFashion telah menjadi bagian tak terpisahkan dari kehidupan Rafi. Meski memiliki kekurangan, hal tersebut tidak membuatnya putus asa. Fashion bagi Rafi bukan sekadar bisnis, melainkan cara untuk berkomunikasi dengan dunia dan menjadi semangat hidup. Semangat inilah yang ingin ditularkan Rafi kepada anak-anak muda Indonesia, agar mereka juga berani bermimpi dan mewujudkan kreasi-kreasi bermanfaat bagi diri sendiri dan lingkungan.`,
      publishedAt: new Date("2024-06-02T14:08:00Z"), 
    },
    {
      title: "Inspiratif: Kisah Aulia Difabel Netra UGM yang Menjadi Sutradara Film",
      thumbnail: "https://storage.googleapis.com/hear4u_database/netra.png",
      content: `Di tengah keterbatasan yang sering dianggap sebagai hambatan, Aulia Rachmi Kurnia (24) membuktikan bahwa semangat dan tekad dapat menaklukkan segala rintangan. Sebagai penyandang disabilitas netra, Aulia berhasil mencatatkan sejumlah prestasi gemilang, baik di bidang akademis maupun non-akademis.
      \n\nPada tahun 2022, Aulia diterima di Universitas Gadjah Mada (UGM) pada Departemen Sastra Indonesia. Pada tahun 2023, ia mensutradarai film pendek berjudul "Masih Tanda Tanya", yang tayang perdana pada bulan Maret dan telah diputar di berbagai komunitas pencinta film di tanah air.
      \n\nAulia lahir dengan penglihatan normal, namun pada usia lima tahun, ia mengalami sakit parah yang menyebabkan kebutaan. Meskipun hampir 20 tahun hidup tanpa bisa melihat dunia, ia mampu memberikan warna bagi kehidupan melalui karya-karyanya.
      \n\nMenjadi sutradara film bagi penyandang disabilitas netra adalah tantangan besar. Namun, Aulia berhasil mengatasi tantangan tersebut dengan bantuan asisten sutradara dan kerja sama tim yang luar biasa selama produksi film. "Kesulitan pasti ada karena keterbatasan visual. Namun, sangat terbantu ada asisten sutradara yang bisa menjadi 'mata' saya dan team work yang luar biasa selama produksi film," jelasnya.
      \n\n"Masih Tanda Tanya"adalah film pertama yang disutradarai oleh Aulia. Film ini menceritakan kisah cinta sepasang kekasih di mana sang laki-laki adalah penyandang disabilitas netra dan mengangkat sejumlah isu disabilitas. "Film ini terinspirasi dari kisah teman yang juga disabilitas netra," ungkapnya.
      \n\nPerjalanan Aulia dalam dunia perfilman dimulai dari keikutsertaannya dalam kelas film pada tahun 2022. Bersama lima rekannya yang juga penyandang disabilitas netra, mereka sempat dipandang sebelah mata. Namun, semangat mereka mengubah pandangan tersebut dan mendapat dukungan dari para mentor.
      \n\nPada tahun 2021, Aulia terlibat dalam produksi film "Seutas Asa", di mana ia menjadi salah satu pemain. Pengalaman ini menjadi pijakan awal bagi Aulia dalam dunia perfilman.
      \n\nMenjadi sutradara film pendek tidak pernah terlintas dalam benaknya, namun keterbatasan visual tidak menghalangi semangatnya. Ia merasa bangga dan senang bisa mensutradarai "Masih Tanda Tanya" karena ini menjadi pengalaman pertama baginya dalam belajar dan berkarya di bidang perfilman. "Gak nyangka bisa jadi sutradara. Saya belajar banyak hal tentang proses syuting, manajemen pra hingga pasca produksi, naskah, pengambilan gambar, dan kerja tim," paparnya.
      \n\nKe depan, Aulia berencana menulis naskah film lagi dengan terus mengampanyekan isu-isu inklusif, khususnya disabilitas lewat film. Ia berharap karyanya bisa menginspirasi banyak orang di Indonesia dan dunia. \"Jangan berhenti berkarya. Sebab, berkarya itu tidak mengenal golongan, disabilitas atau bukan. Selagi ada niat kita bisa berkreasi dan yakinlah ada orang-orang yang akan mendukung kita," pungkasnya.
      \n\nAulia adalah salah satu dari sedikit mahasiswa penyandang disabilitas yang diterima di UGM. Ia membuktikan bahwa keterbatasan fisik bukanlah halangan untuk terus berkreasi, berinovasi, dan belajar tanpa henti. Kehadiran mahasiswa penyandang disabilitas di UGM merupakan bukti nyata komitmen universitas tersebut untuk mewujudkan pendidikan yang inklusif, berkeadilan, dan merata bagi semua masyarakat, selaras dengan tujuan pencapaian pembangunan berkelanjutan (SDGs).`,
      publishedAt: new Date("2024-06-02T14:08:00Z"), 
    },
    {
      title: "Kisah Lia Seorang Siswi dengan Semangat Tanpa Batas",
      thumbnail: "https://storage.googleapis.com/hear4u_database/liasiswi.png",
      content: `Bagi beberapa orang, disabilitas sering dianggap sebagai penghalang terbesar dalam meraih mimpi. Tak jarang penyandang disabilitas mengalami perundungan dan perlakuan tidak adil dari orang-orang di sekitarnya. Namun, kekurangan fisik bukan alasan untuk berdiam diri dan menjalani hidup tanpa prestasi. Penyandang disabilitas tetap bisa berkarya, berkreasi, dan membantu sesama untuk mewujudkan impian.
      \n\nNovilia, atau Lia, adalah contoh nyata dari semangat tanpa batas. Lia adalah siswi SMP Negeri 2 Muara Rupit di Kabupaten Musi Rawas Utara, Sumatera Selatan. Meskipun tidak memiliki kedua tangan yang sempurna, Lia tetap rajin belajar dengan semangat tinggi.
      \n\nLia melakukan aktivitas sehari-hari seperti biasa tanpa mengeluh sedikit pun. Meski awalnya kesulitan dengan kondisi tangannya, Lia terus berusaha untuk mandiri dan melakukan aktivitas seperti orang lain. Sejak kecil, Lia tidak memiliki kedua tangan yang sempurna, namun ketidaksempurnaan itu tidak membuatnya minder atau iri pada teman-temannya. Lia selalu mensyukuri apa yang telah diberikan Tuhan.
      \n\nLia berjanji untuk selalu memberikan yang terbaik kepada kedua orang tuanya. Ia tidak pernah merasa malu atas kondisinya dan tidak patah semangat. Bahkan, Lia sangat bersyukur bisa bersekolah dan memiliki banyak teman. Cita-cita Lia adalah menjadi dokter dan atlet renang. Impian ini mendorongnya untuk terus menuntut ilmu dan memberi semangat kepada orang-orang dengan kondisi yang sama agar tidak menyerah.
      \n\nDi sekolah, Lia senang belajar bersama teman-temannya dan bertemu guru-guru yang baik. Meskipun berbeda, Lia tetap percaya diri dalam bergaul dengan anak-anak sebayanya. Tekadnya untuk belajar dengan semangat membawa Lia menjadi siswi berprestasi di sekolah.
      \n\nDi rumah, Lia tetap berbakti kepada orang tuanya dengan membantu berbagai pekerjaan rumah seperti memasak, mencuci piring, dan mencuci baju. Setelah menyelesaikan semua pekerjaan, Lia rajin belajar dan mengaji. Ibunda Lia merasa bangga dengan semangat juang dan budi pekerti Lia yang baik. Ayah Lia, yang berprofesi sebagai supir, merasa senang dengan anaknya yang tekun dan rajin belajar.
      \n\nHarapan dari kisah Lia adalah agar generasi milenial sekarang bisa termotivasi untuk semangat belajar dan tidak bermalas-malasan. Jangan pernah mengucilkan atau memandang sebelah mata orang-orang seperti Lia. Semangat tanpa batasnya dalam menimba ilmu patut menjadi inspirasi bagi kita semua. Keterbatasan bukanlah halangan untuk meraih prestasi, dan Lia adalah contoh nyata bahwa di balik kekurangan seseorang pasti ada kelebihan.`,
      publishedAt: new Date("2024-06-02T14:08:00Z"),
    },
  ];

  await prisma.article.createMany({ data: articles });

  return;
};

module.exports = articleSeed;
