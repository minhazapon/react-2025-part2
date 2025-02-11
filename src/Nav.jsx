import { NavLink } from "react-router-dom"


function Nav() {

    const navS = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/props'>Props</NavLink></li>
        <li><NavLink to='/jp'>jsx props</NavLink></li>
        <li><NavLink to='/event'>Event Handle</NavLink></li>

    </>

    return (
        <>

            <div className="navbar bg-base-100 p-5 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navS}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className=" h-[50px] " src="https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png" alt="" />
                        <a className="text-xl">React.js</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navS}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Nav
