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
  background: #f8f9fa;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Maintenance = () => {
  return (
    <Container>
      <Title>🔧 Maintenance Mode</Title>
      <Message>
        We're currently performing maintenance on Spectrum.
        <br />
        Please check back soon!
      </Message>
    </Container>
  );
};

export default Maintenance;