"use client";

import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header">
      <button
        className="text-3xl lg:hidden align-middle relative cursor-pointer"
        aria-label="open/close navigation"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {!isNavOpen ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
      </button>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
}
