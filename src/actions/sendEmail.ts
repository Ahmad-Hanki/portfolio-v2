"use server";
import { z } from "zod";
import { Resend } from "resend";

export interface ZodTypeProp {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export const Schema = () =>
  z.object({
    name: z.string().min(1, "Name must be at least 2 characters long"),
    subject: z.string().min(1, "Subject must be at least 5 characters long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message must be at least 10 characters long"),
  });
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ZodTypeProp) => {
  const { name, email, message, subject } = data;

  const emailContent = `
    Subject: ${subject}
    From: ${name} <${email}>
    Message: ${message}
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "a.hanki@gmail.com",
      subject: subject,
      text: emailContent,
      
    });

    return 1;
  } catch (err) {
    return 0;
  }
};
