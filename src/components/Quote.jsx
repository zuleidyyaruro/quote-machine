import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Quote = ({ quotes, author, HandleChangeSetQuotes, color }) => {
    return (
        <div className="container-quote " style={{ color: color }}>
            <div>
                <p className="text-right font-size-x">
                    <FontAwesomeIcon icon={faQuoteLeft} size="2x" />  {quotes}
                </p>
            </div>
            <div>
                <p className="text-italic text-right">{author}</p>
            </div>
            <div className="container-button">
                <a
                    style={{ color: color }}
                    href={`https://twitter.com/intent/tweet?text=${quotes}... Author: ${author} `}
                    target="blank">
                    <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                </a>
                <button
                    style={{ backgroundColor: color }}
                    onClick={HandleChangeSetQuotes} >
                    New Quote
                </button>
            </div>
        </div>
    )
}

export default Quote
