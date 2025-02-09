

function ChildProps({ aponskills }) {
    return (
        <>
            <div className=" flex justify-center ">
                <div className=" mt-48 border-[1px] border-cyan-300 w-[300px]  h-[300px] p-20">
                    <p className=" text-xl font-serif text-cyan-400"> {aponskills.s1} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {aponskills.s2} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {aponskills.s3} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {aponskills.s4} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {aponskills.s5} </p>
                </div>
            </div>
        </>
    )
}

export default ChildProps
