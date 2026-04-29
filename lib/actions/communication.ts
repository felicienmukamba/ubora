"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Submits a project deliverable.
 */
export async function submitProject(userId: string, projectId: string, repoUrl?: string, fileUrls: string[] = [], selfCheckJson?: string) {
  try {
    const newSubmission = await prisma.projectSubmission.create({
      data: {
        userId,
        projectId,
        repoUrl,
        fileUrls,
        selfCheckJson,
        status: "SUBMITTED",
        submittedAt: new Date(),
      }
    });

    revalidatePath("/[lang]/dashboard/projects");
    return { success: true, submission: newSubmission };
  } catch (error) {
    console.error("Error submitting project:", error);
    return { success: false, error: "Failed to submit project" };
  }
}

/**
 * Sends a message in a thread.
 */
export async function sendMessage(senderId: string, threadId: string, content: string, annotation?: string) {
  try {
    const message = await prisma.message.create({
      data: {
        senderId,
        threadId,
        content,
        annotation,
      },
    });

    await prisma.messageThread.update({
      where: { id: threadId },
      data: { updatedAt: new Date() },
    });

    revalidatePath("/[lang]/dashboard/messages");
    return { success: true, message };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: "Failed to send message" };
  }
}

/**
 * Creates a new contextual message thread.
 */
export async function createThread(title: string, moduleId?: string, projectId?: string) {
  try {
    const thread = await prisma.messageThread.create({
      data: {
        title,
        moduleId,
        projectId,
      },
    });

    return { success: true, thread };
  } catch (error) {
    console.error("Error creating thread:", error);
    return { success: false, error: "Failed to create thread" };
  }
}
