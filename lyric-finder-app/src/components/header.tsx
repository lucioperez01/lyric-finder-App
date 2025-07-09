import { FiSearch } from 'react-icons/fi';
export default function Header() {
    return(
        <header className=" p-18 flex flex-col items-center justify-center text-center overflow-x-hidden h-full z-10">
            <img src="./public/lyric-finder-APP-logo.png" alt="logo Lyric Finder APP" className="logo_app" />
            <h2 className="text-[#c4c4c4] text-center text-sm p-4">Encuentra la letra de tus canciones favoritas!</h2>
            <input type="text" className="input_search w-full sm:w-90 max-w-sm px-4 py-3 rounded-lg bg-[#1F1F1F] text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200 shadow-md" placeholder="Buscar canción" />
    <button className="icon_search px-4 h-full bg-accent transition-colors duration-200 text-white relative bottom-6 left-39 -translate-y-1/2 ">
    <FiSearch />
    </button>
        </header>
    )
}

