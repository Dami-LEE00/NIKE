import React from 'react';
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 100px;
  margin-top: 100px;

  background-color: #222;
`;

const Footer = () => {
  return (
    <Container>
      <ul className='footer-ul-left'>
        <li><a href='#'>새로운 소식</a></li>
        <li><a href='#'>멤버 가입</a></li>
        <li><a href='#'>매장 안내</a></li>
        <li><a href='#'>나이키 저널</a></li>
      </ul>
      <ul className='footer-ul-right'>
        <li className='help-title'><a href='#'>도움말</a></li>
        <li><a href='#'>로그인 안내</a></li>
        <li><a href='#'>주문 배송 조회</a></li>
        <li><a href='#'>반품 정책</a></li>
        <li><a href='#'>결제 방법</a></li>
        <li><a href='#'>공지사항</a></li>
        <li><a href='#'>문의하기</a></li>
      </ul>
    </Container>
  )
}

export default Footer;
