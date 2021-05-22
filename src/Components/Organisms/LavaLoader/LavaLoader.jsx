import React from 'react'
import styled from 'styled-components'

const Lava = styled.div`

    .bottom-con {
        z-index                     : -1;
    }

    .top-con {
        animation-duration          : 5s;
        animation-iteration-count   : infinite;
        animation-timing-function   : ease-in-out;
        filter                      : url("#fancy-goo");
    }

    .container {
        border                      : 1px solid #E7E7E7;
        height                      : 30em;
        left                        : 50%;
        position                    : absolute;
        top                         : 50%;
        transform                   : translate(-50%, -50%);
        width                       : 30em;
    }

    .element {
        width                       : 100%;
        position                    : absolute;
        bottom                      : 0;
        height                      : 13em;
        background                  : #FFFFFF;
    }

    .blob-container {
        width                       : 100%;
        height                      : 30%;
        position                    : absolute;
        top                         : 50%;
        left                        : 50%;
        transform                   : translate(-50%, -50%);
    }
    .blob-container:nth-child(1) {
        transform                   : translate(-50%, -50%) rotate(-95deg);
    }
    .blob-container:nth-child(1) .blob {
        animation-delay             : 0ms;
    }
    .blob-container:nth-child(2) {
        transform                   : translate(-50%, -50%) rotate(-85deg);
    }
    .blob-container:nth-child(2) .blob {
        animation-delay             : 350ms;
    }
    .blob-container:nth-child(3) {
        transform                   : translate(-50%, -50%) rotate(-88deg);
    }
    .blob-container:nth-child(3) .blob {
        animation-delay             : 800ms;
    }
    .blob-container:nth-child(4) {
        transform                   : translate(-50%, -50%) rotate(-92deg);
    }
    .blob-container:nth-child(4) .blob {
        animation-delay             : 2200ms;
    }
    .blob-container:nth-child(5) {
        transform                   : translate(-50%, -50%) rotate(-120deg);
    }
    .blob-container:nth-child(5) .blob {
        animation-delay             : 850ms;
    }
    .blob-container:nth-child(6) {
        transform                   : translate(-50%, -50%) rotate(-60deg);
    }
    .blob-container:nth-child(6) .blob {
        animation-delay             : 500ms;
    }
    .blob-container .blob {
        left                        : 50%;
        top                         : 50%;
        width                       : 6.5em;
        height                      : 6.5em;
        background                  : #FFFFFF;
        position                    : absolute;
        transform                   : translate(-50%, -50%);
        bottom                      : 9.5em;
        border-radius               : 99em;
        animation-name              : move;
        animation-iteration-count   : infinite;
        animation-duration          : 3.5s;
        animation-timing-function   : ease-in-out;
        background                  : linear-gradient(to top right, #FF1744, #AF0000, #F32C3C, #FF802B);
    }

    @keyframes move {
        0% {
            left                    : 50%;
            top                     : 50%;
            width                   : 7.5em;
            height                  : 6.5em;
        }
        30% {
            left                    : 50%;
            top                     : 50%;
            width                   : 6.5em;
            height                  : 8.5em;
        }
        70% {
            left                    : 90%;
            top                     : 50%;
            width                   : 2.5em;
            height                  : 2.5em;
        }
        90% {
            left                    : 55%;
            top                     : 50%;
            width                   : .1em;
            height                  : .1em;
        }
        100% {
            left                    : 50%;
            top                     : 50%;
            width                   : 6.5em;
            height                  : 7.5em;
        }
    }
`

const LavaLoader = () => {
    return (
        <Lava>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="fancy-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    </filter>
                </defs>
            </svg>

            <div class="container top-con">
                <div class="blob-container">
                    <div class="blob"></div>
                </div>
                <div class="blob-container">
                    <div class="blob"></div>
                </div>
                <div class="blob-container">
                    <div class="blob"></div>
                </div>
                <div class="blob-container">
                    <div class="blob"></div>
                </div>
                <div class="blob-container">
                    <div class="blob"></div>
                </div>
                <div class="blob-container">
                    <div class="blob"></div>
                </div>

            </div>
                <div class="container bottom-con">
            </div>
        </Lava>
    )
}

export default LavaLoader
