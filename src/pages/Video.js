import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Comments from "../component/comment/Comments";
import Card from "../component/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess } from "../redux/videoSlice";
import { format } from "timeago.js";

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  //  console.log(path);
  // const [video, setVideo] = useState({})
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        // setVideo(videoRes.data)
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {}
    };
    fetchData();
  }, [path, dispatch]);

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
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views}9898 views - {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button>
              {currentVideo.likes?.includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpAltOutlinedIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button>
            <Button>
              {currentVideo.dislikes?.includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownAltOutlinedIcon />
              )}{" "}
              dislike
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
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName></ChannelName>
              <ChannelCounter>{channel.subscribers}</ChannelCounter>
              <ChannelDescription>{currentVideo.desc}</ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Content>
        {/* <Recommendation>
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
        </Recommendation> */}
      </Content>
    </Container>
  );
};

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
