import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

function Root() {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
