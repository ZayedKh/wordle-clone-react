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
        // spreading solution (string) turning into array of chars
        let solutionArray = [...solution];

        // array of objects represented each letter
        let formattedGuess = [...currentGuess].map((c) => {
            return {key: length, color: 'grey'};
        });

        // find any green letters
        formattedGuess.forEach((c, i) => {
            if(solutionArray[i] === c.key){
                formattedGuess[i].color === 'green';
                solutionArray[i] = null;
            }
        });


        // find any yellow letters
        formatGuess.forEach((c, i) => {
            if(solutionArray.includes(c.key) && c.color !== 'green'){
                formatGuess[i].color = 'yellow';
                solutionArray[i] = null;
            }
        });
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {


    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess

    const handleKeyUp = ({ key }) => {
        if(key === 'Enter'){
            // only add guess if turn is < 5
            if(turn > 5){
                console.log("You have used all your guesses");
                return;
            }
            // no duplicates
            if(history.includes(currentGuess)){
                console.log("You cannot have duplicate guesses");
                return;
            }
            // word should have length of 5
            if(currentGuess.length !== 5){
                console.log("You're guess must be 5 chars long");
                return;
            }

            formatGuess();
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0,-1);
            });
            return;
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key;
                });
            }
        } 
    }

    // using these in other components
    return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
}

export default useWordle