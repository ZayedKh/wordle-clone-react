import React from 'react'

export default function Row({ guess, currentGuess }) {


    if (guess) {
        return (
            <div className='row past'>
                {guess.map((c, i) => (
                    <div key={i} className={c.color}>{c.key}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {

        let letters = currentGuess.split('');

        return (
            <div className='row current'>
                {letters.map((c, i) => (
                    <div key={i} className='filled'>{c}</div>
                ))}
                {[...Array(5 - letters.length)].map((_,i) => (
                    <div key={i}></div>
                ))}
            </div>
        );
    }

    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}