import React from 'react'
import styled from 'styled-components'
import getDatosNotas from '../../helpers/getDatosNotas';
import Data from './data.json'
import Note from './modelo/Note'
const Container=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
    background:${props=>props.bg||'auto'};
    padding:2rem;
`;
const Notes = (props) => {
    const Datos=getDatosNotas(Data);
    const {palette}=props;
    return (
        <Container bg={palette.BG}>
            {
                Datos.map(dato=>(
                    <Note key={dato.id} note={dato} palette={palette}/>
                ))
            }
        </Container>
    )
}

export default Notes
