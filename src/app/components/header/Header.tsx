

import ToggleBtn from "../button/ToggleBtn"
import MenuItem from "../menubar/MenuItem"
import ResponsiveMenu from "../menubar/responsiveMenu/ResponsiveMenu"
import Logo from "./Logo"

const Header = () => {

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full items-center flex justify-between text-white">
                <Logo />
                <nav>
                    <menu className="relative">
                        <ResponsiveMenu />
                        <ul className="hidden lg:flex items-center gap-10 text-white">
                            <MenuItem linkName={"Home"} />
                            <MenuItem linkName={"About"} />
                            <MenuItem linkName={"Project"} />
                            <MenuItem linkName={"Contact"} />
                        </ul>
                        <div className="block lg:hidden">
                            <ToggleBtn />
                        </div>
                    </menu>
                </nav>
            </div>
        </div>
    )
}

export default Header
