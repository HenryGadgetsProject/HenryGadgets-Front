import styled from 'styled-components'

const DetailedCard = styled.div`
    background          : var(--pure-white);
    border              : .3em solid var(--dark-primary);
    box-shadow          : 0 0 1em var(--font-color);
    display             : flex;
    flex-direction      : column;
    justify-self        : center;
    margin              : 3em auto;
    max-width           : 60em;
    padding             : 1em 3em;
    text-align          : justify;
    width               : 100%;

    h3 {
        color           : var(--pure-black);
        font-size       : 3em;
        margin          : .5em;
        text-align      : center;
        ${'' /* text-shadow     : .1em .2em .4em var(--light-primary); */}
    }

    img {
        width: 25em;
        height: 25em;
        margin-bottom   : 2em;
        padding         : .5em;
        place-self      : center;
        object-fit      : contain;
    }

    p {
        color           : var(--pure-black);
        font-size       : 2.2em;
        margin          : .5em;
    }
`

export default DetailedCard
