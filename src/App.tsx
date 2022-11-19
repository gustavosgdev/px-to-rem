import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { TextInput } from "./components";

export function App() {
  const [pixelsValue, setPixelsValue] = useState(0);
  const [remValue, setRemValue] = useState(0);  

  return (
    <div className="grid grid-cols-1 grid-rows-3 items-center justify-between w-screen h-screen">
      <header className="flex flex-col items-center justify-end h-full">
        <h1 className="text-orange-900 text-2xl font-bold text-center">PX TO REM</h1>
        <p className="text-gray-100 text-sm text-center">Converta facilmente px para rem</p>
      </header>
      <main className="flex items-center justify-center">
        <div className="flex flex-col gap-4 text-gray-400 w-fit">
          <TextInput name="Pixels" startValue={16} />
          <a href="#" className="w-full flex items-center justify-end relative h-[30px]">
            <CgArrowsExchangeAlt size={30} className="absolute bottom-[-8px]"/>
          </a>
          <TextInput name="REM" />
        </div>
      </main>
      <footer className="w-screen flex flex-col justify-end items-center gap-2 p-6 h-full">
        <span className="text-gray-400 text-md">Developed by <a href="https://code-art.dev" target="_blank"><strong>Gustavosgdev</strong></a> with 💜</span>
        <div className="flex gap-2 items-center text-gray-400 text-lg">
          <a 
          href="https://github.com/gustavosgdev" 
          target="_blank" 
          className="hover:opacity-75 transition-opacity duration-150"><AiFillGithub /></a>
          <a 
          href="https://www.linkedin.com/in/gustavo-da-silva-gomes-0b3b00194/" 
          target="_blank" 
          className="hover:opacity-75 transition-opacity duration-150"><AiFillLinkedin /></a>
        </div>
      </footer>
    </div>
  )
}
