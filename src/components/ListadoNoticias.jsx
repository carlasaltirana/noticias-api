import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination  from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';



const ListadoNoticias = () => {
    
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas =  Math.ceil( totalNoticias / 20)
       
  return (
    
  <>
        <Typography
            textaling = {'left'}
            marginY = {4} 
            variant = {'h4'}
            component = {'h2'}
        >
            Ultimas Noticias
        </Typography>

        <Grid
            container
            alignItems="stretch"
            spacing={2}      
        >
            {noticias.map(noticia =>(
                <Noticia 
                key = {noticia.url}
                noticia = {noticia} // creo el prop
                />
            ))}

        </Grid>

        <Stack  
            sx = {{
                marginTop:10,
                marginBottom : 6
            }}
            spacing ={2}
            direction = 'row'
            justifyContent= {'center'}
            alignItems = {'center'}
        >
            <Pagination 
                sx = {{
                    color: 'green'
                }}
                count={totalPaginas} 
                onChange = {handleChangePagina}
                page={pagina}

            />
        </Stack>

  </>
  )
}

export default ListadoNoticias


