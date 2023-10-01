import React, { useEffect, useState } from 'react'

function Counter() {

    let [sec, setSec] = useState(0)
    let [min, setMin] = useState(0)
    let [revsec, setRevsec] = useState(60)
    let [revmin, setRevmin] = useState(10)
    useEffect(() => {
        setTimeout(() => {
            setSec(sec + 1)
            setRevsec(revsec - 1)
        }, 100)
        if (sec == 60) {
            setMin(min + 1)
            setSec(0)
        }
        if (revsec == 0) {
            setRevsec(60)
            setRevmin(revmin - 1)
        }
    }, [sec])


    return (
        <div>
            <h1>counter={min}:{sec}</h1>
            <h1>counter={revmin}:{revsec}</h1>
        </div>
    )
}

export default Counter