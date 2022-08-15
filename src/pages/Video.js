import React from 'react'
import styled from 'styled-components'

function Video() {
  return (
    <Container>
        <Content>Content</Content>
        <Content>Recommendation</Content>
    </Container>
  )
}

const Container = styled.div`
display: flex;
gap: 24px;
`

const Content = styled.div`
flex:5;
`

const Recommendation = styled.div`
flex:2;
`


export default Video