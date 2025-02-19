import React from 'react'
import Row from '../components/Row'

export default function Grid({ currentGuess, guesses, turn }) {

    return (
        <>
            {guesses.map((guess, i) => {
                return <Row key={i}></Row>
            })}
        </>
    )
}