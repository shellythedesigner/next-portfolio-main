import * as React from "react";

type EmailTemplateProps = {
  message: FormDataEntryValue | null;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => {
  if (typeof message !== "string") {
    return null;
  }

  return (
    <div className="w-full p-4">
      <p>{message}</p>
    </div>
  );
};
