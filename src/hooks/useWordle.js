import React, { useState } from 'react'

const useWordle = (solution) => {

    // track what turn we are on
    const [turn, setTurn] = useState(0);

    // string to track what user is currently typing, will be updated when new key is hit
    const [currentGuess, setCurrentGuess] = useState('');

    // array to track guesses user has submitted, these guesses will be formatted guesses
    const [guesses, setGuesses] = useState([]);

    // array to track past guesses, however the guesses in this array are going to be strings
    const [history, setHistory] = useState([]);

    // boolean to check if current guess is correct - when user wins game
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g {key: 'a', color: yellow}

    const formatGuess = () => {

    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state

    const addNewGuess = () => {
    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess

    const handleKeyUp = ({ key }) => {
        console.log(key);

    }

    // using these in other components
    return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
}

export default useWordle