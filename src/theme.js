import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: 'white',
    text: 'black',
    border: 'red'
}
export const darkTheme = {
    body: 'black',
    text: 'white',
    border: 'yellow'
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text}
    }
    h1{
        border: 1px solid ${props => props.theme.border}
    }
`