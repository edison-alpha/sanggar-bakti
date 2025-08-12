import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, Users, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Klasemen = () => {
  // Real volleyball tournament data from official scoresheet (11-14 Agustus 2025)
  const [klasemenData] = useState([
    {
      id: 2,
      tim: "RT 09",
      namaPanjang: "Rukun Tetangga 09", 
      main: 2,
      menang: 2,
      kalah: 0,
      setMenang: 6,
      setKalah: 0,
      point: 0,
      pointLawan: 0,
      selisih: 6,
      poin: 3, // Poin tertinggi dari pencatatan
      logo: "�️",
      warna: "bg-green-600"
    },
    {
      id: 3,
      tim: "RT 10",
      namaPanjang: "Rukun Tetangga 10",
      main: 2,
      menang: 2,
      kalah: 0,
      setMenang: 6,
      setKalah: 0,
      point: 0,
      pointLawan: 0,
      selisih: 6,
      poin: 2, // Poin kedua dari pencatatan
      logo: "�",
      warna: "bg-purple-600"
    },
    {
      id: 1,
      tim: "RT 08",
      namaPanjang: "Rukun Tetangga 08",
      main: 2,
      menang: 1,
      kalah: 1,
      setMenang: 3,
      setKalah: 3,
      point: 0,
      pointLawan: 0,
      selisih: 0,
      poin: 0, // Poin dari pencatatan: 0
      logo: "�",
      warna: "bg-blue-600"
    },
    {
      id: 5,
      tim: "PSHT",
      namaPanjang: "Persaudaraan Setia Hati Terate",
      main: 2,
      menang: 1,
      kalah: 1,
      setMenang: 3,
      setKalah: 3,
      point: 0,
      pointLawan: 0,
      selisih: 0,
      poin: 0, // Poin dari pencatatan: 0
      logo: "🥋",
      warna: "bg-red-600"
    },
    {
      id: 4,
      tim: "KT SB",
      namaPanjang: "Karang Taruna Sanggar Bakti",
      main: 2,
      menang: 0,
      kalah: 2,
      setMenang: 0,
      setKalah: 6,
      point: 0,
      pointLawan: 0,
      selisih: -6,
      poin: 0, // Poin dari pencatatan: 0
      logo: "⭐",
      warna: "bg-yellow-600"
    }
  ]);

  const [liveSkor] = useState([
    // Pertandingan Hari 1 - Senin, 11 Agustus 2025
    {
      id: 1,
      tim1: "RT 08",
      tim2: "RT 09",
      logo1: "🏠",
      logo2: "🏘️",
      warna1: "bg-blue-600",
      warna2: "bg-green-600",
      skor1: [21, 18, 20, 0, 0], // RT 08 kalah 0-3
      skor2: [25, 25, 25, 0, 0], // RT 09 menang 3-0
      set1: 0,
      set2: 3,
      status: "Selesai",
      waktu: "11 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 1 - Set 1"
    },
    {
      id: 2,
      tim1: "RT 10",
      tim2: "KT SB",
      logo1: "🏡",
      logo2: "⭐",
      warna1: "bg-purple-600",
      warna2: "bg-yellow-600",
      skor1: [25, 25, 25, 0, 0], // RT 10 menang 3-0
      skor2: [22, 18, 20, 0, 0], // KT SB kalah 0-3
      set1: 3,
      set2: 0,
      status: "Selesai",
      waktu: "11 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 1 - Set 2"
    },
    // Pertandingan Hari 2 - Selasa, 12 Agustus 2025
    {
      id: 3,
      tim1: "PSHT",
      tim2: "RT 09",
      logo1: "🥋",
      logo2: "🏘️",
      warna1: "bg-red-600",
      warna2: "bg-green-600",
      skor1: [20, 18, 22, 0, 0], // PSHT kalah 0-3
      skor2: [25, 25, 25, 0, 0], // RT 09 menang 3-0
      set1: 0,
      set2: 3,
      status: "Selesai",
      waktu: "12 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 2 - Set 1"
    },
    {
      id: 4,
      tim1: "KT SB",
      tim2: "RT 08",
      logo1: "⭐",
      logo2: "🏠",
      warna1: "bg-yellow-600",
      warna2: "bg-blue-600",
      skor1: [18, 20, 22, 0, 0], // KT SB kalah 0-3
      skor2: [25, 25, 25, 0, 0], // RT 08 menang 3-0
      set1: 0,
      set2: 3,
      status: "Selesai",
      waktu: "12 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 2 - Set 2"
    },
    // Pertandingan Hari 3 - Rabu, 12 Agustus 2025 (Jadwal tambahan)
    {
      id: 5,
      tim1: "KT SB",
      tim2: "PSHT",
      logo1: "⭐",
      logo2: "🥋",
      warna1: "bg-yellow-600",
      warna2: "bg-red-600",
      skor1: [22, 20, 18, 0, 0], // KT SB kalah 0-3
      skor2: [25, 25, 25, 0, 0], // PSHT menang 3-0
      set1: 0,
      set2: 3,
      status: "Selesai",
      waktu: "12 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Tambahan Rabu"
    },
    {
      id: 6,
      tim1: "RT 10",
      tim2: "RT 08",
      logo1: "�",
      logo2: "�",
      warna1: "bg-purple-600",
      warna2: "bg-blue-600",
      skor1: [25, 25, 27, 0, 0], // RT 10 menang 3-0
      skor2: [22, 23, 25, 0, 0], // RT 08 kalah 0-3
      set1: 3,
      set2: 0,
      status: "Selesai",
      waktu: "12 Agustus 2025",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Tambahan Rabu"
    }
  ]);

  const [upcomingMatches] = useState([
    // Pertandingan Hari 4 - Kamis, 13 Agustus 2025
    {
      id: 1,
      tim1: "RT 08",
      tim2: "KT SB",
      logo1: "�",
      logo2: "⭐",
      warna1: "bg-blue-600",
      warna2: "bg-yellow-600",
      tanggal: "13 Agustus 2025",
      waktu: "Pertandingan 1",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 4"
    },
    {
      id: 2,
      tim1: "RT 09",
      tim2: "PSHT",
      logo1: "�️",
      logo2: "🥋",
      warna1: "bg-green-600",
      warna2: "bg-red-600",
      tanggal: "13 Agustus 2025",
      waktu: "Pertandingan 2",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 4"
    },
    // Pertandingan Hari 5 - Jumat, 14 Agustus 2025
    {
      id: 3,
      tim1: "RT 09",
      tim2: "RT 10",
      logo1: "🏘️",
      logo2: "�",
      warna1: "bg-green-600",
      warna2: "bg-purple-600",
      tanggal: "14 Agustus 2025",
      waktu: "Pertandingan 1",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 5"
    },
    {
      id: 4,
      tim1: "RT 08",
      tim2: "PSHT",
      logo1: "�",
      logo2: "🥋",
      warna1: "bg-blue-600",
      warna2: "bg-red-600",
      tanggal: "14 Agustus 2025",
      waktu: "Pertandingan 2",
      venue: "Lapangan Voli Dusun Dodol",
      babak: "Pertandingan Hari 5"
    }
  ]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">{rank}</span>;
    }
  };

  // Team Logo Component
  const TeamLogo = ({ logo, warna, size = "w-12 h-12" }: { logo: string; warna: string; size?: string }) => (
    <div className={`${size} ${warna} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
      <span className="text-2xl">{logo}</span>
    </div>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-red-500 text-white animate-pulse";
      case "Selesai":
        return "bg-green-500 text-white";
      case "Akan Datang":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Turnamen Voli
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4 sm:mb-6">
            HUT RI ke-80 Dusun Dodol
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Saksikan perkembangan terkini turnamen voli dan klasemen sementara berdasarkan data real turnamen 11-14 Agustus 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="klasemen" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="live">Live & Hasil</TabsTrigger>
            <TabsTrigger value="klasemen">Klasemen</TabsTrigger>
            <TabsTrigger value="jadwal">Jadwal</TabsTrigger>
          </TabsList>

          {/* Klasemen Tab */}
          <TabsContent value="klasemen" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Klasemen Sementara</h3>
              <p className="text-lg text-muted-foreground">Turnamen Voli Antar RT & Organisasi - HUT RI ke-80</p>
            </div>
            
            {/* Professional Table */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-red-500/10 border-b">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Tabel Klasemen Resmi - Data Real
                  <Badge className="ml-auto bg-green-100 text-green-800 border-green-200">
                    Update: 13 Aug 2025
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b-2 border-primary/20">
                        <th className="text-center p-4 font-bold text-gray-700 min-w-[60px]">Pos</th>
                        <th className="text-left p-4 font-bold text-gray-700 min-w-[200px]">Tim</th>
                        <th className="text-center p-4 font-bold text-gray-700 min-w-[80px]">
                          <div className="flex flex-col items-center">
                            <span>Main</span>
                            <span className="text-xs font-normal text-gray-500">Pertandingan</span>
                          </div>
                        </th>
                        <th className="text-center p-4 font-bold text-green-700 min-w-[70px]">
                          <div className="flex flex-col items-center">
                            <span>M</span>
                            <span className="text-xs font-normal text-gray-500">Menang</span>
                          </div>
                        </th>
                        <th className="text-center p-4 font-bold text-red-700 min-w-[70px]">
                          <div className="flex flex-col items-center">
                            <span>K</span>
                            <span className="text-xs font-normal text-gray-500">Kalah</span>
                          </div>
                        </th>
                        <th className="text-center p-4 font-bold text-blue-700 min-w-[90px]">
                          <div className="flex flex-col items-center">
                            <span>Set</span>
                            <span className="text-xs font-normal text-gray-500">M - K</span>
                          </div>
                        </th>
                        <th className="text-center p-4 font-bold text-indigo-700 min-w-[90px]">
                          <div className="flex flex-col items-center">
                            <span>Selisih Set</span>
                            <span className="text-xs font-normal text-gray-500">+/-</span>
                          </div>
                        </th>
                        <th className="text-center p-4 font-bold text-primary min-w-[80px]">
                          <div className="flex flex-col items-center">
                            <span>Poin</span>
                            <span className="text-xs font-normal text-gray-500">Turnamen</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {klasemenData
                        .sort((a, b) => {
                          // Urutkan berdasarkan poin turnamen terlebih dahulu (tertinggi ke terendah)
                          if (b.poin !== a.poin) return b.poin - a.poin;
                          // Jika poin sama, urutkan berdasarkan selisih set (tertinggi ke terendah)
                          if (b.setMenang - b.setKalah !== a.setMenang - a.setKalah) {
                            return (b.setMenang - b.setKalah) - (a.setMenang - a.setKalah);
                          }
                          // Jika selisih set sama, urutkan berdasarkan jumlah set menang (tertinggi ke terendah)
                          return b.setMenang - a.setMenang;
                        })
                        .map((team, index) => (
                        <motion.tr
                          key={team.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200 ${
                            index === 0 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300' :
                            index === 1 ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300' :
                            index === 2 ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300' :
                            'hover:bg-blue-50/30'
                          }`}
                        >
                          {/* Position */}
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              {index < 3 ? (
                                <div className="relative">
                                  {getRankIcon(index + 1)}
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600 border">
                                    {index + 1}
                                  </div>
                                </div>
                              ) : (
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 border-2 border-gray-300">
                                  {index + 1}
                                </div>
                              )}
                            </div>
                          </td>

                          {/* Team */}
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <TeamLogo logo={team.logo} warna={team.warna} size="w-12 h-12" />
                              <div>
                                <div className="font-bold text-lg text-gray-800">{team.tim}</div>
                                <div className="text-sm text-gray-600">{team.namaPanjang}</div>
                              </div>
                            </div>
                          </td>

                          {/* Games Played */}
                          <td className="p-4 text-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800 border-2 border-blue-300 mx-auto">
                              {team.main}
                            </div>
                          </td>

                          {/* Wins */}
                          <td className="p-4 text-center">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-800 border-2 border-green-300 mx-auto">
                              {team.menang}
                            </div>
                          </td>

                          {/* Losses */}
                          <td className="p-4 text-center">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-800 border-2 border-red-300 mx-auto">
                              {team.kalah}
                            </div>
                          </td>

                          {/* Sets */}
                          <td className="p-4 text-center">
                            <div className="bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                              <span className="font-bold text-green-700">{team.setMenang}</span>
                              <span className="text-gray-500 mx-1">-</span>
                              <span className="font-bold text-red-700">{team.setKalah}</span>
                            </div>
                          </td>

                          {/* Set Difference */}
                          <td className="p-4 text-center">
                            <div className={`px-3 py-2 rounded-lg border font-bold text-lg ${
                              team.setMenang - team.setKalah > 0 
                                ? 'bg-green-50 border-green-200 text-green-800' 
                                : team.setMenang - team.setKalah < 0 
                                ? 'bg-red-50 border-red-200 text-red-800'
                                : 'bg-gray-50 border-gray-200 text-gray-800'
                            }`}>
                              {team.setMenang - team.setKalah > 0 ? '+' : ''}{team.setMenang - team.setKalah}
                            </div>
                          </td>

                          {/* Tournament Points */}
                          <td className="p-4 text-center">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center font-bold text-2xl text-white shadow-lg mx-auto transform hover:scale-105 transition-transform">
                              {team.poin}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Rules Explanation */}
                <div className="p-6 bg-gray-50 border-t">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Sistem Penilaian Turnamen Berdasarkan Pencatatan Poin:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span>Kemenangan 3-0 atau 3-1 = 3 poin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span>Kemenangan 3-2 = 2 poin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span>Kekalahan 2-3 = 1 poin</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">Ketentuan Poin (Berdasarkan Pencatatan):</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Jika kemenangan 3-0 maka poin 3</li>
                      <li>• Jika kemenangan 3-1 maka poin 2</li>
                      <li>• Jika kemenangan 3-2 maka poin 1</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Urutan klasemen:</strong> 1) Poin turnamen, 2) Selisih set, 3) Jumlah set menang
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live & Hasil Tab */}
          <TabsContent value="live" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Hasil Pertandingan</h3>
              
              {liveSkor.map((match) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <Card className="border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <Badge className={getStatusColor(match.status)}>
                          {match.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {match.venue}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Teams with Logos */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Team 1 */}
                        <div className="text-center space-y-4">
                          <div className="flex flex-col items-center gap-3">
                            <TeamLogo logo={match.logo1} warna={match.warna1} size="w-16 h-16" />
                            <div>
                              <h4 className="text-xl font-bold text-foreground">{match.tim1}</h4>
                              <div className="text-4xl font-bold text-primary mt-2">{match.set1}</div>
                            </div>
                          </div>
                        </div>

                        {/* VS and Status */}
                        <div className="text-center flex flex-col justify-center space-y-3">
                          <div className="text-3xl font-bold text-muted-foreground">VS</div>
                          <Badge className={`${getStatusColor(match.status)} text-sm font-medium`}>
                            {match.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground font-medium">{match.waktu}</div>
                          <div className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                            {match.babak}
                          </div>
                        </div>

                        {/* Team 2 */}
                        <div className="text-center space-y-4">
                          <div className="flex flex-col items-center gap-3">
                            <TeamLogo logo={match.logo2} warna={match.warna2} size="w-16 h-16" />
                            <div>
                              <h4 className="text-xl font-bold text-foreground">{match.tim2}</h4>
                              <div className="text-4xl font-bold text-primary mt-2">{match.set2}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Set Scores */}
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-3">Skor Per Set</h5>
                        <div className="grid grid-cols-5 gap-2 text-center">
                          {[1, 2, 3, 4, 5].map((setNum) => (
                            <div key={setNum} className="space-y-2">
                              <div className="text-sm font-medium text-muted-foreground">Set {setNum}</div>
                              <div className="bg-background p-2 rounded">
                                <div className="text-lg font-bold text-foreground">
                                  {match.skor1[setNum - 1] || "-"}
                                </div>
                                <div className="text-lg font-bold text-foreground">
                                  {match.skor2[setNum - 1] || "-"}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Jadwal Tab */}
          <TabsContent value="jadwal" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Jadwal Pertandingan</h3>
              
              {upcomingMatches.map((match) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Team 1 */}
                        <div className="text-center space-y-3">
                          <TeamLogo logo={match.logo1} warna={match.warna1} size="w-16 h-16" />
                          <h4 className="text-xl font-bold text-foreground">{match.tim1}</h4>
                        </div>

                        {/* Match Info */}
                        <div className="text-center flex flex-col justify-center space-y-2">
                          <div className="text-3xl font-bold text-muted-foreground">VS</div>
                          <Badge className="bg-blue-500 text-white">
                            {match.tanggal}
                          </Badge>
                          <div className="text-sm text-muted-foreground">{match.waktu}</div>
                          <div className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                            {match.babak}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {match.venue}
                          </div>
                        </div>

                        {/* Team 2 */}
                        <div className="text-center space-y-3">
                          <TeamLogo logo={match.logo2} warna={match.warna2} size="w-16 h-16" />
                          <h4 className="text-xl font-bold text-foreground">{match.tim2}</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Klasemen;
