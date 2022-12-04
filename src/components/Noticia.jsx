import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid' 
import { border } from '@mui/system'

const Noticia = ({noticia}) => {

    const { urlToImage, url, title, source } = noticia
    return (
      
      <Grid item xs={6} md={3} ld={4} >
        <Card style={{ height: '100%',background: '#9D7166 ' }}>
          <CardMedia 
            component ="img"
            alt ={`Imagen de la noticia ${title}`}
            image ={urlToImage}
            height= {'100'} 
                      
          />
           <CardContent>
              {/* <Typography variant = 'body1' color="error">
                {source.name} */}
              {/* </Typography> */}
              <Typography variant = 'h6' component="div">
                {title}
              </Typography>
              {/* <Typography variant = 'body2' 
              >
              {description}
              </Typography> */}
              </CardContent> 

              <CardActions>
                <Link
                  href={url}
                  target= "_blanck"
                  variant="button"
                  width={'100%'}
                  textAlign={'center'}
                  sx={{
                    textDecoration: 'none'
                }}
                >  </Link>
              </CardActions>
           
           
        </Card>
      </Grid>  
  )
}

export default Noticia
 