import React from 'react'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>To continue To Talhatech</SubTitle>
            <Input placeholder='User name' />
            <Input type='password' placeholder='Password' />
            <Button>Sign In</Button>
            <Title>Or</Title>
            <Input  placeholder='User name'/>
            <Input  placeholder='Email'/>
            <Input type='password' placeholder='Password' />
            <Button>Sign Up</Button>
           
        </Wrapper>
        <More>
                English(USA)
                <Links> 
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items:center ;
justify-content:center ;
flex-direction:column ;
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
font-size: 24px;

`
const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`
const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft };
border-radius:3px ;
padding:10px ;
background-color:transparent ;
width:100% ;
color: ${({ theme }) => theme.textSoft };
`
const Button = styled.button`
border-radius:3px ;
border:none;
padding:10px 20px;
font-weight:500 ;
cursor:pointer ;
background-color: ${({ theme }) => theme.soft };
color: ${({ theme }) => theme.textSoft };
`
const More = styled.div`
display: flex;
font-size:12px ;
margin-top:10px ;
color:${({ theme }) => theme.textsoft };
`
const Links = styled.div`
margin-left:50px;
`
const Link = styled.span`
margin-left:30px ;
`
export default SignIn