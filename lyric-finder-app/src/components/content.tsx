type ContentProps = {        
    onResult: (result: any) => any;
    result: any;
};

export default function Content({ result, onResult }: ContentProps) {
const condicionalAppear = (result:any) => {
    if (result.length > 0) {
        return ( <div className="w-full mb-4" >
            <h2 className="text-lg text-gray-200 ">Resultados de tu búsqueda</h2>
            <hr className="border-[0.3px] w-full grey mb-4 opacity-15" /> 
        </div>)
    } 
};
    return (
        <main className="p-2 text-[0.9em] flex flex-col border-t-2-white items-center justify-center text-center text-[#c4c4c4] bg-#121212 z-10 min-w-[500px]">
            {condicionalAppear(result)}
            {onResult(result)}
        </main>
    );
}