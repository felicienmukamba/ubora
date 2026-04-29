import React from "react";
import Link from "next/link";
import { Search, Filter, Clock, BookOpen, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogCourses = [
  {
    id: "docker-architecture",
    title: "Architecture Docker et Réseaux Proxy",
    instructor: "Félicien Mukamba",
    technologies: ["Docker", "Nginx", "Linux"],
    level: "Intermédiaire",
    duration: "12h",
    modules: 8,
    students: 142,
    rating: 4.8,
    enrolled: true,
  },
  {
    id: "react-advanced",
    title: "React Avancé : Patterns & Performance",
    instructor: "Sophie Martin",
    technologies: ["React", "TypeScript", "Redux"],
    level: "Avancé",
    duration: "18h",
    modules: 14,
    students: 89,
    rating: 4.9,
    enrolled: false,
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    instructor: "Pierre Dupont",
    technologies: ["AWS", "EC2", "S3", "Lambda"],
    level: "Débutant",
    duration: "10h",
    modules: 10,
    students: 310,
    rating: 4.7,
    enrolled: false,
  },
  {
    id: "kubernetes",
    title: "Kubernetes : Orchestration de Conteneurs",
    instructor: "Félicien Mukamba",
    technologies: ["Kubernetes", "Docker", "Helm"],
    level: "Avancé",
    duration: "15h",
    modules: 9,
    students: 67,
    rating: 4.6,
    enrolled: false,
  },
  {
    id: "python-data",
    title: "Python pour la Data Science",
    instructor: "Amina Belkadi",
    technologies: ["Python", "Pandas", "NumPy"],
    level: "Débutant",
    duration: "14h",
    modules: 11,
    students: 203,
    rating: 4.8,
    enrolled: false,
  },
  {
    id: "cybersecurity-intro",
    title: "Introduction à la Cybersécurité",
    instructor: "Marc Lefèvre",
    technologies: ["Sécurité", "Réseaux", "Pentest"],
    level: "Débutant",
    duration: "9h",
    modules: 7,
    students: 178,
    rating: 4.5,
    enrolled: false,
  },
];

export default async function ExplorePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Explorer le Catalogue</h1>
        <p className="text-muted-foreground mt-2">Recherchez par technologie, durée ou niveau et trouvez votre prochain parcours.</p>
      </header>

      {/* Moteur de recherche multicritères */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Chercher un cours (ex: Docker, Next.js, Python)..." className="w-full pl-10 pr-4 py-3 bg-card border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" className="rounded-full gap-1.5"><Filter className="w-3.5 h-3.5" />Niveau</Button>
          <Button variant="outline" size="sm" className="rounded-full gap-1.5"><Clock className="w-3.5 h-3.5" />Durée</Button>
          <Button variant="outline" size="sm" className="rounded-full gap-1.5">Technologies</Button>
        </div>
      </div>

      {/* Grille de cours */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalogCourses.map((course) => (
          <Link key={course.id} href={`/${lang}/dashboard/courses/${course.id}`}>
            <div className="group rounded-xl border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
              {/* Header gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative p-4 flex items-end">
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {course.enrolled && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white px-2 py-0.5 rounded-full">Inscrit</span>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border">{course.level}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                <p className="text-xs text-muted-foreground">Par {course.instructor}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {course.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded-full">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.modules} modules</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />{course.rating}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
