import { useState } from "react"

function ObjectState() {

    const [data, setData] = useState([
        { name: 'apon', age: '23', position: 'react engineer' },
        { name: 'shemanto', age: '23', position: 'python engineer' },
        { name: 'sopnil', age: '24', position: 'next.js engineer' },
        { name: 'sabbir', age: '25', position: 'nuxt engineer' },
    ])

    return (
        <div className=" mt-10 bg-black text-purple-600 p-20 ">
            <div>
                {
                    data.map(data => <p>
                        <li> Name:{data.name}- Age:{data.age} - Position:{data.position}  </li>
                    </p>)
                }
            </div>
        </div>
    )
}

export default ObjectState
