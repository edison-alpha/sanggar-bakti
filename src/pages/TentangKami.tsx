import { Users, Target, Heart, Award, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TentangKami = () => {
  const pengurus = [
    {
      nama: "Budi Santoso",
      jabatan: "Ketua",
      foto: "🧑‍💼"
    },
    {
      nama: "Sari Dewi",
      jabatan: "Wakil Ketua",
      foto: "👩‍💼"
    },
    {
      nama: "Andi Wijaya",
      jabatan: "Sekretaris",
      foto: "🧑‍💻"
    },
    {
      nama: "Maya Sari",
      jabatan: "Bendahara",
      foto: "👩‍💻"
    },
    {
      nama: "Rizki Pratama",
      jabatan: "Koordinator Acara",
      foto: "🧑‍🎨"
    },
    {
      nama: "Dewi Lestari",
      jabatan: "Humas",
      foto: "👩‍🎨"
    }
  ];

  const visiMisi = {
    visi: "Menjadi organisasi kepemudaan yang berperan aktif dalam pembangunan masyarakat dan pelestarian budaya Indonesia.",
    misi: [
      "Mengembangkan potensi pemuda melalui berbagai kegiatan positif",
      "Melestarikan budaya dan tradisi Indonesia",
      "Membangun solidaritas dan kebersamaan di kalangan pemuda",
      "Berpartisipasi aktif dalam pembangunan masyarakat",
      "Menumbuhkan rasa nasionalisme dan patriotisme"
    ]
  };

  const programKerja = [
    {
      icon: Users,
      title: "Pembinaan Pemuda",
      description: "Program pembinaan karakter dan keterampilan untuk pemuda"
    },
    {
      icon: Heart,
      title: "Bakti Sosial",
      description: "Kegiatan rutin bakti sosial untuk membantu masyarakat"
    },
    {
      icon: Award,
      title: "Lomba & Festival",
      description: "Menyelenggarakan berbagai lomba dan festival budaya"
    },
    {
      icon: Target,
      title: "Pelatihan Keterampilan",
      description: "Pelatihan keterampilan untuk meningkatkan kemampuan pemuda"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Tentang Kami
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4 sm:mb-6">
            Karang Taruna Sanggar Bakti
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Organisasi kepemudaan yang berdedikasi untuk pembangunan masyarakat dan pelestarian budaya Indonesia
          </p>
        </div>
      </div>

      {/* Sejarah */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-center text-primary">Sejarah Singkat</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center leading-relaxed text-sm sm:text-base">
              Karang Taruna Sanggar Bakti didirikan pada tahun 2010 dengan tujuan untuk memberdayakan pemuda di wilayah kami. 
              Berawal dari sekelompok pemuda yang memiliki kepedulian tinggi terhadap lingkungan sekitar, 
              organisasi ini berkembang menjadi wadah yang aktif dalam berbagai kegiatan sosial dan budaya.
            </p>
            <p className="text-center leading-relaxed mt-4 text-sm sm:text-base">
              Selama lebih dari satu dekade, Sanggar Bakti telah menyelenggarakan berbagai program pemberdayaan masyarakat, 
              pelestarian budaya, dan kegiatan sosial yang bermanfaat bagi masyarakat luas.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Visi Misi */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Visi */}
          <Card className="border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-primary flex items-center gap-2">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                Visi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {visiMisi.visi}
              </p>
            </CardContent>
          </Card>

          {/* Misi */}
          <Card className="border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-primary flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Program Kerja
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Berbagai program yang kami jalankan untuk memberdayakan masyarakat
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programKerja.map((program, index) => (
            <Card key={index} className="group hover:shadow-red transition-all duration-300 hover:scale-105 border-primary/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-red transition-all duration-300">
                  <program.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pengurus */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Pengurus Organisasi
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Tim pengurus yang berdedikasi untuk kemajuan organisasi
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pengurus.map((orang, index) => (
            <Card key={index} className="group hover:shadow-red transition-all duration-300 hover:scale-105 border-primary/20">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-3xl sm:text-4xl">
                  {orang.foto}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                  {orang.nama}
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium">
                  {orang.jabatan}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section className="container mx-auto px-4 sm:px-6">
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center mb-3 sm:mb-4">Hubungi Kami</CardTitle>
            <p className="text-center text-base sm:text-lg opacity-90 px-2">
              Kami terbuka untuk kerjasama dan partisipasi dari masyarakat
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Alamat</h4>
                <p className="text-xs sm:text-sm opacity-90">Jl. Pemuda No. 123<br />Desa Merdeka, Kecamatan Patriot</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Telepon</h4>
                <p className="text-xs sm:text-sm opacity-90">+62 812-3456-7890</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-xs sm:text-sm opacity-90">sanggar.bakti@email.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Instagram</h4>
                <p className="text-xs sm:text-sm opacity-90">@sanggarbakti_official</p>
              </div>
            </div>
            
            <div className="text-center mt-6 sm:mt-8">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto min-h-[48px] w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Bergabung dengan Kami
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default TentangKami;