import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" />
        <Details>
          <ChannelImage src="https://avatars.githubusercontent.com/u/94473513?v=4" />
          <Text>
            <Title>Test Video</Title>
            <ChannelName>Talha techguy</ChannelName>
            <Info>666,234 views - 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  /* width:360px ; */
  width: 255px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  /* width:360px ; */
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Text = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
export default Card;
