type ResultListProps = {
    onResult: () => void;
    result: string[];
    trackName: string;
    artistName: string
    trackId: number;
    artworkUrl: string;
}

export default function ResultList({onResult, result, trackName, artistName, trackId, artworkUrl}: ResultListProps) {
    return (
            <div className='flex flex-row items-center m-2 p-4 text-start bg-gradient-to-br from-45%-#333 to-[#35844f] min-w-full rounded-lg shadow-lg hover:border-2 border-[#35844f] hover:scale-103 animation-scale-border duration-100 ease-in max-w-xl animate-fade-in cursor-pointer' onClick={onResult} key={trackId} >
                <img src={artworkUrl} alt={trackName} className='rounded-md h-15 w-15' />
                <div className='flex flex-col justify-center ml-4'>
                    <strong>{artistName}</strong>
                    <p>{trackName}</p>
                </div>
            </div>
            )
    }