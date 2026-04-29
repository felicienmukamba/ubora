import React from "react";
import Link from "next/link";
import { ProgressRing } from "@/components/pedagogy/progress-ring";
import { BookOpen, Clock, ChevronRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const enrolledCourses = [
  {
    id: "docker-architecture",
    title: "Architecture Docker et Réseaux Proxy",
    description: "Maîtrisez Docker, les réseaux bridge et la mise en place de Nginx Proxy Manager pour vos projets.",
    technologies: ["Docker", "Nginx", "Linux"],
    level: "Intermédiaire",
    progress: 65,
    modules: 8,
    completedModules: 5,
    duration: "12h",
    lastActivity: "Il y a 2 heures",
  },
  {
    id: "nextjs-fullstack",
    title: "Next.js Full-Stack avec Prisma",
    description: "Construisez une application complète avec Next.js App Router, Prisma ORM et l'authentification.",
    technologies: ["Next.js", "Prisma", "TypeScript"],
    level: "Avancé",
    progress: 30,
    modules: 12,
    completedModules: 4,
    duration: "20h",
    lastActivity: "Il y a 3 jours",
  },
  {
    id: "devops-fundamentals",
    title: "Fondamentaux DevOps & CI/CD",
    description: "Découvrez GitHub Actions, les pipelines CI/CD et le déploiement automatisé sur AWS.",
    technologies: ["GitHub Actions", "AWS", "Terraform"],
    level: "Débutant",
    progress: 10,
    modules: 6,
    completedModules: 1,
    duration: "8h",
    lastActivity: "Il y a 1 semaine",
  },
];

export default async function CoursesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mes Cours</h1>
          <p className="text-muted-foreground mt-2">Suivez votre progression sur chaque parcours d'apprentissage.</p>
        </div>
        <Link href={`/${lang}/dashboard/explore`}>
          <Button variant="outline" className="gap-2">
            <Layers className="w-4 h-4" />
            Explorer le catalogue
          </Button>
        </Link>
      </header>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <Link key={course.id} href={`/${lang}/dashboard/courses/${course.id}`}>
            <div className="group rounded-xl border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Progress Ring */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <ProgressRing
                    progress={course.progress}
                    size={80}
                    strokeWidth={6}
                    color={course.progress >= 60 ? "text-green-500" : course.progress >= 30 ? "text-orange-500" : "text-blue-500"}
                  />
                </div>

                {/* Course Info */}
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{tech}</span>
                    ))}
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">{course.level}</span>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{course.completedModules}/{course.modules} modules</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                    <span>{course.lastActivity}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar Footer */}
              <div className="h-1.5 bg-muted">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
