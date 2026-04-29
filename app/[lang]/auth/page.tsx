"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/80 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="relative z-10 flex flex-col justify-center p-16 text-primary-foreground">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Kladriva Academy</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Maîtrisez les<br />technologies<br />qui comptent.
          </h1>
          <p className="text-lg opacity-80 max-w-md leading-relaxed">
            Mentorat personnalisé, cours immersifs avec éditeur de code intégré, et certifications vérifiables par QR Code.
          </p>
          <div className="flex gap-8 mt-12 text-sm">
            <div><span className="text-3xl font-bold block">500+</span><span className="opacity-70">Apprenants</span></div>
            <div><span className="text-3xl font-bold block">95%</span><span className="opacity-70">Taux de réussite</span></div>
            <div><span className="text-3xl font-bold block">50+</span><span className="opacity-70">Cours</span></div>
          </div>
        </div>
      </div>

      {/* Right Panel — Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 justify-center mb-4">
            <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Kladriva Academy</span>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {isRegister ? "Créer un compte" : "Bon retour !"}
            </h2>
            <p className="text-muted-foreground mt-2">
              {isRegister ? "Rejoignez notre communauté d'apprenants." : "Connectez-vous pour reprendre votre parcours."}
            </p>
          </div>

          <div className="space-y-4">
            {isRegister && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom complet</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Votre nom" className="w-full pl-10 pr-4 py-3 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="email" placeholder="vous@email.com" className="w-full pl-10 pr-4 py-3 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mot de passe</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full pl-10 pr-12 py-3 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button className="w-full py-6 text-base gap-2 rounded-xl glow-primary">
              {isRegister ? "Créer mon compte" : "Se connecter"}
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t"></div></div>
              <div className="relative flex justify-center text-xs"><span className="bg-background px-4 text-muted-foreground uppercase tracking-wider">ou</span></div>
            </div>

            <Button variant="outline" className="w-full py-6 rounded-xl gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continuer avec Google
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
            <button onClick={() => setIsRegister(!isRegister)} className="text-primary font-medium hover:underline">
              {isRegister ? "Se connecter" : "S'inscrire gratuitement"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
