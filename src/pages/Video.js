import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";


function Video() {
  return (
    <Container> 
        <Content>
          <VideoWrapper>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qZC_wjRkAt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </VideoWrapper>
          <Title>Test Video</Title>
          <Details>
            <Info>2,348,230 views - Aug 15 2022</Info>
            <Buttons>
              <Button> <ThumbUpAltOutlinedIcon />123 </Button>
              <Button> <ThumbDownAltOutlinedIcon /> Dislike </Button>
              <Button> <ReplyOutlinedIcon /> Share </Button>
              <Button> <AddTaskOutlinedIcon /> Save </Button>
            </Buttons>
          </Details>
          <Hr/>
        </Content>
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
const VideoWrapper = styled.div`

`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top:20px ;
margin-bottom: 10px;
color: ${({ theme }) => theme.text}
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Info = styled.div`
color: ${({ theme }) => theme.textSoft}
`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text}
`
const Button = styled.div`
display: flex;
align-items:center ;
gap: 5px;
cursor: pointer;
/* justify-content:center ; */
`
const Hr = styled.hr`
margin: 15px 0px;
border:0  .5px solid ${({ theme }) => theme.soft};
`

const Recommendation = styled.div`
flex:2;
`


export default Video