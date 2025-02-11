import { useState } from "react"
import ButterDetails from "./ButterDetails"


function Render() {

    const [butter, setButter] = useState([])

    fetch('butter.json')
        .then(res => res.json())
        .then(data => setButter(data))


    return (
        <>

            <div className=" mt-20  ">

                <div>
                    <p className="text-5xl font-bold text-black text-center ">How UseSate Works</p>
                </div>

                <div>
                    <div className=" grid  md:grid-cols-3 gap-6 mt-10 ">

                        {

                            butter.map(butter => <ButterDetails butter={butter}></ButterDetails>)

                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default Render
