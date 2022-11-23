import styled from "@emotion/styled"

const Result = styled.div`
  color: white;
  font-size: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px ;
`
const Imagen = styled.img`
  display: block;
  width: 120px;

`


const Texto = styled.p`
  font-size: 18px;
  span { 
    font-weight: 700;
  }
  
`
const Precio = styled.p`
  font-size: 24px;
  span { 
    font-weight: 700;
  }
`

 const Resultado = ({resultado}) => { 
  const  { PRICE, HIGHDAY, LOWDAY, 
    CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE } = resultado
  
  return (
   <Result> 
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
    <div> 
      <Precio>Price: <span> {PRICE} </span></Precio>
      <Texto>Hight price day:  <span> {HIGHDAY} </span></Texto>
      <Texto>Low price day: <span> {LOWDAY} </span></Texto>
      <Texto>Change last 24hours: <span> {CHANGEPCT24HOURS} </span></Texto>
      <Precio>Last Update: <span> {LASTUPDATE} </span></Precio>
    </div>


  </Result> 
  )
}
 
export default Resultado