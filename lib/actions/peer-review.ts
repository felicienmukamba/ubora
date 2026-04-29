"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Submits a peer review for a project submission.
 */
export async function submitPeerReview(
  submissionId: string,
  reviewerId: string,
  revieweeId: string,
  scoresJson: string,
  totalScore: number,
  maxScore: number,
  comment?: string
) {
  try {
    const review = await prisma.peerReview.upsert({
      where: {
        submissionId_reviewerId: {
          submissionId,
          reviewerId,
        },
      },
      update: {
        scoresJson,
        totalScore,
        maxScore,
        comment,
      },
      create: {
        submissionId,
        reviewerId,
        revieweeId,
        scoresJson,
        totalScore,
        maxScore,
        comment,
      },
    });

    revalidatePath("/[lang]/dashboard/peer-review");
    return { success: true, review };
  } catch (error) {
    console.error("Error submitting peer review:", error);
    return { success: false, error: "Failed to submit peer review" };
  }
}
