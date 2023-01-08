import React, { useState } from 'react'



function Subscription({ setShowSubscription, setButton, setShowSub }) {

    const [inputValue, setInputVAlue] = useState("")

    const handleClick = () => {
        
        if (inputValue.includes('@') && inputValue.includes('.')) {

            fetch("https://demoapi.com/api/series/newsletter", {
                method: "POST",
                body: JSON.stringify({
                    email: { inputValue }
                }),
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }


    return (
        <>
            <h1>Subscribe to our newsletter</h1>
            <input type="text" placeholder="email..." onChange={(event) => { setInputVAlue(event.target.value) }} />
            <button onClick={() => {
                handleClick()
                setShowSubscription(false)
                setButton(true)
                setTimeout(() => {
                    setButton(false)
                    setShowSub(true)
                    setTimeout(() => {
                        setShowSub(false)
                    },5000)
                },5000)
            }}>SEND</button>
        </>

    )
}

export default Subscription