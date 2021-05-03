import React from 'react'
import { useState } from "react";
import Quotes from "../quotes.json";
import Quote from './Quote';

const QuoteBox = ({ setColor, color }) => {

    const [quotes, setQuotes] = useState("Winning isn’t everything, but wanting to win is.");
    const [author, setAuthor] = useState("Vince Lombardi");

    const myArrayColors = ["#3d84b8", "#3f3697", "#04009a", "#890596", "#72147e", "#542e71", "#ce1212", "#301b3f", "#222", "#333", "#440a67", "#ff005c", "#7868e6", "#413c69", "#1e212d", "#6930c3"]
    const myRandomColor = Math.floor(Math.random() * myArrayColors.length);

    const myRandomNumber = Math.floor(Math.random() * Quotes.quotes.length);


    const HandleChangeSetQuotes = () => {
        setQuotes(Quotes.quotes[myRandomNumber].quote)
        setAuthor(Quotes.quotes[myRandomNumber].author)
        setColor(myArrayColors[myRandomColor])
    }

    return (
        <>
            <Quote color={color} quotes={quotes} author={author} HandleChangeSetQuotes={HandleChangeSetQuotes} />
        </>
    )
}

export default QuoteBox
