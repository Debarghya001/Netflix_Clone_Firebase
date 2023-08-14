import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 100px 45px;

  @media (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 40px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
