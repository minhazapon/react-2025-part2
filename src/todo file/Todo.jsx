import { useState } from "react"
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function Todo() {

    const [inputValue, setInputValue] = useState("")

    const [task, setTask] = useState([])

    const handleInput = (value) => {
        setInputValue(value)
    }

    const handleFormValue = (e) => {

        e.preventDefault()

        if (!inputValue) return

        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }
        setTask((preTask) => [...preTask, inputValue])
        setInputValue("")
    }

    const now = new Date();
    const formatedDate = now.toLocaleDateString();
    const formatTime = now.toLocaleTimeString()

    return (
        <>
            <div className=" m-20 ">
                <div>
                    <div>
                        <p className=" text-5xl font-bold text-cyan-700 text-center ">Todo List</p>
                        <p className=" text-2xl font-bold text-cyan-700 text-center ">{formatedDate} - {formatTime}</p>
                    </div>
                    <div className=" flex justify-center mt-8 ">
                        <form onSubmit={handleFormValue} className=" flex items-center">
                            <div>
                                <input required className="p-3 h-[50px] border-[1px] w-[200px] md:w-[400px] rounded-l-[20px]"
                                    placeholder="Add Task"
                                    type="text"
                                    name="text"
                                    value={inputValue}
                                    onChange={(e) => handleInput(e.target.value)}
                                    id="" />
                            </div>
                            <div>
                                <input className=" cursor-pointer text-white h-[50px] p-3 rounded-r-[20px] bg-cyan-700"
                                    type="submit"
                                    value="AddTask" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <div>
                            {
                                task.map((task, index) => <div className=" mt-10 " key={index}>
                                    <div className=" flex justify-center ">
                                        <div className=" flex justify-between items-center gap-20 border-[1px] w-[420px] h-[50px] p-3 rounded-xl ">
                                            <p>{task}</p>
                                            <div className=" flex items-center gap-2  ">
                                                <p > <MdDeleteSweep className=" cursor-pointer h-[30px] w-[30px] "></MdDeleteSweep> </p>
                                                <p > <CiEdit className=" cursor-pointer h-[30px] w-[30px] "></CiEdit> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Todo
