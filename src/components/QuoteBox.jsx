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
    <button className='quoteBox__btn' onClick={handleChangeQuote}>
      <img src="./public/images/btn.png" alt="" />
    </button>
    </div>

  
  </>
  )
}

export default QuoteBox