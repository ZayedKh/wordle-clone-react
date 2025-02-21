import React, { useEffect } from 'react'
import Grid from './Grid'
import Keypad from './Keypad';
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {

    const { currentGuess, guesses, handleKeyUp, usedKeys, isCorrect, turn } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        if (isCorrect) {
            console.log("Congratulations on your win");
            window.removeEventListener('keyup', handleKeyUp);
        }

        if(turn > 5){
            console.log("You have lost");
            window.removeEventListener('keyup', handleKeyUp);
        }

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp, isCorrect, turn]);

    return (
        <>
            <div>Solution: {solution}</div>
            <div>Current guess: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </>
    )
}