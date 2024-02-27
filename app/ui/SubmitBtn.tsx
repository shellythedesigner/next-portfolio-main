"use client";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn-primary self-start group"
      disabled={pending}
    >
      Submit{" "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-active:translate-x-1 group-active:-translate-y-1" />
    </button>
  );
}
