import React from 'react'
import '../loadingMask.css'

function LoadingMask() {
    return (
        <>
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
            <div>Loading</div>
        </>
    )

}

export default LoadingMask