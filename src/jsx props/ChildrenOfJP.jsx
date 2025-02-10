

function ChildrenOfJP(props) {

    const { info, aponInfo, children } = props

    return (
        <>

            <div className=" flex justify-center ">
                <div className=" border-[1px] bg-black text-cyan-500 p-20 rounded-xl mt-40 ">
                    <p>{info.skills}</p>
                    <p>{info.skill2}</p>
                    <p>{aponInfo}</p>
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}

export default ChildrenOfJP
