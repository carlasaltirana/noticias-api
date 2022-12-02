import {FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
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
