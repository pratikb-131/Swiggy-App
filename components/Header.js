import { useEffect } from "react";

const Header = ( ) => {
    
    useEffect(() => {
        setInterval(() => {
        console.log("Hello");
        }, 1000);
    },[])

    return(
    <div >
        This is header
    </div>
    )
}

export default Header;