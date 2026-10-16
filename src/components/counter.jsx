import { use, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    console.log(count)

    // let count = 0;

    function handleClick() {
        

    }


    return (
        <>
        <div className="">
            <h1>State Management: Counter{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            </div>  
        </>
    )
}


export default Counter