import React from 'react'
import styled from 'styled-components';

const Comment = () => {
  return (
    <Container>
         <Avatar src="https://avatars.githubusercontent.com/u/94473513?v=4" />
        <Details>
            <Name>TalhaTech <Date> 4 Days ago </Date> </Name>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem I use to do a king off jungle </Text>
        </Details>
    </Container>
  )
}

const Container = styled.div`
display: flex;
gap: 10;
margin:30px 0px ;
`

const Avatar = styled.img`
width:40px ;
height: 40px;
border-radius:50% ;
`;

const Details = styled.div`
display: flex;
flex-direction:column ;
gap: 5px;
color: ${({ theme }) => theme.text} ;
margin-left:10px ;
`
const Name = styled.span`
font-size:13px ;
font-weight:500 ;
/* margin-bottom:-5px ; */
`
const Date = styled.span`
font-size:12px ;
font-weight:400 ;
color: ${({ theme }) => theme.textsoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`
export default Comment