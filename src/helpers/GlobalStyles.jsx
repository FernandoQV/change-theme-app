import {createGlobalStyle} from 'styled-components'

const Global=createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
}
body{
    font-size:14px;
    font-family: 'Inter', sans-serif;
}
`;

export default Global;