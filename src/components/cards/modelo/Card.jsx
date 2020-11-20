import React from "react";
import styled from "styled-components";
import {
  Image,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Title2,
} from "../../atoms/Atoms";
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg};
  padding:2rem;
  border-radius:20px;
  overflow:hidden;
  position: relative;
  ::after{
      content:'';
      background:${props=>props.borderTop||'auto'};
      width:100%;
      height:5px;
      position:absolute;
      top:0;
  }
 
`;
const Container = styled.div`
display: flex;
align-items:center;
`;
const Container2 = styled(Container)`
  flex-direction: column;
  margin:1.5rem 0;
`;

const Card = (props) => {
  const {LimeGreen,BrightRed,CardBG,Text, Text2 } = props.palette;
  const { name,image, account, followers, up, number } = props.data;
  const validarUp = (up) => {
   const rutaImage = up ? "/images/icon-up.svg" : "/images/icon-down.svg";
    return rutaImage
};
const validarColor=(up)=>{
    const colorTexto=up?LimeGreen:BrightRed;
    return colorTexto
}
const getBorder=(name)=>{
    const border=props.palette[name];
    console.log(border)
    return border;
}
 
  return (
    <ContainerCard bg={CardBG} borderTop={getBorder(name)}>
      <Container>
        <Image src={process.env.PUBLIC_URL+image} />
        <Subtitle1 color={Text}>{account}</Subtitle1>
      </Container>
      <Container2>
        <Title2 color={Text2}>{followers}</Title2>
        <Subtitle2 color={Text}>FOLLOWERS</Subtitle2>
      </Container2>
      <Container>
        <Image height='10px' src={process.env.PUBLIC_URL+validarUp(up)} />
        <Subtitle3 color={validarColor(up)}>{number} Today</Subtitle3>
      </Container>
    </ContainerCard>
  );
};

export default Card;
