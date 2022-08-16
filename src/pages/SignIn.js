import React from 'react'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>Sign In</SubTitle>
            <Input placeholder='User name' />
            <Input type='password' placeholder='Password' />
            <Button>Sign In</Button>
            <Title>Or</Title>
            <Input  placeholder='User name'/>
            <Input  placeholder='Email'/>
            <Input type='password' placeholder='Password' />
            <Button>Sign Up</Button>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items:center ;
justify-content:center ;
height:calc(100vh - 100px) ;
color:${({ theme }) => theme.text };
/* background-color:red ; */
`
const Wrapper = styled.div`
display: flex;
align-items:center ;
flex-direction:column ;
background-color:${({ theme }) => theme.bgLighter };
border: 1px solid ${({ theme }) => theme.soft };
padding: 20px 50px;
gap: 10px;
`
const Title = styled.h1`

`
const SubTitle = styled.h2`

`
const Input = styled.input`

`
const Button = styled.button`

`
export default SignIn