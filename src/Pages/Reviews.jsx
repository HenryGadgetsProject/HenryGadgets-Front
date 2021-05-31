import React, { useEffect } from "react";
import Breadcrumb from "../Components/Atoms/Breadcrumb";
import Footer from "../Components/Organisms/Footer";
import NavBar from "../Components/Organisms/NavBar";
import StarRatings from "react-star-ratings";
import { getReview } from "../Redux/Actions/Review/ReviewActions";
// import { getProductsById } from "../Redux/Actions/Product/ProductActions";

// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReviewsForm from "../Components/Organisms/ReviewsForm";

const Cont = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerReviewForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  background: var(--pure-white);
  border: 0.1em solid var(--divider);
  padding: 1em 2em 1em 2em;
  margin: 2em;
  width: 30%;
  /* box-shadow: 0px 0px 5px var(--font-color); */
  box-sizing: border-box;
  transition: 0.3s;
  box-shadow: var(--divider) 7px 7px;
  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.p`
  color: #ff1744;
  font-size: 2em;
`;
const Description = styled.span`
  color: #212121;
  font-size: 1.6em;
  font-style: italic;
`;

const Reviews = ({ productId }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const reviews = useSelector((state) => state.review.reviews);
  const loading = useSelector((state) => state.review.loading)

  useEffect(() => {
    dispatch(getReview(productId));
  }, [productId]);

  return (
    <>
      <NavBar />
      <Breadcrumb id="breadcrumb" />

      <h1>Reviews sobre {reviews[0] ? reviews[reviews.length-1].name : null}</h1>

      <Cont>     
        {(loading === false && reviews.length > 0) ? reviews?.map((review) => (
              <Item key={review.id}>
                <Title>{review.title}</Title>
                <Description>{review.description}</Description>
                <Title>Puntaje</Title>
                <StarRatings
                  rating={review.rating}
                  starDimension="1.2em"
                  starSpacing=".2em"
                  numberOfStars={5}
                  starRatedColor="gold"
                />
              </Item>
            ))
        : null}
      </Cont>
      

      <ContainerReviewForm>   
      {user && user.email ? (
        <ReviewsForm
          user={user}
          productId={productId}
        />
      ) : null}
     </ContainerReviewForm>
  
      <Footer />
    </>
  );
};

export default Reviews;
