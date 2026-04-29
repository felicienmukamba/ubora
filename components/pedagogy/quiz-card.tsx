"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { submitQuizAnswer } from "@/lib/actions/learning";
import { toast } from "sonner";

interface QuizOption {
  id: string;
  label: string;
}

interface QuizCardProps {
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  userId?: string;
  questionId?: string;
  explanation?: string;
  onSuccess?: () => void;
  className?: string;
}

export function QuizCard({
  question,
  options,
  correctOptionId,
  userId,
  questionId,
  explanation,
  onSuccess,
  className,
}: QuizCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCorrect = selectedId === correctOptionId;

  const handleSubmit = async () => {
    if (!selectedId) return;

    if (userId && questionId) {
      setIsSubmitting(true);
      const index = options.findIndex(o => o.id === selectedId);
      const result = await submitQuizAnswer(userId, questionId, index);
      
      if (!result.success) {
        toast.error("Erreur lors de la validation");
        setIsSubmitting(false);
        return;
      }
    }

    setIsSubmitted(true);
    if (selectedId === correctOptionId && onSuccess) {
      onSuccess();
    }
    setIsSubmitting(false);
  };

  return (
    <div className={cn("rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden", className)}>
      <div className="p-6 space-y-6">
        <h4 className="text-lg font-semibold leading-tight">{question}</h4>
        
        <div className="space-y-3">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            const showCorrect = isSubmitted && option.id === correctOptionId;
            const showError = isSubmitted && isSelected && !isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => !isSubmitted && setSelectedId(option.id)}
                disabled={isSubmitted}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-lg border text-left transition-all",
                  !isSubmitted && "hover:border-primary/50 hover:bg-muted/50 cursor-pointer",
                  isSelected && !isSubmitted && "border-primary bg-primary/5 ring-1 ring-primary",
                  showCorrect && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400 ring-1 ring-green-500",
                  showError && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400 ring-1 ring-red-500"
                )}
              >
                <span className="font-medium">{option.label}</span>
                {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                {showError && <XCircle className="w-5 h-5 text-red-500" />}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <Button 
            className="w-full mt-4" 
            onClick={handleSubmit} 
            disabled={!selectedId || isSubmitting}
          >
            {isSubmitting ? "Validation..." : "Valider la réponse"}
          </Button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden mt-4"
            >
              <div className={cn(
                "p-4 rounded-lg flex items-start gap-3",
                isCorrect ? "bg-green-500/10 text-green-800 dark:text-green-200" : "bg-red-500/10 text-red-800 dark:text-red-200"
              )}>
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 mt-0.5 text-red-600" />
                )}
                <div>
                  <p className="font-semibold">{isCorrect ? "Excellente réponse !" : "Pas tout à fait."}</p>
                  {explanation && <p className="text-sm mt-1 opacity-90">{explanation}</p>}
                </div>
              </div>
              {isCorrect && (
                <Button className="w-full mt-4 group" variant="default">
                  Étape suivante 
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
