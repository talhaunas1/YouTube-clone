import React from 'react'
import styled from 'styled-components'
import Youtube from '../../img/logo.png'

function Menu() {
  return (
    <Container>
        <Wraper>
            <Logo>
                <Img src={Youtube}/>
                YouTube
            </Logo>
            <Item>
                Home
            </Item>
        </Wraper>
    </Container>
  )
}


const Container = styled.div`
flex:1 ;
background-color: #202020;
height:100vh ;
color:white ;
font-size: 14px;
`

const Wraper = styled.div`
padding:18px 26px;

`
const Logo = styled.div`
display: flex;
align-items: center;
gap:5px;
font-weight:bold ;
margin-bottom: 25px;
`
const Img = styled.img`
height:25px;
`
const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
`

export default Menu