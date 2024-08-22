import { useState } from 'react';
import styled from 'styled-components';

export default function ReviewElem({ review }) {
  const [more, setMore] = useState(false);

  return (
    <ReviewDiv className='review-elem'>
      <h5 className='fw-bold'>{review.author}</h5>
      <TextBox className={`text-box ${more ? 'more' : 'fold'}`}>
        {review.content}
      </TextBox>
      {review.content.length > 680 ? (
        <MoreBtn className='more-button' onClick={() => setMore(!more)}>
          {more ? '접기' : '펼치기'}
        </MoreBtn>
      ) : (
        <></>
      )}
    </ReviewDiv>
  );
}

const ReviewDiv = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: 2px solid red;
  margin-top: 20px;
  border-radius: 20px;
  padding: 15px;
`;

const TextBox = styled.p`
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const MoreBtn = styled.button`
  background: none;
  border: none;
  color: lightgrey;
  font-weight: bold;
  text-decoration: underline;
`;
