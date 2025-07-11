import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Modal from './components/modal'
import { BackgroundBeams } from './components/background-lines'

function App() {
  let API_URL = 'https://itunes.apple.com/search?term=';
  const [result, setResults] = useState([])
  const [lyrics, setLyrics] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [artistName, setArtistName] = useState('')
  const [trackName, setTrackName] = useState('')

  const handleSearch = async (searchQuery: string): Promise<void> => {
        try {
            const res = await fetch(API_URL + searchQuery)
            const data = await res.json();
            setResults(data.results)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleResult = (result:any) => {
      return result.map((item: any) => {
          let artistName:string = item.artistName
          let trackName:string = item.trackName
          
          const handleLyrics = async () => {
            let API_LYRICS_URL = 'https://api.lyrics.ovh/v1/';
            let lyrics = `${API_LYRICS_URL}${encodeURIComponent(artistName)}/${encodeURIComponent(trackName)}`;
            try {
              const res = await fetch(lyrics)
              const data = await res.json();
              console.log(data.lyrics)
              setLyrics(data.lyrics);
              setModalOpen(true)
              setArtistName(artistName)
              setTrackName(trackName)

            } catch(error) {
              console.error('Error al buscar lyrics:', error);
            }
    }
    
          
        return (
          <div className='flex flex-row items-center m-2 p-4 text-start bg-gradient-to-br from-45%-#333 to-[#35844f] w-full z-10 rounded-lg shadow-lg hover:border-2 border-[#35844f] hover:scale-103 animation-scale-border duration-100 ease-in max-w-xl animate-fade-in cursor-pointer' onClick={handleLyrics} key={item.trackId} >
            <img src={item.artworkUrl100} alt={item.trackName} className='rounded-md h-15 w-15' />
            <div className='flex flex-col justify-center ml-4'>
              <strong>{item.artistName}</strong>
              <p>{trackName}</p>
            </div>
          </div>
        )
      })
    }
  return (
    <>
    <div className="App overflow-hidden flex flex-col">
      <Header onSearch={ handleSearch } ></Header>
      <Content onResult={ handleResult } result={ result } ></Content>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onLyrics={lyrics} onArtistName={artistName} onTrackName={trackName}
/>
      <Footer></Footer> 
      <BackgroundBeams></BackgroundBeams>
      
    </div>
    </>
  )
}

export default App
