

function Todo() {
    return (
        <>
            <div className=" m-20 ">
                <div>
                    <div>
                        <p className=" text-5xl font-bold text-cyan-700 text-center ">Todo List</p>
                    </div>
                    <div className=" flex justify-center mt-8 ">
                        <form className=" flex items-center">
                            <div>
                                <input required className="  p-3 h-[50px] border-[1px] w-[400px] rounded-l-[20px] " placeholder="Add Task" type="text" name="text" id="" />
                            </div>
                            <div>
                                <input className=" text-white h-[50px] p-3 rounded-r-[20px] bg-cyan-700 " type="submit" value="AddTask" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Todo
