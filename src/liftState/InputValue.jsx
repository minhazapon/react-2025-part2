


function InputValue({ inputs, setInputs }) {

    return (
        <div>
            <input placeholder="Type Here"
                className=" p-2 h-[50px] w-[500px] border-[1px] border-cyan-300 text-black "
                type="text"
                value={inputs}
                onChange={(e) => setInputs(e.target.value)}
                name="text" id="" />
        </div>
    )
}

export default InputValue
