import ChildrenOfJP from "./ChildrenOfJP"


function JP() {

    const info = {
        skills: 'javaScript',
        skill2: 'react.js'
    }

    return (
        <div>
            <ChildrenOfJP
                info={info}
                aponInfo={
                    <div>
                        <p>Profession: software developer</p>
                        <p>Company: toptal</p>
                    </div>
                }
            >
                <div>
                    <p>Minhazul abedin apon</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
                </div>
            </ChildrenOfJP>
        </div>
    )
}

export default JP
