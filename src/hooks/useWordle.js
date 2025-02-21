import React, { useState } from 'react'

const useWordle = (solution) => {

    // track what turn we are on
    const [turn, setTurn] = useState(0);

    // string to track what user is currently typing, will be updated when new key is hit
    const [currentGuess, setCurrentGuess] = useState('');

    // array to track guesses user has submitted, these guesses will be formatted guesses
    const [guesses, setGuesses] = useState([...Array(6)]);

    // array to track past guesses, however the guesses in this array are going to be strings
    const [history, setHistory] = useState([]);

    // boolean to check if current guess is correct - when user wins game
    const [isCorrect, setIsCorrect] = useState(false);

    // object to keep track of what keys we have used {a: 'green', b: 'yello'}
    const [usedKeys, setUsedKeys] = useState({});

    // format a guess into an array of letter objects
    // e.g {key: 'a', color: yellow}
    const formatGuess = () => {
        // spreading solution (string) turning into array of chars
        let solutionArray = [...solution];

        // array of objects represents each letter
        let formattedGuess = [...currentGuess].map((c) => {
            return {key: c, color: 'grey'};
        });

        // find any green letters
        formattedGuess.forEach((c, i) => {
            if(solutionArray[i] === c.key){
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        });


        // find any yellow letters
        formattedGuess.forEach((c, i) => {
            if(solutionArray.includes(c.key) && c.color !== 'green'){
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(c.key)] = null;
            }
        });

        return formattedGuess;
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true);
        }
        

        // in this code, the current user guess is added to prev guesses through new guesses
        // at index [turn]
        // the new guesses array is then returned

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        // setter function to add current guess to guess history
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        // increase the turn state variable after each turn
        setTurn((prevTurn) =>{
            return prevTurn + 1;
        });

        // setter function takes in usedKeys previous state and clones it into newKeys
        // we then iterate through all letters in formatted guess object
        // if the letter exists in newKeys (prevUsedKeys), we set the current color to that letters color
        // otherwise currentColor remains null
        //
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys};
             formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key];

                if(l.color === 'green'){
                    newKeys[l.key] = 'green';
                    return;
                }

                // if we have found the letter before and set it to green, we don't want to set it to yellow
                if(l.color === 'yellow' && currentColor !== 'green'){
                    newKeys[l.key] = 'yellow';
                    return;
                }

                if(l.color === 'green' && l.color !== 'green' && l.color !== 'yellow'){
                    newKeys[l.key] = 'grey';
                    return;
                }
             });

             return newKeys;
        });

        // set current guess back to null so that the user can guess again 
        setCurrentGuess('');
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

            const formatted = formatGuess();
            addNewGuess(formatted);
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
    return {turn, currentGuess, guesses, usedKeys, isCorrect, handleKeyUp};
}

export default useWordle