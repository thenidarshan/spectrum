// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container data-cy="home-page">
      <Logo>S</Logo>
      <Title>Welcome to Spectrum</Title>
      <Subtitle>Simple, powerful online communities</Subtitle>
      <p>The application is starting up...</p>
    </Container>
  );
};

export default Home;