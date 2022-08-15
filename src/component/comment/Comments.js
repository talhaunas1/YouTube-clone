import React from "react";
import styled from "styled-components";

const Comments = () => {
  return (
    <Container>
      <NewContainer>
        <Avatar src="https://avatars.githubusercontent.com/u/94473513?v=4" />
        <Input placeholder="Enter new comment" />
      </NewContainer>
    </Container>
  );
};

const Container = styled.div``;

const NewContainer = styled.div``;

const Avatar = styled.img``;

const Input = styled.input``;
export default Comments;
