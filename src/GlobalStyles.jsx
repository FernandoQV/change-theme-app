import {createGlobalStyle} from 'styled-components'

const Global=createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
    margin:0;
    font-size:14px;
    font-family: 'Inter', sans-serif;
}
`;

export default Global;