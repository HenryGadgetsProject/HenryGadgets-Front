import React, { useState } from "react"
// import { getId } from "../../../Helpers/getId";
import { useSelector, useDispatch } from "react-redux"
// import { addUser } from "../../../Redux/Actions/User/UserActions"
import { useHistory, useLocation } from "react-router-dom"
// import StarRatings from "react-star-ratings"
import { addReview } from "../../../Redux/Actions/Review/ReviewActions"
import Swal from 'sweetalert2'

import styled from "styled-components"

const FormContainer = styled.div`
  height: 100%;
  margin-bottom: 10em;
  padding: 2em;
  width: 50%;
  justify-content: center;
  background-color: #424242;
  border-radius: 2em;
  h3 {
    text-align: center;
    color: #ffffff;
  }
`;
const Form = styled.form`
  padding: 2em;
`;
const Label = styled.label`
  font-size: 2em;
  color: #ffffff;
  margin-left: 0.2em;
`;
const Input = styled.input`
  font-size: 1.5em;
  width: 16em;
`;
const Button = styled.button`
  background: #424242;
  color: #ffffff;
  border: 0.15em solid #ff1744;
  padding: 0.7em 1.5em 0.7em 1.5em;
  margin-top: 1em;
  font-size: 2em;
  border-radius: 0.3em;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: black;
    box-shadow: 0 0 40px 40px #ff1744 inset;
  }
`;
// const ErrorMsg = styled.p`
//   color: #ff1744;
//   font-size: 1.2em;
// `;
const Divider = styled.div`
  display: flex;
`;
const Item = styled.div`
  padding-left: 2em;
  padding-right: 2em;
`;
const ButtonContainer = styled.div`
  margin-top: 2em;
  text-align: center;
`;
const EmailIcon = styled.img`
  margin-top: 2em;
  height: 2em;
  width: 2em;
  padding: 1em;
  background: url("https://api.iconify.design/dashicons:email-alt.svg?color=white")
    no-repeat center center / contain;
`;
const PasswordIcon = styled.img`
  margin-top: 2em;
  height: 2em;
  width: 2em;
  padding: 1em;
  background: url("https://api.iconify.design/carbon:password.svg?color=white")
    no-repeat center center / contain;
`;

// const ReviewsForm = ({ execSubmit, user, productId }) => {
const ReviewsForm = () => {
  
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.user)

  let history = useHistory()
  let location = useLocation()

  const [input, setInput] = useState({
    description: "",
    rating: "",
    user_id: user.id,
    title: "",
    productId: location.state
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addReview(input))
    Swal.fire(
      'Listo!',
      'Tu review se ha agregado con éxito!',
      'success'
    ).then(() => {
      history.push('/user')
    })
  }

  return (
    <FormContainer>
      <h3>Form Review</h3>
      <Form onSubmit={handleSubmit}>
        <Divider>
          <Item>
            <Label>Hola! {user.first_name} {user.last_name}</Label>
            <br />
            {/* <Input name='user' value={input.user} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.user && error.user ? (<ErrorMsg>{error.user}</ErrorMsg>) : null} */}
          </Item>
        </Divider>


        <Item>
          <EmailIcon />
          <Label>{user.email}</Label>
          <br />
        </Item>

        <Divider>
          <Item>
            <PasswordIcon />
            <Label>Titulo</Label>
            <Input
              name="title"
              value={input.title}
              onChange={handleChange}
              ></Input>
            <br />
          </Item>
          <Item>
            <PasswordIcon />
            <Label>Rating </Label>
            <Input
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleChange}
            ></Input>
            <br />
          </Item>
        </Divider>

          <Item>
            <PasswordIcon />
            <Label>Comment</Label>
            <Input
              name="description"
              value={input.description}
              onChange={handleChange}
              ></Input>
            <br />
          </Item>

        <ButtonContainer>
          <Button type="submit">Enviar review!</Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default ReviewsForm;
