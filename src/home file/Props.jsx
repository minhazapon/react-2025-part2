import ChildProps from "./ChildProps"


function Props() {

    const aponskills = {

        s1: 'javaScript',
        s2: 'react.js',
        s3: 'next.js',
        s4: 'DSA',
        s5: 'leet code'

    }

    return (
        <>
            <div className=" bg-black h-screen ">
                <div>

                    <ChildProps aponskills={aponskills}></ChildProps>

                </div>
            </div>
        </>

    )
}

export default Props
