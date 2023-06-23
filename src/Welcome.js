import React from 'react'

function Welcome() {

    const welcomePage = document.getElementsByClassName('welcome-page')

    setTimeout(() => {
        welcomePage[0].classList.add('display-none');
    }, 3200)

    return (
        <div className='welcome-page'>
            <div className='welcome-text'>
                <h4 className='first-name fade-in'>Robert</h4>
                <h4 className='last-name fade-in-2'>Matsko</h4>
            </div>
        </div>
    )
}

export default Welcome