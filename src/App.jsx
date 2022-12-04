import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'
import './components/styles/styles.css'
function App() {
  return(
  <NoticiasProvider> 
    <Container style={{ background: ' #F9F1D3' }} >
        <header>
        
          <Typography
          sx ={{color:'#A54014',borderTop: '3px solid ', borderBottom: '3px solid ', paddingBottom: '5px'}}
           align = 'center' marginY = {5} component = "h1" variant = 'h1'
          >
            NEWS 
          </Typography>
        </header>

        <Grid 
          container
          direction = "row"
          justifyContent = "center"
          alignItems = "center"
          >
          <Grid item xs = {12} md = {8} lg = {8}>
            <Formulario/>
          </Grid>
        </Grid>

        <ListadoNoticias/>

        
    </Container>
  </NoticiasProvider> 
  )
}

export default App
