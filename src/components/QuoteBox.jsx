import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <>
    <section className='quoteBox'>

    <article className='quoteBox__footer'>
      <p>{phrase}</p>
    </article>
    </section>
        
    <div>
    <button className='quoteBox__btn' onClick={handleChangeQuote}>STARK
      <img src="./images/btn.png" alt="imagen de boton" />
    </button>
    </div>

  
  </>
  )
}

export default QuoteBox