import React from "react";
import { cn } from "@/lib/utils";
import { CheckSquare, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FeedbackTask {
  id: string;
  label: string;
  isCompleted?: boolean;
}

interface FeedbackCardProps {
  mentorName: string;
  mentorAvatar?: string;
  date: string;
  summary: string;
  tasks?: FeedbackTask[];
  className?: string;
}

export function FeedbackCard({
  mentorName,
  mentorAvatar,
  date,
  summary,
  tasks,
  className,
}: FeedbackCardProps) {
  return (
    <div className={cn("rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden", className)}>
      <div className="p-5 border-b bg-muted/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border">
            <AvatarImage src={mentorAvatar} alt={mentorName} />
            <AvatarFallback>{mentorName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">Feedback de {mentorName}</p>
            <p className="text-xs text-muted-foreground mt-1">{date}</p>
          </div>
        </div>
        <MessageSquare className="w-5 h-5 text-muted-foreground/50" />
      </div>
      
      <div className="p-5 space-y-6">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center gap-2">
            Résumé de la session
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>

        {tasks && tasks.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-primary" />
              Prochaines étapes
            </h4>
            <ul className="space-y-2">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-start gap-2 text-sm">
                  <div className={cn(
                    "mt-0.5 flex-shrink-0 h-4 w-4 rounded-sm border flex items-center justify-center",
                    task.isCompleted ? "bg-primary border-primary text-primary-foreground" : "border-input"
                  )}>
                    {task.isCompleted && <CheckSquare className="w-3 h-3" />}
                  </div>
                  <span className={cn(task.isCompleted && "line-through text-muted-foreground")}>
                    {task.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
