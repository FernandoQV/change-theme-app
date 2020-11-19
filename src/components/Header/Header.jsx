import React from 'react'
import styled from 'styled-components'
import {Title1,Subtitle1, Button} from '../atoms/Atoms'

const Container1=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    `;
const Container2=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
const ConatinerHeader=styled.div`
background:${props=>props.bg};
`;
const Header = (props) => {
    const{TopBGPattern,Text,Text2}=props.palette;
    const changeTheme=()=>{
        const {updateDark}=props
        updateDark()
    }
    return (
        <ConatinerHeader bg={TopBGPattern}>
            <Container1>
                <Title1 color={Text2}>Social Media Dashboard</Title1>
                <Subtitle1 color={Text}>Total Followers: 23,004</Subtitle1>
            </Container1>
            <Container2>
                <Subtitle1 color={Text}>Dark Mode</Subtitle1>
                <Button color={Text} onClick={changeTheme}>Toggle Theme</Button>
            </Container2>
        </ConatinerHeader>
    )
}

export default Header
