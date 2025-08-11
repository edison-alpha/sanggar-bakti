import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import Layout from "./components/Layout/Layout";
import Beranda from "./pages/Beranda";
import Kegiatan from "./pages/Kegiatan";
import Jadwal from "./pages/Jadwal";
import TentangKami from "./pages/TentangKami";
import NotFound from "./pages/NotFound";
import sanggarBaktiMusic from "./sounds/sanggar-bakti.mp3";

const queryClient = new QueryClient();

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.5; // Set volume to 50%
    
    // Try multiple autoplay strategies
    const tryAutoPlay = async () => {
      try {
        // Strategy 1: Direct play
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
        setShowMusicPrompt(false);
        console.log("Music started successfully!");
      } catch (error) {
        console.log("Direct autoplay blocked, trying alternative methods");
        
        // Strategy 2: Try with muted first, then unmute
        try {
          audio.muted = true;
          await audio.play();
          audio.muted = false;
          setIsPlaying(true);
          setHasInteracted(true);
          setShowMusicPrompt(false);
        } catch (muteError) {
          // Strategy 3: Wait for user interaction
          setIsPlaying(false);
          setShowMusicPrompt(true);
          console.log("Autoplay blocked, waiting for user interaction");
          
          // Hide prompt after 8 seconds
          setTimeout(() => setShowMusicPrompt(false), 8000);
        }
      }
    };

    // Attempt autoplay with slight delay
    const timer = setTimeout(tryAutoPlay, 100);

    // Auto play on ANY user interaction
    const handleUserInteraction = async () => {
      if (!hasInteracted || !isPlaying) {
        setHasInteracted(true);
        setShowMusicPrompt(false);
        try {
          audio.muted = false;
          await audio.play();
          setIsPlaying(true);
          console.log("Music started after user interaction!");
        } catch (error) {
          console.error("Failed to start music:", error);
        }
      }
    };

    // Listen for various user interactions
    const events = ['click', 'keydown', 'scroll', 'touchstart', 'mousemove', 'mousedown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(console.error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={sanggarBaktiMusic}
        preload="auto"
        autoPlay
        playsInline
        loop
      />
      
      {/* Music Prompt */}
      {showMusicPrompt && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium flex items-center gap-2">
              🎵 <span>Klik di mana saja untuk menikmati musik latar belakang</span>
            </p>
          </div>
        </div>
      )}
      
      {/* Music Control Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulsing indicator when music is playing */}
          {isPlaying && (
            <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping"></div>
          )}
          <Button
            onClick={toggleMusic}
            size="sm"
            className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            title={isPlaying ? "Matikan Musik" : "Putar Musik"}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AudioPlayer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/jadwal" element={<Jadwal />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
