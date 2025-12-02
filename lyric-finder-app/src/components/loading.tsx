interface LoadingProps {
    loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
    if(!loading) return null;


    return (
    <div className="modal fixed inset-0 bg-black/30 flex justify-center items-center z-50">
        <div className="modal-content bg-gradient-to-br p-10 rounded-xl w-sm max-w-[30dvw]  text-white relative shadow-xl">
            <div className="flex items-center justify-center h-screen z-10 fixed top-0 left-0 w-full bg-black/50">
                <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    </div>
    );
}


