import React from 'react'

export default function Row({ guess, currentGuess }) {

    // if guess is not null, map through each (object) char in guess and output its key
    // which would be the characters
    if (guess) {
        return (
            <div className='row past'>
                {guess.map((c, i) => (
                    // we set the className to the color of the guess to make the styling easier
                    <div key={i} className={c.color}>{c.key}</div>
                ))}
            </div>
        )
    }

    // if currentGuess is not null, split it into an array called letters,

    if (currentGuess) {

        let letters = currentGuess.split('');

        return (
            <div className='row current'>
                {letters.map((c, i) => (
                    // for each char in letters, map through and return a div displaying the char
                    <div key={i} className='filled'>{c}</div>
                ))}

                {[...Array(5 - letters.length)].map((_, i) => (
                    // fill the rest of the empty spaces with empty divs
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