import { Calendar, MapPin, Clock, Users, Trophy, FileText, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Kegiatan = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const kegiatan = [
    {
      id: 1,
      title: "Lomba Volly",
      description: "Turnamen bola voli untuk memeriahkan perayaan HUT RI ke-80",
      tanggal: "11-15 Agustus 2025",
      waktu: "19.30 s/d selesai",
      lokasi: "Lapangan Masjid",
      peserta: "Tim Campuran",
      kategori: "Olahraga",
      status: "Akan Datang",
      juknis: {
        syarat: [
          "Satu tim terdiri dari 6 pemain utama dan 2 cadangan",
          "Peserta berusia minimal 17 tahun",
          "Wajib membawa fotokopi KTP/KK",
          "Mendaftar paling lambat 10 Agustus 2025"
        ],
        hadiah: [
          "Juara 1: Uang tunai Rp 500.000 + Trophy",
          "Juara 2: Uang tunai Rp 300.000 + Trophy", 
          "Juara 3: Uang tunai Rp 200.000 + Trophy"
        ],
        ketentuan: [
          "Sistem pertandingan gugur",
          "Durasi pertandingan 3 set",
          "Menggunakan peraturan PBVSI",
          "Keputusan wasit tidak dapat diganggu gugat"
        ]
      }
    },
    {
      id: 2,
      title: "Tirakatan",
      description: "Acara tirakatan menjelang HUT RI ke-80 dengan doa bersama dan renungan",
      tanggal: "16 Agustus 2025",
      waktu: "19.30 s/d selesai",
      lokasi: "Halaman Rumah Bp Arief M. W",
      peserta: "Seluruh Warga",
      kategori: "Keagamaan",
      status: "Akan Datang",
      juknis: {
        syarat: [
          "Terbuka untuk seluruh warga",
          "Diharapkan membawa sajadah/alas duduk",
          "Berpakaian sopan dan rapi",
          "Datang tepat waktu"
        ],
        rundown: [
          "19.30 - 20.00: Pembukaan dan sambutan",
          "20.00 - 21.00: Doa bersama dan dzikir",
          "21.00 - 22.00: Renungan sejarah kemerdekaan",
          "22.00 - selesai: Penutup dan makan bersama"
        ],
        fasilitas: [
          "Konsumsi disediakan panitia",
          "Sound system",
          "Penerangan memadai",
          "Tempat parkir tersedia"
        ]
      }
    },
    {
      id: 3,
      title: "Lomba Anak",
      description: "Berbagai lomba menarik untuk anak-anak dalam rangka HUT RI",
      tanggal: "18 Agustus 2025",
      waktu: "07.00 s/d selesai",
      lokasi: "Lapangan Masjid",
      peserta: "Anak-anak",
      kategori: "Lomba",
      status: "Akan Datang",
      juknis: {
        kategori_lomba: [
          "Lomba makan kerupuk (5-8 tahun)",
          "Lomba balap karung (9-12 tahun)",
          "Lomba estafet kelereng (13-15 tahun)",
          "Lomba fashion show kostum tradisional (semua umur)"
        ],
        syarat: [
          "Anak berusia 5-15 tahun",
          "Mendaftar dengan didampingi orang tua",
          "Membawa fotokopi kartu keluarga",
          "Pendaftaran gratis"
        ],
        hadiah: [
          "Setiap kategori: Juara 1, 2, 3 mendapat hadiah",
          "Semua peserta mendapat sertifikat",
          "Doorprize menarik untuk peserta",
          "Konsumsi gratis untuk semua peserta"
        ]
      }
    },
    {
      id: 4,
      title: "Hias Tumpeng",
      description: "Lomba menghias tumpeng dengan tema kemerdekaan Indonesia",
      tanggal: "22 Agustus 2025",
      waktu: "19.30 s/d selesai",
      lokasi: "Halaman Rumah Bp Arief M. W",
      peserta: "Ibu-ibu PKK",
      kategori: "Seni",
      status: "Akan Datang",
      juknis: {
        syarat: [
          "Peserta adalah ibu-ibu warga setempat",
          "Membawa bahan tumpeng sendiri",
          "Tema wajib: Kemerdekaan Indonesia",
          "Waktu pengerjaan maksimal 2 jam"
        ],
        kriteria_penilaian: [
          "Kreativitas dan originalitas (30%)",
          "Kesesuaian tema kemerdekaan (25%)",
          "Kebersihan dan kerapihan (20%)",
          "Cita rasa (25%)"
        ],
        hadiah: [
          "Juara 1: Uang tunai Rp 300.000 + Trophy",
          "Juara 2: Uang tunai Rp 200.000 + Trophy",
          "Juara 3: Uang tunai Rp 100.000 + Trophy",
          "Juara harapan: Hampers"
        ],
        fasilitas: [
          "Meja dan peralatan dasar disediakan",
          "Air bersih dan listrik tersedia",
          "Tempat cuci piring",
          "Juri profesional dari bidang kuliner"
        ]
      }
    },
    {
      id: 5,
      title: "Lomba Karaoke",
      description: "Lomba karaoke dengan lagu-lagu nasional dan daerah",
      tanggal: "22 Agustus 2025",
      waktu: "19.30 s/d selesai",
      lokasi: "Halaman Rumah Bp Arief M. W",
      peserta: "Remaja & Dewasa",
      kategori: "Seni",
      status: "Akan Datang",
      juknis: {
        syarat: [
          "Usia minimal 13 tahun",
          "Membawa 2 lagu pilihan (wajib 1 lagu nasional)",
          "Daftar maksimal 50 peserta",
          "Pendaftaran dibuka mulai 15 Agustus 2025"
        ],
        ketentuan: [
          "Setiap peserta tampil maksimal 2 lagu",
          "Durasi per lagu maksimal 4 menit",
          "Dilarang menggunakan backing vocal",
          "Kostum bebas namun sopan"
        ],
        kriteria_penilaian: [
          "Ketepatan nada dan irama (40%)",
          "Ekspresi dan penghayatan (30%)",
          "Stage performance (20%)",
          "Pilihan lagu (10%)"
        ],
        hadiah: [
          "Juara 1: Uang tunai Rp 400.000 + Trophy + Sertifikat",
          "Juara 2: Uang tunai Rp 250.000 + Trophy + Sertifikat",
          "Juara 3: Uang tunai Rp 150.000 + Trophy + Sertifikat",
          "Juara favorit: Hadiah special"
        ]
      }
    },
    {
      id: 6,
      title: "Sepeda Hias",
      description: "Lomba menghias sepeda dengan tema kemerdekaan Indonesia",
      tanggal: "24 Agustus 2025",
      waktu: "07.00 s/d selesai",
      lokasi: "Perempatan RT.08",
      peserta: "Semua Umur",
      kategori: "Seni",
      status: "Akan Datang",
      juknis: {
        kategori: [
          "Kategori Anak (5-12 tahun)",
          "Kategori Remaja (13-17 tahun)",
          "Kategori Dewasa (18+ tahun)"
        ],
        syarat: [
          "Sepeda milik sendiri dalam kondisi baik",
          "Tema hiasan: Kemerdekaan Indonesia",
          "Bahan hiasan bebas (aman dan tidak berbahaya)",
          "Wajib ikut parade keliling kampung"
        ],
        kriteria_penilaian: [
          "Kreativitas hiasan (35%)",
          "Kesesuaian tema kemerdekaan (30%)",
          "Kerapihan dan kebersihan (20%)",
          "Keunikan dan originalitas (15%)"
        ],
        hadiah: [
          "Setiap kategori ada juara 1, 2, 3",
          "Juara umum terbaik mendapat hadiah khusus",
          "Semua peserta mendapat sertifikat",
          "Doorprize menarik"
        ],
        rundown: [
          "07.00 - 08.00: Registrasi dan persiapan",
          "08.00 - 09.00: Penilaian juri",
          "09.00 - 10.00: Parade keliling kampung",
          "10.00 - 11.00: Pengumuman pemenang"
        ]
      }
    },
    {
      id: 7,
      title: "Lomba Kebersihan",
      description: "Lomba kebersihan lingkungan RT untuk menyambut HUT RI",
      tanggal: "24-28 Agustus 2025",
      waktu: "Sepanjang hari",
      lokasi: "Lingkungan Dusun Dodol",
      peserta: "Seluruh RT",
      kategori: "Lingkungan",
      status: "Akan Datang",
      juknis: {
        syarat: [
          "Setiap RT wajib berpartisipasi",
          "Membersihkan area sesuai batas wilayah RT",
          "Melibatkan seluruh warga RT",
          "Dokumentasi kegiatan wajib"
        ],
        kriteria_penilaian: [
          "Kebersihan jalan dan selokan (25%)",
          "Penataan taman/ruang hijau (25%)",
          "Pengelolaan sampah (25%)",
          "Partisipasi warga (25%)"
        ],
        jadwal_penilaian: [
          "24 Agustus: Penilaian awal",
          "26 Agustus: Monitoring progress",
          "28 Agustus: Penilaian akhir dan pengumuman"
        ],
        hadiah: [
          "RT Terbersih 1: Uang tunai Rp 1.000.000",
          "RT Terbersih 2: Uang tunai Rp 750.000",
          "RT Terbersih 3: Uang tunai Rp 500.000",
          "Semua RT: Sertifikat apresiasi"
        ]
      }
    },
    {
      id: 8,
      title: "Pentas Seni",
      description: "Penampilan seni budaya untuk menutup rangkaian acara HUT RI",
      tanggal: "29 Agustus 2025",
      waktu: "19.30 s/d selesai",
      lokasi: "Perempatan RT.08",
      peserta: "Grup Seni Lokal",
      kategori: "Seni",
      status: "Akan Datang",
      juknis: {
        kategori_penampilan: [
          "Tari tradisional",
          "Musik daerah",
          "Drama/teater",
          "Puisi/deklamasi",
          "Seni modern"
        ],
        syarat: [
          "Grup minimal 3 orang, maksimal 15 orang",
          "Durasi penampilan 5-10 menit",
          "Tema: Budaya Indonesia atau Kemerdekaan",
          "Mendaftar dengan menyertakan sinopsis"
        ],
        fasilitas: [
          "Panggung dan sound system disediakan",
          "Lighting memadai",
          "Ruang ganti tersedia",
          "Konsumsi untuk peserta"
        ],
        apresiasi: [
          "Penampil terbaik mendapat hadiah",
          "Sertifikat untuk semua peserta",
          "Dokumentasi video penampilan",
          "Kesempatan tampil di acara lain"
        ]
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Akan Datang":
        return "bg-primary text-primary-foreground";
      case "Berlangsung":
        return "bg-green-500 text-white";
      case "Selesai":
        return "bg-gray-500 text-white";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getKategoriColor = (kategori: string) => {
    switch (kategori) {
      case "Olahraga":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Lomba":
        return "bg-green-100 text-green-800 border-green-200";
      case "Seni":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Keagamaan":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Lingkungan":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const contactInfo = [
    { name: "Lucky", phone: "085648919366" },
    { name: "Lulus", phone: "085731815398" },
    { name: "Edi S", phone: "081333124866" }
  ];

  if (selectedActivity) {
    const activity = kegiatan.find(k => k.id === selectedActivity);
    if (!activity) return null;

    return (
      <div className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => setSelectedActivity(null)}
            className="mb-6 sm:mb-8"
          >
            ← Kembali ke Daftar Kegiatan
          </Button>

          {/* Activity Detail */}
          <Card className="border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <Badge className={getKategoriColor(activity.kategori)}>
                  {activity.kategori}
                </Badge>
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-foreground mb-4">
                {activity.title}
              </CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-foreground">{activity.tanggal}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-foreground">{activity.waktu}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-foreground">{activity.lokasi}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-foreground">{activity.peserta}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Juknis Detail */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Petunjuk Teknis (Juknis)
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Syarat */}
                  {activity.juknis.syarat && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">📋 Syarat & Ketentuan</h4>
                      <ul className="space-y-2">
                        {activity.juknis.syarat.map((syarat, index) => (
                          <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {syarat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Hadiah */}
                  {activity.juknis.hadiah && (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">🏆 Hadiah</h4>
                      <ul className="space-y-2">
                        {activity.juknis.hadiah.map((hadiah, index) => (
                          <li key={index} className="text-sm text-yellow-800 flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">•</span>
                            {hadiah}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Kriteria Penilaian */}
                  {activity.juknis.kriteria_penilaian && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">📊 Kriteria Penilaian</h4>
                      <ul className="space-y-2">
                        {activity.juknis.kriteria_penilaian.map((kriteria, index) => (
                          <li key={index} className="text-sm text-green-800 flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            {kriteria}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fasilitas */}
                  {activity.juknis.fasilitas && (
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">🏢 Fasilitas</h4>
                      <ul className="space-y-2">
                        {activity.juknis.fasilitas.map((fasilitas, index) => (
                          <li key={index} className="text-sm text-purple-800 flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            {fasilitas}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Other juknis fields */}
                  {activity.juknis.kategori_lomba && (
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 lg:col-span-2">
                      <h4 className="font-semibold text-indigo-900 mb-3">🎯 Kategori Lomba</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {activity.juknis.kategori_lomba.map((kategori, index) => (
                          <li key={index} className="text-sm text-indigo-800 flex items-start gap-2">
                            <span className="text-indigo-600 mt-1">•</span>
                            {kategori}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activity.juknis.rundown && (
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 lg:col-span-2">
                      <h4 className="font-semibold text-orange-900 mb-3">⏰ Rundown Acara</h4>
                      <ul className="space-y-2">
                        {activity.juknis.rundown.map((item, index) => (
                          <li key={index} className="text-sm text-orange-800 flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-foreground mb-4">📞 Narahubung</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                      <p className="font-semibold text-red-900">{contact.name}</p>
                      <a 
                        href={`https://wa.me/62${contact.phone.substring(1)}`}
                        className="text-red-700 hover:text-red-800 transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Semarak Kemerdekaan
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4 sm:mb-6">
            Dusun Dodol - HUT RI ke-80
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Berbagai kegiatan menarik telah disiapkan untuk merayakan Hari Ulang Tahun Kemerdekaan Indonesia yang ke-80
          </p>
        </div>
      </div>

      {/* Kegiatan Cards */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {kegiatan.map((item) => (
            <Card key={item.id} className="group hover:shadow-red transition-all duration-300 hover:scale-105 border-primary/20 cursor-pointer"
                  onClick={() => setSelectedActivity(item.id)}>
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <Badge className={getKategoriColor(item.kategori)}>
                    {item.kategori}
                  </Badge>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-foreground font-medium">{item.tanggal}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-foreground font-medium">{item.waktu}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-foreground font-medium">{item.lokasi}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm">
                    <Users className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-foreground font-medium">{item.peserta}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Lihat Juknis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Narahubung
            </h3>
            <p className="text-base sm:text-lg mb-4 opacity-90 px-2">
              Hubungi pengurus untuk informasi lebih lanjut tentang kegiatan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="w-4 h-4" />
                  <p className="font-semibold">{contact.name}</p>
                </div>
                <a 
                  href={`https://wa.me/62${contact.phone.substring(1)}`}
                  className="text-primary-foreground/90 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;