import EventProps from "./EventProps"


function Event() {

    const handleContact = (contact, gmail) => {
        console.log(`contact with ${contact} and work with him and his gmail is: ${gmail}`)
    }

    return (
        <div className=" m-20 ">
            <div>
                <div className=" border-[1px] border-purple-600 bg-black w-fit p-10 text-white
                 ">
                    <p>Minhazul abedin apon</p>
                    <p>Title: software developer</p>
                    <button onClick={() => handleContact("minhaz the react expert", "minhazTheReact@gmail.com")} className=" btn mt-5 bg-black  hover:border-purple-400 text-white ">Contact Him</button>
                </div>
            </div>

            <div>
                <EventProps></EventProps>
            </div>
        </div>
    )
}

export default Event
