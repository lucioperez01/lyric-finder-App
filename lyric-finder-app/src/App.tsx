import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Modal from './components/modal'
import { BackgroundBeams } from './components/background-lines'
import ResultList from './components/resultList'
import { Routes, Route } from 'react-router-dom'
function App() {
  type appData = {
    result: string[];
    trackName: string;
    artistName: string;
    trackId: number;
    artworkUrl100: string;
  }

  const API_URL: string = 'https://itunes.apple.com/search?term=';
  const [result, setResults] = useState<(appData[])>([])
  const [lyrics, setLyrics] = useState<string>('')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [artistName, setArtistName] = useState<string>('')
  const [trackName, setTrackName] = useState<string>('')

  const handleSearch = async (searchQuery: string): Promise<void> => {
        try {
            const res = await fetch(API_URL + searchQuery)
            const data = await res.json();
            setResults(data.results)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    const handleResult = (result: any) => {
      return result.map((item: any) => {
          let artistName:string = item.artistName;
          let trackName:string = item.trackName;
          let trackId: number = item.trackId;
          let artworkUrl: string = item.artworkUrl100;
          const handleLyrics = async () => {
            let API_LYRICS_URL = 'https://api.lyrics.ovh/v1/';
            let lyrics = `${API_LYRICS_URL}${encodeURIComponent(artistName)}/${encodeURIComponent(trackName)}`;
            try {
              console.log(`buscando lyrics de ${artistName} - ${trackName}`);
              const res = await fetch(lyrics)
              const data = await res.json();
              console.log(data);
              setLyrics(data.lyrics);
              setModalOpen(true)
              setArtistName(artistName)
              setTrackName(trackName)

            } catch(error) {
              console.error('Error al buscar lyrics:', error);
            }
            
          }
          return(
              <ResultList onResult={handleLyrics} result={result} trackName={trackName} artistName= {artistName} trackId={trackId} artworkUrl= {artworkUrl}/>
            );
      }
    )
    }
  return (
    <>
      <div className="App overflow-hidden flex flex-col">
        <Header onSearch={ handleSearch } ></Header>
        <Content onResult={ handleResult } result={ result } ></Content>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onLyrics={lyrics} onArtistName={artistName} onTrackName={trackName}/>
        <Footer></Footer> 
        <BackgroundBeams></BackgroundBeams>
      </div>
    </>
  )  
}

export default App
