"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MonitorPlay, PenTool, Code2, Mic, MicOff, Video, VideoOff, PhoneMissed, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VirtualClassroom({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col h-[80vh] border rounded-xl overflow-hidden bg-[#1e1e1e] text-slate-200", className)}>
      {/* Navbar Salle de classe */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-[#141414]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            REC 00:15:32
          </div>
          <span className="text-sm font-semibold">Revue Docker - Félicien & Apprenant</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10">
            <PenTool className="w-4 h-4 mr-2" /> Whiteboard
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10 bg-white/5">
            <Code2 className="w-4 h-4 mr-2" /> Éditeur de code
          </Button>
        </div>
      </div>

      {/* Espace de travail partagé */}
      <div className="flex-1 flex overflow-hidden">
        {/* IDE Partagé (Mock) */}
        <div className="flex-1 border-r border-white/10 flex flex-col">
          <div className="flex text-xs text-slate-400 border-b border-white/10 bg-[#141414]">
            <div className="px-4 py-2 bg-[#1e1e1e] border-r border-white/10 text-white border-t-2 border-t-blue-500">docker-compose.yml</div>
            <div className="px-4 py-2 border-r border-white/10">nginx.conf</div>
          </div>
          <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
            <div className="flex"><span className="text-slate-500 w-8">1</span><span className="text-blue-400">version:</span> <span className="text-green-300">'3.8'</span></div>
            <div className="flex"><span className="text-slate-500 w-8">2</span></div>
            <div className="flex"><span className="text-slate-500 w-8">3</span><span className="text-blue-400">services:</span></div>
            <div className="flex"><span className="text-slate-500 w-8">4</span>  <span className="text-blue-400">proxy:</span></div>
            <div className="flex"><span className="text-slate-500 w-8">5</span>    <span className="text-blue-400">image:</span> <span className="text-green-300">nginx:alpine</span></div>
            <div className="flex"><span className="text-slate-500 w-8">6</span>    <span className="text-blue-400">networks:</span></div>
            <div className="flex"><span className="text-slate-500 w-8">7</span>      - <span className="text-orange-300 relative">proxy-network<span className="absolute -top-3 -right-2 text-[10px] bg-blue-500 text-white px-1 rounded">Félicien</span></span></div>
          </div>
        </div>

        {/* Panneau latéral (Vidéos + Chat) */}
        <div className="w-80 bg-[#141414] flex flex-col">
          <div className="p-2 space-y-2">
            {/* Vidéo Mentor */}
            <div className="aspect-video bg-black rounded-lg relative overflow-hidden group">
              <img src="https://i.pravatar.cc/300?u=felicien" alt="Mentor" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-2 left-2 text-xs font-medium bg-black/60 px-2 py-1 rounded backdrop-blur-md">Félicien M.</div>
            </div>
            {/* Vidéo Étudiant */}
            <div className="aspect-video bg-slate-800 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                <VideoOff className="w-8 h-8" />
              </div>
              <div className="absolute bottom-2 left-2 text-xs font-medium bg-black/60 px-2 py-1 rounded backdrop-blur-md">Moi</div>
            </div>
          </div>
          
          <div className="flex-1 border-t border-white/10 p-4 flex flex-col">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Chat de la session</h4>
            <div className="flex-1"></div>
            <div className="mt-2 flex gap-2">
              <input type="text" placeholder="Taper un message..." className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Contrôles WebRTC */}
      <div className="h-16 border-t border-white/10 bg-[#141414] flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/20">
          <Mic className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-slate-400 hover:bg-white/20">
          <VideoOff className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/20">
          <MonitorPlay className="w-5 h-5 text-blue-400" />
        </Button>
        <Button variant="destructive" size="icon" className="rounded-full hover:bg-red-600 ml-4">
          <PhoneMissed className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
