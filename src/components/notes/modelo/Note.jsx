import React from "react";
import styled from "styled-components";
import { Subtitle1, Title3, Image } from "../../atoms/Atoms";

const Container = styled.div`
  
  background: ${(props) => props.bg || "auto"};
  border-radius:10px;
`;
const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem;
`;
const Note = (props) => {
  const {LimeGreen,BrightRed,Text, Text2, CardBG } = props.palette;
  const {image,newNotes} = props.note;
  const validarUp = (up) => {
    const rutaImage = up ? "/images/icon-up.svg" : "/images/icon-down.svg";
     return rutaImage
 };
 const validarColor=(up)=>{
     const colorTexto=up?LimeGreen:BrightRed;
     return colorTexto
 }
  return (
    <>
    {
        newNotes.map(n=>(
            <Container key={n.id} bg={CardBG}>
                <ContainerFlex>
                    <Subtitle1 color={Text}>{n.note}</Subtitle1>
                    <Image src={process.env.PUBLIC_URL+image}/>
                </ContainerFlex>
                <ContainerFlex>
                    <Title3 color={Text2}>{n.followers}</Title3>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <Image height='5px' src={process.env.PUBLIC_URL+validarUp(n.up)}/>
                        <Subtitle1 color={validarColor(n.up)}>{n.number}%</Subtitle1>
                    </div>
                </ContainerFlex>
            </Container>
        ))
    }
    </>
  );
};

export default Note;
