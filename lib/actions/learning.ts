"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Marks a lesson as completed for the current user.
 */
export async function completeLesson(userId: string, lessonId: string) {
  try {
    await prisma.progress.upsert({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        },
      },
      update: {
        isCompleted: true,
        completedAt: new Date(),
      },
      create: {
        userId,
        lessonId,
        isCompleted: true,
        completedAt: new Date(),
      },
    });

    revalidatePath("/[lang]/dashboard", "layout");
    return { success: true };
  } catch (error) {
    console.error("Error completing lesson:", error);
    return { success: false, error: "Failed to mark lesson as completed" };
  }
}

/**
 * Saves a contextual note synchronized with a video timestamp.
 */
export async function saveNote(userId: string, lessonId: string, content: string, videoTimestamp?: number) {
  try {
    const note = await prisma.note.create({
      data: {
        userId,
        lessonId,
        content,
        videoTimestamp,
      },
    });

    return { success: true, note };
  } catch (error) {
    console.error("Error saving note:", error);
    return { success: false, error: "Failed to save note" };
  }
}

/**
 * Submits a quiz answer and calculates if it's correct.
 */
export async function submitQuizAnswer(userId: string, questionId: string, selectedIndex: number) {
  try {
    const question = await prisma.quizQuestion.findUnique({
      where: { id: questionId },
      select: { correctOptionIndex: true },
    });

    if (!question) throw new Error("Question not found");

    const isCorrect = question.correctOptionIndex === selectedIndex;

    await prisma.quizAnswer.upsert({
      where: {
        userId_questionId: {
          userId,
          questionId,
        },
      },
      update: {
        selectedIndex,
        isCorrect,
        answeredAt: new Date(),
      },
      create: {
        userId,
        questionId,
        selectedIndex,
        isCorrect,
        answeredAt: new Date(),
      },
    });

    return { success: true, isCorrect };
  } catch (error) {
    console.error("Error submitting quiz answer:", error);
    return { success: false, error: "Failed to submit answer" };
  }
}
