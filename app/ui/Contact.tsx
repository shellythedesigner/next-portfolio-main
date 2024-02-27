"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/app/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useLanguageContext } from "../contexts/languageContext";

export default function Contact() {
  const {
    dict: { contact },
  } = useLanguageContext();
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="h-[100vh] flex items-center justify-center" id="contact">
      <motion.section
        ref={ref}
        className="w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0, scale: 0.75 }}
        viewport={{ amount: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>{contact.heading}</SectionHeading>
        <p>
          <span>{contact.text1}</span>
          <a
            href="mailto:shellywu37@gmail.com"
            className="text-light-tertiary-base dark:text-dark-tertiary-base underline"
          >
            {contact.email}
          </a>
          <span>{contact.text2}</span>
        </p>
        <form
          ref={formRef}
          className="mt-6 lg:mt-10 flex flex-col"
          action={async (formData) => {
            const data = await sendEmail(formData);
            if (data.id) {
              toast.success("Email sent successfully!");
              formRef.current?.reset();
            }
            if (data.message) toast.error(data.message);
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack bg-light-secondary-onBase dark:bg-dark-secondary-onBase transition-all outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            placeholder={contact.emailPlaceholder}
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 bg-light-secondary-onBase dark:bg-dark-secondary-onBase outline-none transition-all resize-none"
            name="message"
            placeholder={contact.textareaPlaceholder}
            required
            maxLength={2000}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}
