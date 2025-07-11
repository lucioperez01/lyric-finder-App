type ContentProps = {        
    onResult: (result: any) => any;
    result: any;
};

const condicionalAppear = (result:any) => {
    if (result.length > 0) {
        return ( <div className="w-full mb-4" >
            <h2 className="text-lg text-[#c4c4c4]">Resultados de tu búsqueda</h2>
            <hr className="border-1 w-full grey mb-4 opacity-30" /> 
        </div>)
    } 
    };


export default function Content({ result, onResult }: ContentProps) {
    return (
        <main className="p-4 text-[0.9em] flex flex-col border-t-2-white items-center justify-center text-center text-[#c4c4c4] bg-#121212 w- z-10 ">
            {condicionalAppear(result)}
            {onResult(result)}
        </main>
    );
}