import DisplayValue from "./DisplayValue"
import InputValue from "./InputValue"

function LiftState() {

    return (
        <div className=" flex justify-center items-center gap-5 m-20 bg-black text-white p-32 ">
            <InputValue></InputValue>
            <DisplayValue></DisplayValue>
        </div>
    )
}

export default LiftState
