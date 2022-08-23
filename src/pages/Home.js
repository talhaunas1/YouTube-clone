
import styled from "styled-components";
import Card from "../component/card/Card";
import axios from 'axios'
import React, { useEffect, useState } from "react";
const Home = ({type}) => {

  //fetching data from backend

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async ()=>{
      const res = await axios.get(`/videos/${type}`)
    setVideos(res.data)
    }
  
    fetchVideos()
  }, [type])
  
  return (
    <Container>
      {videos.map(video=>(
        <Card key={video._id} video={video} />
      ))}
      
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default Home;
