import "../app/globals.css"
import {IoBriefcase, IoHome} from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="center" style={{
            flexDirection: "row",
            width: "100%"
        }}>
            <button onClick={
                () => {
                    if(window.location.pathname == "/") {
                        return;
                    }
                    window.location.assign("/");
                }
            }><IoHome/></button>
            <button onClick={
                () => {
                    if(window.location.pathname == "/career") {
                        return;
                    }
                    window.location.assign("/career");
                }
            }><IoBriefcase/></button>
        </div>
    )
}

export default Navbar;