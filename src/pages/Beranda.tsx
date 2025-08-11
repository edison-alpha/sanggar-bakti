import { Calendar, Users, Award, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import bg from "@/assets/bg.png";
import bg2 from "@/assets/bg2.png";
import ornamen from "@/assets/ornamen.png";
import { motion } from "framer-motion";

const Beranda = () => {
  // Sample gallery photos (you can replace with actual photos)
  const galleryPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      title: "Upacara Bendera",
      description: "Upacara bendera dalam rangka HUT RI ke-80"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      title: "Lomba Panjat Pinang",
      description: "Kegiatan lomba tradisional yang meriah"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      title: "Gotong Royong",
      description: "Kegiatan gotong royong membersihkan lingkungan"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      title: "Bakti Sosial",
      description: "Pembagian bantuan kepada masyarakat"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
      title: "Pentas Seni",
      description: "Pertunjukan seni budaya Indonesia"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      title: "Diskusi Pemuda",
      description: "Forum diskusi pemuda tentang masa depan Indonesia"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const photosPerSlide = 3;
  const totalSlides = Math.ceil(galleryPhotos.length / photosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentPhotos = () => {
    const start = currentSlide * photosPerSlide;
    return galleryPhotos.slice(start, start + photosPerSlide);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section - Extended to cover navbar area */}
      <section 
        className="relative min-h-screen flex items-start justify-center px-3 -mt-16 pt-32 sm:pt-40"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Ornament at the top left - flush against edges */}
        <div className="absolute -top-12 -left-12 z-5">
          <img 
            src={ornamen} 
            alt="Ornament" 
            className="h-64 sm:h-80 md:h-96 lg:h-112 w-auto object-contain"
          />
        </div>
        
        {/* Decorative Elements - Hidden on very small screens */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 animate-pulse hidden sm:block" style={{ color: 'rgba(199, 40, 42, 0.2)' }}>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-current rounded-full"></div>
        </div>
        <div className="absolute top-24 sm:top-32 right-8 sm:right-16 animate-pulse delay-300 hidden sm:block" style={{ color: 'rgba(199, 40, 42, 0.3)' }}>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-current rotate-45"></div>
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 animate-pulse delay-500 hidden md:block" style={{ color: 'rgba(199, 40, 42, 0.25)' }}>
          <div className="w-6 h-2 sm:w-8 sm:h-2 bg-current rounded-full"></div>
        </div>
        <div className="absolute top-32 sm:top-40 left-1/4 animate-pulse delay-700 hidden md:block" style={{ color: 'rgba(199, 40, 42, 0.2)' }}>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-current rounded-full"></div>
        </div>

        {/* Content - Centered like in the image */}
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 font-medium" 
            style={{ color: '#c7282a' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Karang Taruna
          </motion.h2>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight" 
            style={{ color: '#c7282a' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Sanggar Bakti
          </motion.h1>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#c7282a' }}>
              HUT RI KE-80
            </h3>
          </motion.div>
          <motion.div 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-lg"
            style={{ backgroundColor: '#c7282a' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <p className="text-base sm:text-lg md:text-xl font-medium text-white">
              17 Agustus 2025
            </p>
          </motion.div>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2" 
            style={{ color: '#c7282a' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Mari bersama-sama memperingati Hari Ulang Tahun Kemerdekaan Indonesia yang ke-80 dengan penuh semangat dan kebanggaan
          </motion.p>
          {/* Buttons hidden to match the image layout */}
          <div className="hidden flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="text-white shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto min-h-[48px]"
              style={{ backgroundColor: '#c7282a' }}
            >
              Lihat Kegiatan
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto min-h-[48px] bg-white/90 backdrop-blur-sm"
              style={{ 
                borderColor: '#c7282a', 
                color: '#c7282a'
              }}
            >
              Tentang Kami
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 relative"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white drop-shadow-lg">
              Kegiatan Peringatan HUT RI ke-80
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto px-4 text-white drop-shadow-md">
              Berbagai kegiatan menarik telah disiapkan untuk merayakan kemerdekaan Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Lomba Volly",
                description: "11-15 Agustus 2025",
                location: "Lapangan Masjid",
                time: "19.30 s/d selesai"
              },
              {
                icon: Calendar,
                title: "Tirakatan",
                description: "16 Agustus 2025",
                location: "Halaman Rumah Bp Arief M. W",
                time: "19.30 s/d selesai"
              },
              {
                icon: Heart,
                title: "Lomba Anak",
                description: "18 Agustus 2025",
                location: "Lapangan Masjid",
                time: "07.00 s/d selesai"
              },
              {
                icon: Award,
                title: "Hias Tumpeng",
                description: "22 Agustus 2025",
                location: "Halaman Rumah Bp Arief M. W",
                time: "19.30 s/d selesai"
              },
              {
                icon: Users,
                title: "Lomba Karaoke",
                description: "22 Agustus 2025",
                location: "Halaman Rumah Bp Arief M. W",
                time: "19.30 s/d selesai"
              },
              {
                icon: Calendar,
                title: "Sepeda Hias",
                description: "24 Agustus 2025",
                location: "Perempatan RT.08",
                time: "07.00 s/d selesai"
              },
              {
                icon: Heart,
                title: "Lomba Kebersihan",
                description: "24-28 Agustus 2025",
                location: "Lingkungan Dusun Dodol",
                time: "Sepanjang hari"
              },
              {
                icon: Award,
                title: "Pentas Seni",
                description: "29 Agustus 2025",
                location: "Perempatan RT.08",
                time: "19.30 s/d selesai"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm border-2" style={{ borderColor: 'rgba(199, 40, 42, 0.3)' }}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: '#c7282a' }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#c7282a' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium mb-1 text-gray-900">
                    {feature.description}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    📍 {feature.location}
                  </p>
                  <p className="text-xs text-gray-600">
                    🕕 {feature.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#c7282a' }}>
              Galeri Kegiatan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan momen berharga dalam perjalanan Karang Taruna Sanggar Bakti
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <motion.div 
              className="overflow-hidden rounded-xl bg-white shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Photo Grid */}
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {galleryPhotos
                          .slice(slideIndex * photosPerSlide, (slideIndex + 1) * photosPerSlide)
                          .map((photo, index) => (
                            <motion.div
                              key={photo.id}
                              className="relative group overflow-hidden aspect-[4/3]"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <img
                                src={photo.url}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                  <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                                  <p className="text-sm opacity-90">{photo.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group z-10"
                  style={{ color: '#c7282a' }}
                >
                  <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group z-10"
                  style={{ color: '#c7282a' }}
                >
                  <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 py-6 bg-gray-50">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-125' 
                        : 'hover:scale-110'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? '#c7282a' : '#d1d5db'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* View All Button */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: '#c7282a',
                  borderColor: '#c7282a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a01f21';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#c7282a';
                }}
              >
                Lihat Semua Foto
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Mari bersatu dalam semangat kemerdekaan dan membangun Indonesia yang lebih baik
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto min-h-[48px] w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Hubungi Kami
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/src/assets/garuda-logo.png" alt="Logo" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold text-white">Karang Taruna</h3>
                  <p className="text-lg" style={{ color: '#c7282a' }}>Sanggar Bakti</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Organisasi kepemudaan yang berkomitmen untuk membangun generasi muda Indonesia yang berkarakter, kreatif, dan berprestasi dalam menyambut HUT RI ke-80.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="text-gray-300 hover:text-red-400 transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="text-gray-300 hover:text-red-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#kegiatan" className="text-gray-300 hover:text-red-400 transition-colors">Kegiatan</a></li>
                <li><a href="#jadwal" className="text-gray-300 hover:text-red-400 transition-colors">Jadwal</a></li>
                <li><a href="#kontak" className="text-gray-300 hover:text-red-400 transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Kontak Kami</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-1 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300">Dusun Ndodol, Desa Petungrejo</p>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="text-gray-300">+62 xxx-xxxx-xxxx</p>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p className="text-gray-300">kartarsanggarbakti@gmail.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-medium text-white mb-3">Ikuti Kami</h5>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.221.081.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.736-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Karang Taruna Sanggar Bakti. All rights reserved.</p>
                <p className="mt-1">HUT RI ke-80 - Merdeka! 🇮🇩</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;