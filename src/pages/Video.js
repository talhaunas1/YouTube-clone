import React from "react";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../component/comment/Comments";
import Card from '../component/card/Card'

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="575"
            height="325"
            src="https://www.youtube.com/embed/qZC_wjRkAt0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>2,348,230 views - Aug 15 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://avatars.githubusercontent.com/u/94473513?v=4" />
            <ChannelDetail>
              <ChannelName>TalhaTech</ChannelName>
              <ChannelCounter>200k subscriber</ChannelCounter>
              <ChannelDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Content>
        <Recommendation>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
        </Recommendation>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 7;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  /* justify-content:center ; */
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 1;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const ChannelDescription = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  /* color: #ccla00 ; */
  /* font-weight:500; */
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  height: max-content;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px 20px;
`;

export default Video;
