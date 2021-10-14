import {ThemeProvider} from 'styled-components'
import {ContainerStyle} from '../Styled/ContainerStyle.styled'
import {GlobalStyle} from '../Styled/Globla'

export const Header = () => {

 const theme={
   colors:{
      header: 'blue'
   }
 }   
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
        <ContainerStyle bg="red">
            <h1>Hello contanier</h1>
            <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo necessitatibus facere eos vero blanditiis quam itaque pariatur. Cum, rerum libero placeat aperiam suscipit soluta mollitia provident eaque. Inventore, non.</p>
        </ContainerStyle>
        </ThemeProvider>
    )
}
