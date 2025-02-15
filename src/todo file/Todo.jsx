import { useEffect, useState } from "react"
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";


function Todo() {

    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    const [date, setDate] = useState("")

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

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatTime = now.toLocaleTimeString()
            setDate(` ${formatedDate} - ${formatTime} `)
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    const handleDelete = (addValue) => {
        const DeleteItems = task.filter((curTask) => curTask !== addValue)
        setTask(DeleteItems)
        if (addValue) {
            Swal.fire({
                title: 'Delete Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }

    return (
        <>
            <div className=" m-20 ">
                <div>
                    <div>
                        <p className=" text-5xl font-bold text-cyan-700 text-center ">Todo List</p>
                        <p className=" text-2xl font-bold text-cyan-700 text-center "> {date} </p>
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
                                                <button onClick={() => handleDelete(task)}>
                                                    <MdDeleteSweep className="cursor-pointer h-[30px] w-[30px]">
                                                    </MdDeleteSweep>
                                                </button>
                                                <button>
                                                    <CiEdit className=" cursor-pointer h-[30px] w-[30px] ">
                                                    </CiEdit>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className=" flex justify-center mt-8 ">
                        <button className=" btn bg-red-800 text-white ">Clear all</button>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Todo
