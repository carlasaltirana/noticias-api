import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {
  return(
  <NoticiasProvider> 
    <Container style={{ background: '#f5f5dc ' }} >
        <header>
          <Typography align = 'center' marginY = {5} component = "h1" variant = 'h2'>
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
