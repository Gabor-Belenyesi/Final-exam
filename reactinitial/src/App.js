import React, { useEffect, useState } from "react"
import Characters from "./components/Characters"
import LoadingMask from "./components/LoadingMask"
import Subscription from "./components/Subscription"

const App = () => {

  const apiAddress = 'https://demoapi.com/api/series/howimetyourmother'

  const [arr, setArr] = useState([])

  useEffect(() => {
    fetch(apiAddress)
      .then(res => res.json())
      .then((data) => {
        setTimeout(() => {
          setArr(data)
        }, 5000)
      })
  }, [])

  const [showSubscription, setShowSubscription] = useState(false)
  const [button, setButton] = useState(false)
  const [showSub, setShowSub] = useState(false)
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubscription(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [])


  return (
    <>

      {arr.length > 0 ? <Characters persons={arr} /> : <LoadingMask />}
      {showSubscription ? <Subscription setShowSubscription={setShowSubscription} setButton={setButton} setShowSub={setShowSub}/> : null}
      {button ? 
      <>
      <h2>Subscribe to our newsletter</h2>
      <LoadingMask /> 
      </>
      : null}
      {showSub ? <h2>Subscribed!</h2> : null}
    </>
  )
}

export default App
