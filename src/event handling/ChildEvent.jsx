


function ChildEvent({ aponHandle }) {

    return (
        <div className=" bg-black text-purple-700 w-fit p-10 ">
            <p>Minhazul abedin apon</p>
            <p>Position: react expert</p>
            <p>company: toptal</p>

            <button onClick={() => aponHandle("react expert")} className=" btn text-white  mt-5 bg-black ">Contact For Work</button>
        </div>
    )
}

export default ChildEvent
