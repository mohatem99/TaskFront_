import React from 'react'

export default function Error({message}) {
    return (
        <div className="w-full py-10">
            <p className="text-red-600 text-center font-bold text-lg">{message}</p>
        </div>
    )
}