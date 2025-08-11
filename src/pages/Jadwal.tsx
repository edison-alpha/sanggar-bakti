import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Jadwal = () => {
  const jadwalKegiatan = [
    {
      tanggal: "17 Agustus 2025",
      hari: "Minggu",
      kegiatan: [
        {
          waktu: "06:30 - 07:00",
          nama: "Persiapan Upacara",
          lokasi: "Lapangan Desa",
          status: "Persiapan"
        },
        {
          waktu: "07:00 - 09:00",
          nama: "Upacara Bendera HUT RI ke-80",
          lokasi: "Lapangan Desa",
          status: "Utama"
        },
        {
          waktu: "09:30 - 10:00",
          nama: "Istirahat & Pembagian Snack",
          lokasi: "Area Sekitar Lapangan",
          status: "Istirahat"
        },
        {
          waktu: "10:00 - 11:00",
          nama: "Lomba Makan Kerupuk",
          lokasi: "Lapangan Desa",
          status: "Lomba"
        },
        {
          waktu: "11:00 - 12:00",
          nama: "Lomba Balap Karung",
          lokasi: "Lapangan Desa",
          status: "Lomba"
        },
        {
          waktu: "12:00 - 13:00",
          nama: "Istirahat & Makan Siang",
          lokasi: "Balai Desa",
          status: "Istirahat"
        },
        {
          waktu: "13:00 - 17:00",
          nama: "Pameran Kebudayaan Indonesia",
          lokasi: "Balai Desa",
          status: "Pameran"
        }
      ]
    },
    {
      tanggal: "18 Agustus 2025",
      hari: "Senin",
      kegiatan: [
        {
          waktu: "09:00 - 12:00",
          nama: "Persiapan Pertunjukan",
          lokasi: "Panggung Terbuka",
          status: "Persiapan"
        },
        {
          waktu: "13:00 - 17:00",
          nama: "Pameran Kebudayaan Indonesia (Lanjutan)",
          lokasi: "Balai Desa",
          status: "Pameran"
        },
        {
          waktu: "18:00 - 19:00",
          nama: "Persiapan Panggung",
          lokasi: "Panggung Terbuka",
          status: "Persiapan"
        },
        {
          waktu: "19:00 - 21:00",
          nama: "Pertunjukan Seni Tradisional",
          lokasi: "Panggung Terbuka",
          status: "Pertunjukan"
        },
        {
          waktu: "21:00 - 21:30",
          nama: "Penutupan & Bersih-bersih",
          lokasi: "Area Acara",
          status: "Penutupan"
        }
      ]
    },
    {
      tanggal: "19 Agustus 2025",
      hari: "Selasa",
      kegiatan: [
        {
          waktu: "07:00 - 08:00",
          nama: "Persiapan Bakti Sosial",
          lokasi: "Balai Desa",
          status: "Persiapan"
        },
        {
          waktu: "08:00 - 10:00",
          nama: "Pembagian Sembako",
          lokasi: "Balai Desa",
          status: "Bakti Sosial"
        },
        {
          waktu: "10:00 - 12:00",
          nama: "Layanan Kesehatan Gratis",
          lokasi: "Balai Desa",
          status: "Bakti Sosial"
        },
        {
          waktu: "12:00 - 13:00",
          nama: "Evaluasi & Penutupan",
          lokasi: "Balai Desa",
          status: "Penutupan"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Utama":
        return "bg-primary text-primary-foreground";
      case "Lomba":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pameran":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Pertunjukan":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Bakti Sosial":
        return "bg-red-100 text-red-800 border-red-200";
      case "Persiapan":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Istirahat":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Penutupan":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Jadwal Kegiatan
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4 sm:mb-6">
            HUT RI ke-80
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Jadwal lengkap kegiatan peringatan Hari Ulang Tahun Kemerdekaan Indonesia yang ke-80
          </p>
        </div>
      </div>

      {/* Jadwal Timeline */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="space-y-8 sm:space-y-12">
          {jadwalKegiatan.map((hari, index) => (
            <div key={index} className="relative">
              {/* Tanggal Header */}
              <div className="sticky top-16 sm:top-20 z-10 bg-gradient-primary text-primary-foreground rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-red">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold">{hari.tanggal}</h3>
                    <p className="text-base sm:text-lg opacity-90">{hari.hari}</p>
                  </div>
                </div>
              </div>

              {/* Kegiatan Cards */}
              <div className="grid gap-4 sm:gap-6">
                {hari.kegiatan.map((kegiatan, kegiatanIndex) => (
                  <Card key={kegiatanIndex} className="group hover:shadow-red transition-all duration-300 hover:scale-[1.02] border-primary/20">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                          {kegiatan.nama}
                        </CardTitle>
                        <Badge className={getStatusColor(kegiatan.status)}>
                          {kegiatan.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs sm:text-sm text-muted-foreground">Waktu</p>
                            <p className="font-semibold text-sm sm:text-base text-foreground">{kegiatan.waktu}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs sm:text-sm text-muted-foreground">Lokasi</p>
                            <p className="font-semibold text-sm sm:text-base text-foreground">{kegiatan.lokasi}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="bg-gradient-accent rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            Informasi Penting
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-primary">Persiapan Peserta</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>• Datang 30 menit sebelum acara dimulai</li>
                <li>• Kenakan pakaian yang sopan dan rapi</li>
                <li>• Bawa perlengkapan sendiri jika diperlukan</li>
                <li>• Patuhi protokol kesehatan yang berlaku</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-primary">Kontak Panitia</h4>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p><strong>Koordinator:</strong> Budi Santoso</p>
                <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
                <p><strong>Email:</strong> sanggar.bakti@email.com</p>
                <p><strong>Instagram:</strong> @sanggarbakti_official</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;