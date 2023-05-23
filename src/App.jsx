import { useState } from 'react';
import './App.css'
import dbquotes from "./db/quote.json";
import { getRandom } from './utils/random';
import QuoteBox from './components/QuoteBox';

const bgImages = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbquotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbquotes))
    setBgImage(getRandom(bgImages))
  }


  
  return (
  
  <main className={`app ${bgImage}`}>

    <section className='app__container'>

      <h1 className='titulo'>Phrases from another galaxy</h1>

      <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase}/>

      <footer className='app__footer'>
        <h3>Author: {quote.author}</h3>
      </footer>

    </section>


  </main>
  )

}

export default App
