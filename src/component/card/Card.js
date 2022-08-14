import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <Container>
        <Image/>
    </Container>
  )
}

const Container = styled.div`
/* width:360px ; */
width: 255px;
margin-bottom: 45px;
cursor: pointer;
`
const Image = styled.img`
/* width:360px ; */
width: 100%;
height:202px ;
background-color: #999;
`
export default Card