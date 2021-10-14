import  styled from 'styled-components'



export const ContainerStyle=styled.div`
    /* background-color: ${(props) => props.bg}; */
        background-color: ${(props) => props.theme.colors.header};
    h1{
        color: wheat;
    }
    &:hover{
        background-color: black
    }
    .para{
        color: white;
        width: 50%;
    }

`