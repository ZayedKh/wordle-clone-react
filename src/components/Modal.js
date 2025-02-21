import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {


    return (
        <div className='modal'>

            {isCorrect ?
                (<div>
                    <h1>You win!</h1>
                    <p className='solution'>The solution was: {solution.toUpperCase()}!</p>
                    <p>You found the solution in {turn} guesses</p>
                </div>)
                :
                (<div>
                    <h1>You ran out of turns :(</h1>
                    <p className='solution'>The solution was: {solution.toUpperCase()}!</p>
                </div>)}
        </div>
    );
}

