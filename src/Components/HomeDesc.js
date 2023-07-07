import React from 'react';
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justicy-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 400;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 30px;

  margin: 20px 0 80px 0;
  padding: 8px 20px;
  &:hover {
    background-color: #555;
  }
`;

const HomeDesc = () => {
  return (
    <Container>
      <Title>스니커즈를 만나는 최고의 방법</Title>
      <Desc>최고의 스니커즈, 최신 발매 소식, 독점 비하인드 스토리.</Desc>
      <Desc>새로운 스니커즈 문화를 선도할 SNKRS 커뮤니티로 초대합니다.</Desc>
      <Button>자세히 보기</Button>
    </Container>
  )
}

export default HomeDesc
