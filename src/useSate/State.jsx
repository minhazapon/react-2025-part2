import { useState } from "react"
import Render from "./StateRender"
import ObjectState from "./ObjectState"

function State() {

    let [data, setData] = useState(0)

    const handleData = () => {
        setData(data + 1)
    }
    const handleDataDec = () => {
        setData(data - 1)
    }

    return (
        <div className=" m-20 ">
            <div className=" flex justify-center items-center gap-5 bg-black p-10 border-[1px] rounded-xl ">
                <p onClick={() => handleData()} className=" btn ">Increment </p>
                <p className="  bg-white w-fit pl-5 pr-5 pt-2 pb-2 text-black "> {data} </p>
                <p onClick={() => handleDataDec()} className=" btn ">Decrement </p>
            </div>
            <div className=" flex justify-center ">
                <Render></Render>
            </div>
            <div className=" flex justify-center ">
                <ObjectState></ObjectState>
            </div>
        </div>
    )
}

export default State
