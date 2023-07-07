import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img} />
      <div className='card-new'>{item.new == true ? '신제품' : '베스트셀러'}</div>
      <div className='card-title'>{item.title}</div>
      <div className='card-gender'>{item.gender}</div>
      <div className='card-color'>{item.color}</div>
      <div className='card-price'>{item.price}</div>
      
    </div>
  )
}

export default ProductCard;
