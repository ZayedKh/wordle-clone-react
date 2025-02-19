import React from 'react'

export default function Row({ guess }) {


    if(guess){
        return(
            <div className='row past'>
                {guess.map((c, i) =>(
                    <div key={i} className={c.color}>{c.key}</div>    
                ))}
            </div>
        )
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