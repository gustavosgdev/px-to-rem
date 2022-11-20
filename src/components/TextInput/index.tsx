import { useEffect, useState } from "react";
import { HiOutlineClipboard } from "react-icons/hi";

interface TextInputProps{
  name: string,
  valueHandler: (value: number) => void,
  value: number,
  handleChangedInput: (str : string) => void,
}

export function TextInput({ name, valueHandler, value, handleChangedInput } : TextInputProps){
  const [inputNumber, setInputNumber ] = useState(0);

  function handleClipboardClick(){
    navigator.clipboard.writeText(String(inputNumber));
  }

  function handleTextChange(event: any){
    handleChangedInput(name)
    valueHandler(Number(event.target.value));
  }

  useEffect(() => {
      setInputNumber(value);
  }, [value]);
  return(
    <div className="flex items-center flex-col gap-1 text-gray-100 font-semibold text-xs group">
      <span>{name}</span>
      <label className="flex items-center justify-between bg-gray-800 p-2 relative rounded-[4px] border border-gray-400" htmlFor={name}>
        <input 
        type="number" 
        className="bg-transparent outline-none text-gray-100 text-xl text-center" 
        id={name} 
        value={inputNumber}
        onChange={(e) => {handleTextChange(e)}}
        />
        <span className="absolute right-2 text-gray-400 text-xs font-normal group-hover:opacity-0 transition-opacity duration-500">{name}</span>
        <a 
        onClick={() => {handleClipboardClick()}}
        href="#"
        className="
        absolute right-0 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500
        hover:bg-gray-900
        p-3 
        rounded-[4px]"
        >
        <HiOutlineClipboard color="#7c7c8a" size={24} />
        </a>
      </label>
    </div>
  )
}