import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Modal from './components/modal'
import { BackgroundBeams } from './components/third-party/background-lines'
import ResultList from './components/resultList'
import Loading from './components/loading'


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
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery: string): Promise<void> => {
        try {
            setLoading(true);
            const res = await fetch(API_URL + searchQuery)
            const data = await res.json();
            setResults(data.results)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
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
              setLoading(true);
              console.log(`buscando lyrics de ${artistName} - ${trackName}`);
              const res = await fetchWithTimeout(lyrics, 8000);
              const data = await res.json();
              console.log(data);
              setLoading(false);
              
              if (data.lyrics) {
                setLyrics(data.lyrics);
                setModalOpen(true)
                setArtistName(artistName)
                setTrackName(trackName)
              }

              if (data.error) {
              setLyrics('');
              setModalOpen(true)
              setArtistName(artistName)
              setTrackName(trackName)
            }

            } catch (error: any) {
              if (error.message === "Timeout") {
                alert("El servidor tardó demasiado en responder. Intentá de nuevo.");
              } else {
              console.error("Error al buscar lyrics:", error);
              }
            }

            finally {
              setLoading(false);
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
      <div className="App overflow-hidden flex flex-col min-h-screen align-center justify-center">
        <Header onSearch={ handleSearch } ></Header>
        <Content onResult={ handleResult } result={ result } ></Content>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onLyrics={lyrics} onArtistName={artistName} onTrackName={trackName}/>
        {loading && <Loading loading={loading} />}
          <div className=' w-full '>
            <Footer></Footer> 
          </div>
        
        <BackgroundBeams></BackgroundBeams>
      </div>
    </>
  )  
}


function fetchWithTimeout(url: string, ms: number): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);

    fetch(url)
      .then(response => {
        clearTimeout(timeout);
        resolve(response);
      })
      .catch(err => {
        clearTimeout(timeout);
        reject(err);
      });
  });
}


export default App
