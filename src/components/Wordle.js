import React, { useEffect } from 'react'
import Grid from './Grid'
import Keypad from './Keypad';
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {

    const { currentGuess, guesses, handleKeyUp, isCorrect, turn } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        console.log(guesses, isCorrect, turn);
    }, [guesses, turn, isCorrect]);

    return (
        <>
            <div>Solution: {solution}</div>
            <div>Current guess: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad />
        </>
    )
}