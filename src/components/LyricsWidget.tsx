import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, ChevronUp, ChevronDown } from "lucide-react";

const LyricsWidget = () => {
  const [showLyrics, setShowLyrics] = useState(false);

  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  return (
    <div className="fixed bottom-20 right-6 z-40 max-w-sm">
      {/* Toggle Button */}
      <Button
        onClick={toggleLyrics}
        size="sm"
        className="mb-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
        title={showLyrics ? "Sembunyikan Lirik" : "Tampilkan Lirik"}
      >
        <Music className="w-4 h-4 mr-1" />
        {showLyrics ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </Button>

      {/* Lyrics Card */}
      {showLyrics && (
        <Card className="animate-in slide-in-from-bottom duration-300 shadow-xl bg-white/95 backdrop-blur-sm border-red-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold text-red-700 flex items-center gap-2">
              <Music className="w-5 h-5" />
              Semangat Sanggar Bakti
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 max-h-96 overflow-y-auto">
            <div className="space-y-4 text-sm">
              {/* Verse 1 */}
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Verse 1</h4>
                <div className="text-gray-700 leading-relaxed">
                  <p>Di lapangan kita berkumpul bersama</p>
                  <p>Pemuda pemudi penuh tawa ceria</p>
                  <p>Karang Taruna, Sanggar Bakti tercinta</p>
                  <p>Siap meriahkan hari kemerdekaan kita</p>
                </div>
              </div>

              {/* Reff */}
              <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-600 mb-2">Reff</h4>
                <div className="text-gray-700 leading-relaxed font-medium">
                  <p>Merdeka… ayo kita bersatu</p>
                  <p>Kibarkan semangat di dada yang satu</p>
                  <p>Dari lomba hingga bakti sosial</p>
                  <p>Kita tunjukkan Indonesia hebat dan kekal</p>
                </div>
              </div>

              {/* Verse 2 */}
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Verse 2</h4>
                <div className="text-gray-700 leading-relaxed">
                  <p>Bendera merah putih berkibar gagah</p>
                  <p>Kita jaga persatuan tanpa menyerah</p>
                  <p>Gotong royong selalu kita junjung tinggi</p>
                  <p>Demi Sanggar Bakti, demi negeri ini</p>
                </div>
              </div>

              {/* Reff (ulang) */}
              <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-600 mb-2">Reff (ulang)</h4>
                <div className="text-gray-700 leading-relaxed font-medium">
                  <p>Merdeka… ayo kita bersatu</p>
                  <p>Kibarkan semangat di dada yang satu</p>
                  <p>Dari lomba hingga bakti sosial</p>
                  <p>Kita tunjukkan Indonesia hebat dan kekal</p>
                </div>
              </div>

              {/* Outro */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 rounded-lg">
                <h4 className="font-semibold mb-2">Outro</h4>
                <div className="leading-relaxed font-medium">
                  <p>Karang Taruna Sanggar Bakti berjaya</p>
                  <p>Bersama rakyat, bersama bangsa</p>
                  <p className="text-lg font-bold">Indonesia merdeka selamanya!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LyricsWidget;
