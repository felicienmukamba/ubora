"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, Bot, Paperclip, Mic, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: "user" | "mentor" | "bot";
  name: string;
  text: string;
  timestamp: string;
  isAnnotated?: boolean;
}

export function ThreadedChat({ className }: { className?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      name: "Assistant IA",
      text: "Félicien (Mentor) est actuellement hors-ligne. Ses heures de permanence sont de 09h00 à 18h00. En attendant, je peux chercher dans la base de connaissances pour vous aider.",
      timestamp: "09:00",
    },
    {
      id: "2",
      sender: "user",
      name: "Apprenant",
      text: "J'ai un problème avec mon docker-compose. Le proxy manager ne ping pas ma base de données.",
      timestamp: "09:05",
    },
    {
      id: "3",
      sender: "bot",
      name: "Assistant IA",
      text: "Il semble que vous ayez un problème de réseau Docker. Avez-vous vérifié que les deux conteneurs partagent le même `network` dans le fichier docker-compose.yml ? Voici un article connexe : [Réseaux Docker et Proxy Manager](#).",
      timestamp: "09:05",
    },
    {
      id: "4",
      sender: "mentor",
      name: "Félicien",
      text: "Salut ! L'assistant a vu juste. Assure-toi de déclarer un réseau de type `bridge` et de l'attacher aux deux services. Tu veux qu'on regarde ça ensemble ?",
      timestamp: "09:30",
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, {
      id: Date.now().toString(),
      sender: "user",
      name: "Apprenant",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInput("");
  };

  return (
    <div className={cn("flex flex-col h-full border rounded-xl overflow-hidden bg-background", className)}>
      {/* Header Contextuel */}
      <div className="p-4 border-b bg-muted/20 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Chapitre 4 : Architecture Docker</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
            </span>
            Mentor hors-ligne (Retour demain à 09h00)
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Bot className="w-4 h-4 text-primary" />
          Base de connaissances
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={cn("flex gap-3 max-w-[85%]", msg.sender === "user" ? "ml-auto flex-row-reverse" : "")}>
            <Avatar className="w-8 h-8 border">
              <AvatarFallback className={msg.sender === "bot" ? "bg-primary/10 text-primary" : ""}>
                {msg.sender === "bot" ? <Bot className="w-4 h-4" /> : msg.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className={cn("space-y-1", msg.sender === "user" ? "items-end" : "items-start")}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium">{msg.name}</span>
                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed",
                msg.sender === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : 
                msg.sender === "bot" ? "bg-muted text-foreground rounded-tl-sm border border-primary/10" : 
                "bg-muted text-foreground rounded-tl-sm"
              )}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-card">
        <div className="flex items-end gap-2 bg-muted/50 border rounded-xl p-2 focus-within:ring-1 focus-within:ring-primary transition-all">
          <div className="flex flex-col gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground">
              <ImageIcon className="w-4 h-4" />
            </Button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            placeholder="Posez votre question sur ce chapitre..."
            className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[40px] focus:ring-0 p-2 text-sm"
            rows={1}
          />
          <div className="flex items-center gap-2 mb-1 mr-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary transition-colors">
              <Mic className="w-4 h-4" />
            </Button>
            <Button onClick={handleSend} size="icon" className="h-8 w-8 rounded-full">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 text-center">
          La messagerie est contextuelle. Le mentor saura exactement de quel chapitre vous parlez.
        </p>
      </div>
    </div>
  );
}
