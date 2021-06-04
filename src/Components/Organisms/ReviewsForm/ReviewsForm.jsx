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
  background: var(--background-form);
  border-radius: 2em;
  height: 45em;
  justify-content: center;
  margin: 2em 0 10em 0;
  padding: 2em;
  
  h3 {
    text-align: center;
    color: var(--pure-white);
    margin: 0 auto;
  }

  form {
    width: 100%;
    padding: 2em;
  }

  label {
    font-size: 2em;
    color: var(--pure-white);
    margin-left: .2em;
  }

  input {
    font-size: 1.5em;
    width: 16em;
  }

  button {
    background: var(--background-form);
    color: var(--pure-white);
    border: .15em solid var(--default-primary);
    padding: .7em 1.5em .7em 1.5em;
    margin-top: 1em;
    font-size: 2em;
    border-radius: .3em;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px var(--default-primary) inset;
    }
  }

  #divider {
    display: flex;
  }

  .item {
    padding-left: 2em;
    padding-right: 2em;
  }

  #button-container {
    margin-top: 2em;
    text-align: center;
  }


  ${'' /* =================================================
  SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
  ===================================================== */}
    @media(max-width: 992px) {
      margin: 2em auto;

      #divider {
        flex-direction: column;
      }
    }
`

// const Form = styled.form`
//   width: 100%;
//   padding: 2em;
// `

// const Label = styled.label`
//   font-size: 2em;
//   color: var(--pure-white);
//   margin-left: 0.2em;
// `

// const Input = styled.input`
//   font-size: 1.5em;
//   width: 16em;
// `

const LongInput = styled.input`
  font-size: 1.5em;
  width: 34.6em;
`

// const Button = styled.button`
//   background: var(--background-form);
//   color: var(--pure-white);
//   border: 0.15em solid var(--default-primary);
//   padding: 0.7em 1.5em 0.7em 1.5em;
//   margin-top: 1em;
//   font-size: 2em;
//   border-radius: .3em;
//   transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
//   &:hover {
//     ${'' /* color: black; */}
//     box-shadow: 0 0 40px 40px var(--default-primary) inset;
//   }
// `

// const Divider = styled.div`
//   display: flex;
// `

// const Item = styled.div`
//   padding-left: 2em;
//   padding-right: 2em;
// `

// const ButtonContainer = styled.div`
//   margin-top: 2em;
//   text-align: center;
// `

const TitleIcon = styled.img`
  margin-top: 2em;
  height: 2em;
  width: 2em;
  padding: 1em;
  background: url('https://api.iconify.design/akar-icons:tag.svg?color=white') no-repeat center center / contain;
`
const RatingIcon = styled.img`
  margin-top: 2em;
  height: 2em;
  width: 2em;
  padding: 1em;
  background: url('https://api.iconify.design/ant-design:star-filled.svg?color=white') no-repeat center center / contain;
`
const CommentIcon = styled.img`
  margin-top: 2em;
  height: 2em;
  width: 2em;
  padding: 1em;
  background: url('https://api.iconify.design/fa-regular:comment-dots.svg?color=white') no-repeat center center / contain;
`

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
      <form onSubmit={handleSubmit}>
        <div id="divider">
          <div className="item">
            <TitleIcon />
            <label>Titulo</label>
            <br/>
            <input
              name="title"
              value={input.title}
              onChange={handleChange}
              ></input>
          </div>
          <div className="item">
            <RatingIcon />
            <label>Rating </label>
            <br/>
            <input
              type="number"
              name="rating"
              value={input.rating}
              onChange={handleChange}
            ></input>
            <br />
          </div>
        </div>

          <div className="item">
            <CommentIcon />
            <label>Comment</label>
            <br/>
            <LongInput
              name="description"
              value={input.description}
              onChange={handleChange}
              ></LongInput>
            <br />
          </div>

        <div id="button-container">
          <button type="submit">Publicar Review!</button>
        </div>
      </form>
    </FormContainer>
  )
}

export default ReviewsForm
