import ChildEvent from "./ChildEvent"

function EventProps() {

    const handleProps = (position) => {
        alert(`minahzul abedin is a toptal ${position} developer`)
    }

    return (
        <div className=" m-20 ">

            <div className=" flex justify-center ">
                <ChildEvent aponHandle={handleProps}></ChildEvent>
            </div>

        </div>
    )
}

export default EventProps
