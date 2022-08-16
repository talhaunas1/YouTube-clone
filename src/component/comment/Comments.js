import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://avatars.githubusercontent.com/u/94473513?v=4" />
        <Input placeholder="Enter new comment" />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

const Container = styled.div``;

const NewComment = styled.div`
display: flex;
align-items:center ;
gap: 10p;
`;

const Avatar = styled.img`
width:40px ;
height: 40px;
border-radius:50% ;
`;

const Input = styled.input`
border:none ;
border-bottom: 2px solid ${({ theme }) => theme.soft};
background-color: transparent;
outline:none ;
padding:5px ;
width:100%; 
margin-left:10px ;
color:${({ theme }) => theme.textSoft }

`;



export default Comments;
