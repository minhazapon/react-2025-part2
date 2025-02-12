import { useState } from "react"


function Toggle() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className=" m-20 ">
                <div className=" flex justify-center mt-20 ">
                    <div className=" border-[1px]  h-[100px] w-[300px] p-8 rounded-3xl bg-black ">
                        <div className="  bg-white text-black h-[40px] w-[40px] p-2 rounded-full  ">
                            <span className=" cursor-pointer"> {isOpen ? "Off" : "on"} </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toggle
