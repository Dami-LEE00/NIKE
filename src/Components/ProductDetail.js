import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { styled } from "styled-components";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 100px 0 20px 0;
`;
const Image = styled.img`
  width: 100%;
  margin: 40px 0;
`;
const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0 20px 0;
`;
const Desc = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 1.8;
`;


const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCart = () => {
    alert('장바구니에 추가되었습니다.');
  }
  const handleWishList = () => {
    alert('위시리스트에 추가되었습니다.');
  }

  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container className='product-detail-wrapper'>
      <Row className='product-detail-Row'>
        <Col className='product-detail-img'>
          <img src={product.img} />
        </Col>
        <Col>
          <div className='product-title'>{product.title}</div>
          <div className='product-gender'>{product.gender}</div>
          <div className='product-price'>{product.price}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size.map((item) => (
                <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* <select>
            <option selected disabled>사이즈 선택</option>
            {product.size.map((item) => (
              <option>{item}</option>
            ))}
          </select> */}

          <Button variant='dark' className='add-cart' onClick={handleCart}>장바구니</Button>
          <Button variant='white' className='add-list' onClick={handleWishList}>위시리스트</Button>
          <div className='desc'>
            클래식하고 신기 편한 나이키 에어 포스 1 PLT.AF.ORM을 신고 근사한 스타일로 비상해 보세요. 높아진 우아한 형태의 중창이 농구 프랜차이즈에 당당하고 새로운 목소리를 전달합니다. 쉽게 길들여지는 가죽 갑피가 시간이 지날수록 완벽하게 완성되며, 성형된 카라와 폭신한 뒤꿈치가 한결같은 편안함을 선사합니다. 보는 이의 마음을 사로잡아 보세요.
          </div>
          <ul>
            <li>현재 컬러: 화이트/화이트/화이트/서밋 화이트</li>
            <li>스타일 번호: DJ9946-100</li>
          </ul>
        </Col>
      </Row>
      <Contents>
        <Title>나이키 에어 포스 1 PLT.AF.ORM 여성 신발 살펴보기</Title>
        <Item>
          <Image src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c4276edf-dced-49f7-b5b2-4060556a8681/image.jpg' />
          <div>
            <SubTitle>향상된 스타일</SubTitle>
            <Desc>
              위로 들린 중창은 AF1 시리즈에 입체감을 제공하여 손쉬운 스타일링과 멋진 룩을 선사합니다.<br/>
              발 아래의 부드러운 폼은 편안함을 더합니다.
              </Desc>
          </div>
        </Item>
        <Item>
          <Image src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/7ab25900-d261-4e6d-9aa4-b553fc3af289/image.jpg' />
          <div>
            <SubTitle>오랜 시간을 거쳐 검증된 스타일</SubTitle>
            <Desc>에어 포스 1은 40년 동안 많은 사람들이 즐겨 찾는 신발이었습니다. 큰 사랑을 받은 선명한 가죽,<br />
            헤리티지 디테일, 기능적인 편안함과 같은 특징은 그대로 간직해 시간이 지나도 계속해서 착용할 수<br />
              있는 타임리스 룩을 완성했습니다.</Desc>
          </div>
        </Item>
      </Contents>
    </Container>
  )
}

export default ProductDetail;
