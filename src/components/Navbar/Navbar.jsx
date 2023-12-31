
const Navbar = () => {
    const navlinks = <>
        <li><a className="text-lg lg:text-2xl" href="#about">About</a></li>
        <li><a className="text-lg lg:text-2xl" href="#projects">Projects</a></li>
        <li><a className="text-lg lg:text-2xl" href="#skills">Skills</a></li>
        <li><a className="text-lg lg:text-2xl" href="#contact">Contact</a></li>

        {/* <li><a className="text-lg lg:text-2xl" to='#'>About</a></li> */}
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl italic">RaHim</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;