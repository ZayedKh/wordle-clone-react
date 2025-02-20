import React from 'react'
import Row from '../components/Row'

export default function Grid({ currentGuess, guesses, turn }) {

    return (
        <>
            {guesses.map((guess, i) => {
                if(turn === i){
                    return <Row key={i} currentGuess={currentGuess}/>
                }
                return <Row key={i} guess={guess}></Row>
            })}
        </>
    )
}