import React, { useEffect, useState } from 'react'
import Grid from './Grid'
import Keypad from './Keypad';
import useWordle from '../hooks/useWordle'
import Modal from './Modal';

export default function Wordle({ solution }) {

    const { currentGuess, guesses, handleKeyUp, usedKeys, isCorrect, turn } = useWordle(solution);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyUp);
        }

        if (turn > 5) {
            setTimeout(() => setShowModal(true), 2000);
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
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </>
    )
}