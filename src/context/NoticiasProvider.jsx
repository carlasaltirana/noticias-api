import { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import { useForkRef } from '@mui/material';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [ categoria, setCategoria ] = useState ('general')
    const [ noticias, setNoticias ] = useState ([])
    const [ pagina, setPagina ] = useState (1)
    const [ totalNoticias, setTotalNoticias ] = useState (0)
    
    useEffect(() => {
      const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        
        const { data } = await axios(url)

        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
        setPagina(1)
      }   
      consultarApi()
      
    }, [categoria]);
    // dependecia de categoria cada que cambie le va a hacer una consulta pero por default esta general asi que ya tiene que traer noticias
    


    useEffect(() => {
      const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        
        const { data } = await axios(url)

        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }   
      consultarApi()
      
    }, [pagina]);
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value) //e(evento).target se refiere elemento clickado
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor) //e(evento).target se refiere elemento clickado
  }

  return (
    <NoticiasContext.Provider
        value = {{
            categoria, 
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}
    >
            {children}
        </NoticiasContext.Provider>
    
  )
}
export {
    NoticiasProvider
}

export default NoticiasContext


