import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background: #ffffff;
        padding: 0 162px;
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialised !important;

        &::-webkit-scrollbar{
            padding-right: 1px;
            width: 10px;
            background: transparent;
        } 

        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: rgb(20, 8, 43);
            border: 6px solid #12B571;
        }
    }

    body, input, button{
        color: #222;
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;

export const Container = styled.div `
    width: 100%;
    padding: 24px, 162px;
`