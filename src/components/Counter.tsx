import { useState } from 'react'

interface CounterProp {
    exercise : string
}

export default function Counter(props: CounterProp) {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>{props.exercise}</p>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Count is {count}</button>
        </>
    )

}