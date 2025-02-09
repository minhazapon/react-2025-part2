

function ChildProps({ aponskills }) {

    const { s1, s2, s3, s4, s5 } = aponskills

    return (
        <>
            <div className=" flex justify-center ">
                <div className=" mt-48 border-[1px] border-cyan-300 w-[300px]  h-[300px] p-20">
                    <p className=" text-xl font-serif text-cyan-400"> {s1} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {s2} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {s3} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {s4} </p>
                    <p className=" text-xl font-serif text-cyan-400"> {s5} </p>
                </div>
            </div>
        </>
    )
}

export default ChildProps
