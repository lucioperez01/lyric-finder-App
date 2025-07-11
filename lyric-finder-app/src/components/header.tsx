import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
type HeaderProps = {
    onSearch: (query: string) => Promise<void>;
};

export default function Header({ onSearch }: HeaderProps) {
    // Definicion de estados ------------
    const [input, setInput] = useState("");
    // detecta Enter -----------
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch(input);
        }
    };

    return(
        <header className=" p-18 flex flex-col items-center justify-center text-center overflow-x-hidden h-full z-10 border-b-1-[#fff]">
            {/* Logo */}
            <img src="./public/lyric-finder-APP-logo.png" 
                alt="logo Lyric Finder APP" 
                className="logo_app" 
            />


            {/* H2 */}
            <h2 
            className="text-[#c4c4c4] text-center text-sm p-4">Encuentra la letra de tus canciones favoritas!
            </h2>

            {/* Input para búsqueda */}
            <input onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyDown}
            type="text" 
            className="input_search w-full sm:w-90 max-w-sm px-4 py-3 rounded-lg bg-[#1F1F1F] text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200 shadow-md" 
            placeholder="Buscar canción" 
            />

            {/* Boton para búsqueda */}
            <button onClick={() => onSearch(input)} 
            className="icon_search px-4 h-full transition-colors duration-200 text-white relative bottom-6 left-39 -translate-y-1/2">
            <FiSearch />
            </button>
        </header>
    )
}

