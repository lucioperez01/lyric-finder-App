import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import { BackgroundBeams } from './components/background-lines'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="App overflow-hidden flex flex-col">
      <Header></Header>
      {/* <Content></Content>   */}
      <Footer></Footer> 
      <BackgroundBeams></BackgroundBeams>
      
    </div>
    </>
  )
}

export default App
