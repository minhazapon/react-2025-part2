import { useState } from "react"

function Looping() {

    const [frutZ, setFrutZ] = useState([])

    fetch('Data.json')
        .then(res => res.json())
        .then(data => setFrutZ(data))

    return (
        <>
            <div className=" flex justify-center mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-10 ">
                    {
                        frutZ.map(frutZ => <div key={frutZ}>
                            <div className="card card-compact bg-base-100 w-96 h-[350px] border-[1px]">
                                <figure>
                                    <img
                                        src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/f8/2c/5b15a8b945449816fd137920ae0d/fruits.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title"> {frutZ.name} </h2>
                                    <p> {frutZ.details} </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Looping
