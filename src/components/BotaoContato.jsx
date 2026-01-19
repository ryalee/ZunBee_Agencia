import { useState } from "react";
import ContatoModal from "./ContatoModal";

export default function BotaoContato({ label = "Contato", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-main border-3 font-semibold w-full py-2 px-6 rounded-[15px] text-[16pt] hover:bg-main/90 transition cursor-pointer ${className}`}
      >
        {label}
      </button>

      {isOpen && <ContatoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
