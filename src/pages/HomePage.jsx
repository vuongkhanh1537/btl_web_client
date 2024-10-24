import React, { useState } from 'react'

const HomePage = () => {
    const res = fetch('http://localhost/btl_web_core/api/products').then(res => res.json()).then(data => console.log(data));    
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    )
}

export default HomePage;