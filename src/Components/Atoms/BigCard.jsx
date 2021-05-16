import styled from 'styled-components'

const BigCard = styled.div`
    position: relative;
    height: 430px;
    width: 900px;
    margin: 200px auto;
    background-color: #FFF;
    -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);

    /* Image on the left side */
    .thumbnail {
        float: left;
        position: relative;
        left: 30px;
        top: -30px;
        height: 320px;
        width: 530px;
        -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        overflow: hidden;
    }

    /*object-fit: cover;*/
    /*object-position: center;*/
    img.left {
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        width: 100%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    /* Right side of the card */
    .right {
        margin-left: 590px;
        margin-right: 20px;
    }

    h3 {
        padding-top: 15px;
        font-size: 1.8em;
        color: #4B4B4B;
    }

    .stars {
        background-color: gold;
        height: 30px;
        width: 110px;
        border-radius: 3em;
    }

    .author > img {
        padding-top: 5px;
        margin-left: 10px;
        float: left;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }

    h2 {
        padding-top: 8px;
        margin-right: 6px;
        text-align: right;
        font-size: 0.8rem;
    }

    .separator {
        margin-top: 10px;
        border: 1px solid #C3C3C3;
    }

    p {
        text-align: justify;
        padding-top: 10px;
        font-size: 0.95rem;
        line-height: 150%;
        color: #4B4B4B;
    }

    /* DATE of release*/
    h5 {
        position: absolute;
        left: 35px;
        bottom: -50px;
        font-size: 6rem;
        color: #C3C3C3;
    }

    h6 {
        position: absolute;
        left: 43px;
        bottom: -15px;
        font-size: 2rem;
        color: #C3C3C3;
    }

    /* Those futur buttons */
    ul {
        margin: 180px 0 0 250px;
    }

    li {
        display: inline;
        list-style: none;
        padding-right: 40px;
        color: #7B7B7B;
    }

    /* Floating action button */
    .buy {
        position: absolute;
        right: 70px;
        bottom: -20px;
        box-sizing: border-box;
        padding-top: 18px;
        background-color: #1875D0;
        width: 180px;
        height: 60px;
        color: white;
        text-align: center;
        border-radius: 3em;
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
    }
`

export default BigCard
