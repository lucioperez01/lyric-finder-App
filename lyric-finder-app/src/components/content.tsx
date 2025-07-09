export default function Content() {
    return (
        <main className="p-4 text-[0.9em] flex flex-col items-center justify-center text-center text-[#c4c4c4] bg-#121212 w-full z-10">
            <h1 className="text-lg font-bold mb-2">Resultados de tu búsqueda</h1>
            {/* mostrar resultados de la búsqueda */}
            <div className="w-full sm:w-3/4 max-w-md bg-[#1F1F1F] p-4 rounded-lg shadow-md z-10">
                <p className="text-white">Lorem - ipsum (Remix)</p>
            </div>
            <div className="w-full sm:w-3/4 max-w-md bg-[#1F1F1F] p-4 rounded-lg shadow-md mt-4 z-10">
                <p className="text-white">Ipsum - lorem </p>
            </div>
            <div className="w-full sm:w-3/4 max-w-md bg-[#1F1F1F] p-4 rounded-lg shadow-md mt-4 z-10">
                <p className="text-white">Artista - cancion </p>
            </div>
        </main>
    );
}