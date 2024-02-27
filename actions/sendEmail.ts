"use server";

import { EmailTemplate } from "@/app/ui/EmailTemplate";
import { Resend } from "resend";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

type SendEmailResponse = {
  id?: CreateEmailResponse | string | undefined;
  name?: string | undefined;
  message?: string;
  statusCode?: number | undefined;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  formData: FormData
): Promise<SendEmailResponse> => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  return await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: ["shellywu37@gmail.com"],
    subject: `Message from ${senderEmail}`,
    reply_to: senderEmail as string,
    text: message as string,
    react: EmailTemplate({
      message,
    }),
  });
};
