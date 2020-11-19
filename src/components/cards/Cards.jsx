import React from 'react'
import Card from './modelo/Card'
import Data from './data.json'
import styled from 'styled-components'
const ContainerCards=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
background:${props=>props.bg||'auto'};
padding:2rem;
`;
const Cards = (props) => {
    const {palette}=props
    return (
        <ContainerCards bg={palette.BG}>
            {
                Data.map((card)=>(
                    <Card key={card.id} data={card} palette={palette}></Card>
                ))
            }
        </ContainerCards>
    )
}
export default Cards