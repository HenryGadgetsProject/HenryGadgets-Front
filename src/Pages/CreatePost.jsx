import React from 'react'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'

const CreatePost = () => {
    return (
        <div className="container">
            <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header>

            <Main id="main">
                <h3>Crea una publicación.</h3>
            </Main>
        </div>
    )
}

export default CreatePost
