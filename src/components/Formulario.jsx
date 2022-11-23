import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data.js/monedas'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;

    }

`


export const Formulario = ({setMonedas}) => {

  const [ criptos, setCriptos] = useState([])
  const [ error, setError] = useState([false])
   
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda - Choose your $', monedas)
  const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu CriptoMoneda - Choose your Cripto', criptos)
 


  useEffect(( ) => { 
    const consultarAPI = async () => { 
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
      const respuesta = await fetch(url)
      const  resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map( cripto => { 

        const objeto = { 
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

          return objeto
          
      })

        setCriptos(arrayCriptos)



    }
    consultarAPI();

  }, [ ] )

  const handleSubmit = e => { 
    e.preventDefault()


      if([moneda, criptomoneda].includes('')) {
          setError(true)

          return         
      }   
      
      setError(false)
      setMonedas({
        moneda,
        criptomoneda
      })
    
    }
  return (
      <>
    { error && <Error> Todos los campos son obligatorios // All fields required </Error>}
    <form
        onSubmit={handleSubmit}
    >
      
        < SelectMonedas/>
        < SelectCriptoMonedas/>


        <InputSubmit
         type= "Submit" 
         value="Cotizar - Convert"/>
    </form>
     </> 
  )
}

export default Formulario