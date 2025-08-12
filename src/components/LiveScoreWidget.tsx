import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LiveScoreWidgetProps {
  className?: string;
}

const LiveScoreWidget = ({ className }: LiveScoreWidgetProps) => {
  const liveMatches = [
    {
      id: 1,
      tim1: "RT 09",
      tim2: "RT 10",
      logo1: "🏘️",
      logo2: "🏡",
      warna1: "bg-green-600",
      warna2: "bg-purple-600",
      set1: 0,
      set2: 0,
      status: "Akan Datang",
      currentSet: "14 Agustus 2025",
      venue: "Lapangan Voli"
    }
  ];

  const recentResults = [
    {
      id: 2,
      tim1: "RT 08",
      tim2: "KT SB",
      logo1: "🏠",
      logo2: "⭐",
      warna1: "bg-blue-600",
      warna2: "bg-yellow-600",
      set1: 3,
      set2: 0,
      status: "Selesai",
      result: "13 Agustus",
      venue: "Lapangan Voli"
    }
  ];

  // Team Logo Component
  const TeamLogo = ({ logo, warna, size = "w-8 h-8" }: { logo: string; warna: string; size?: string }) => (
    <div className={`${size} ${warna} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
      <span className="text-sm">{logo}</span>
    </div>
  );

  return (
    <div className={className}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">Live Score</h3>
          <Link to="/klasemen">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Lihat Semua
            </Button>
          </Link>
        </div>

        {/* Live Matches */}
        {liveMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-500 text-white w-fit">
                    Akan Datang
                  </Badge>
                  <span className="text-xs text-muted-foreground">{match.venue}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-3 items-center text-center gap-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <TeamLogo logo={match.logo1} warna={match.warna1} />
                      <div className="font-semibold text-xs">{match.tim1}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{match.set1}</div>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="text-sm font-bold">VS</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="font-semibold text-xs">{match.tim2}</div>
                      <TeamLogo logo={match.logo2} warna={match.warna2} />
                    </div>
                    <div className="text-2xl font-bold text-primary">{match.set2}</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs text-muted-foreground bg-white px-2 py-1 rounded">
                    {match.currentSet}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Recent Results */}
        {recentResults.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (liveMatches.length + index) * 0.1 }}
          >
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500 text-white">
                    Selesai
                  </Badge>
                  <span className="text-xs text-muted-foreground">{match.venue}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-3 items-center text-center gap-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <TeamLogo logo={match.logo1} warna={match.warna1} />
                      <div className="font-semibold text-xs">{match.tim1}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{match.set1}</div>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="text-sm font-bold">VS</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="font-semibold text-xs">{match.tim2}</div>
                      <TeamLogo logo={match.logo2} warna={match.warna2} />
                    </div>
                    <div className="text-2xl font-bold text-primary">{match.set2}</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs text-muted-foreground bg-white px-2 py-1 rounded">
                    {match.result}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Quick Stats */}
        <Card className="bg-gradient-to-r from-primary/10 to-red-500/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">Tim Peserta</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-600">8</div>
                <div className="text-xs text-muted-foreground">Selesai</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-600">0</div>
                <div className="text-xs text-muted-foreground">Live</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">2</div>
                <div className="text-xs text-muted-foreground">Mendatang</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveScoreWidget;
