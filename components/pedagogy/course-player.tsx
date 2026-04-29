"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, Volume2, Maximize, FileEdit, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursePlayerProps {
  title: string;
  videoUrl: string;
  className?: string;
}

export function CoursePlayer({ title, videoUrl, className }: CoursePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={cn("flex flex-col xl:flex-row gap-6", className)}>
      {/* Main Video Section */}
      <div className="flex-1 space-y-4">
        <div className="relative group bg-black rounded-2xl overflow-hidden aspect-video shadow-xl">
          {/* Mock Video Element */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <span className="text-muted-foreground/50">Video Content: {videoUrl}</span>
          </div>
          
          {/* Custom Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-primary w-1/3"></div>
            </div>
            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button onClick={togglePlay} className="hover:text-primary transition-colors">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-16 h-1 bg-white/20 rounded-full"><div className="w-1/2 h-full bg-white rounded-full" /></div>
                </div>
                <span className="text-sm font-mono opacity-80">04:20 / 12:45</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowNotes(!showNotes)}
                  className={cn("hover:text-primary transition-colors flex items-center gap-1.5 text-sm font-medium", showNotes && "text-primary")}
                >
                  <FileEdit className="w-4 h-4" /> Notes
                </button>
                <button title="max" className="hover:text-primary transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Dans ce chapitre, nous allons voir comment utiliser la commande <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">docker network create</span> pour isoler nos services.
          </p>
        </div>
      </div>

      {/* Contextual Notes Sidebar (Immersive) */}
      {showNotes && (
        <div className="w-full xl:w-80 border rounded-2xl bg-card shadow-sm flex flex-col h-[500px] xl:h-auto animate-in slide-in-from-right-4">
          <div className="p-4 border-b flex items-center justify-between bg-muted/30">
            <h3 className="font-semibold flex items-center gap-2">
              <FileEdit className="w-4 h-4 text-primary" /> Bloc-notes
            </h3>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-4 text-sm">
            <div className="p-3 bg-primary/5 border border-primary/10 rounded-lg">
              <span className="text-xs font-mono text-primary font-bold cursor-pointer hover:underline">02:15</span>
              <p className="mt-1 text-muted-foreground">Ne pas oublier de lier le proxy au réseau de la BDD seulement si nécessaire.</p>
            </div>
            <textarea 
              placeholder="Prenez vos notes ici. Elles sont synchronisées avec la vidéo..."
              className="w-full h-32 bg-transparent border-none resize-none focus:ring-0 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
