import styled from 'styled-components'

export const Title1=styled.h1`
font-weight:700;
font-size:1.5rem;
color:${props=>props.color};
`;
export const Title2=styled.h2`
font-weight:700;
font-size:4rem;
color:${props=>props.color};
`;
export const Subtitle1=styled.p`
font-weight:700;
font-size:1rem;
color:${props=>props.color};
`;
export const Subtitle2=styled.p`
font-weight:400;
font-size:1.3rem;
letter-spacing:4px;
color:${props=>props.color};
`;
export const Subtitle3=styled.p`
font-weight:700;
font-size:1rem;
color:${props=>props.color};
`;
export const Image=styled.img`
    margin-right:.5rem;
    height:${props=>props.height || 'auto'};
`;
export const Button=styled.button`
    padding:.5rem 1.2rem;
    border:none;
    background:linear-gradient(to left,#f87f7f,#f2f2f2);
`;