import {FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'breaking-news', label: 'General'},
    { value: 'world,', label: 'World'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

function Formulario() {
    const {categoria , handleChangeCategoria} = useNoticias() //extraigo ambos cat and handle(dentro tiene el set)
      return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>    
                <Select 
                  label = "Categoría" //Label = que texto va a tener 
                  onChange = {handleChangeCategoria}
                  value = {categoria} 
                >

                  {CATEGORIAS.map(categoria => (
                        <MenuItem //como estamos iterando se le agrega KEY y VALUE
                            key = {categoria.value} 
                            value = {categoria.value}
                        >
                          {categoria.label}
                        </MenuItem>

                    ))}
                </Select>
              

            </FormControl>
        </form>
      )
    }

export default Formulario
