import { useState } from "react"


function Toggle() {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className=" m-20 ">
                <div className=" flex justify-center mt-20 ">
                    <div className=" border-[1px]  h-[100px] w-[300px] p-8 rounded-full bg-black " onClick={handleToggle}>
                        <div className="  bg-white text-black h-[40px] w-[40px] p-2 rounded-full cursor-pointer  ">
                            <span className=" font-mono"> {isOpen ? "OFF" : "ON"} </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toggle
