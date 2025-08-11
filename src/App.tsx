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
  const [isPlaying, setIsPlaying] = useState(true); // Default to true
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.4; // Set volume to 40%
    
    // Try to autoplay immediately
    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
        setShowMusicPrompt(false);
      } catch (error) {
        // Autoplay blocked, wait for user interaction
        setIsPlaying(false);
        setShowMusicPrompt(true);
        console.log("Autoplay blocked, waiting for user interaction");
        
        // Hide prompt after 5 seconds
        setTimeout(() => setShowMusicPrompt(false), 5000);
      }
    };

    // Attempt autoplay on load
    tryAutoPlay();

    // Auto play after first user interaction if not already playing
    const handleFirstInteraction = () => {
      if (!hasInteracted && !isPlaying) {
        setHasInteracted(true);
        setShowMusicPrompt(false);
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

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
        muted={false}
      />
      
      {/* Music Prompt */}
      {showMusicPrompt && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-pulse">
            <p className="text-sm">🎵 Klik di mana saja untuk memutar musik latar</p>
          </div>
        </div>
      )}
      
      {/* Music Control Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleMusic}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full p-3"
          title={isPlaying ? "Matikan Musik" : "Putar Musik"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </Button>
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
