interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLyrics: string;
    onArtistName: string;
    onTrackName: string;
}

export default function Modal({isOpen,onClose,onLyrics,onArtistName,onTrackName,}: ModalProps) {
    if (!isOpen) return null;
    
    const conditionalAppear = (onLyrics:string) => {
        if (onLyrics === undefined || onLyrics === '') {
            return <p className="text-lg text-[#fff] text-center">Lo lamentamos: No se encontraron letras :(</p>
        }
    }


return (
    <div className="modal fixed inset-0 bg-black/30 flex justify-center items-center z-50">
    <div className="modal-content bg-gradient-to-br from-[#121212] to-[#26695a] p-10 rounded-xl w-lg max-w-[90dvw]  text-white relative shadow-xl">
        <button
        onClick={onClose}
        className="close absolute top-2 right-3 text-white text-xl hover:text-accent"
        >
        ✖
        </button>
        <h2 className="text-lg font-bold mb-4">
        {onTrackName} - {onArtistName}
        </h2>
        {conditionalAppear(onLyrics)}
        <pre className="lyrics text-sm max-h-[50vh] overflow-y-auto overflow-x-hidden font-Roboto">
        {onLyrics}
        </pre>
    </div>
    </div>
);
}