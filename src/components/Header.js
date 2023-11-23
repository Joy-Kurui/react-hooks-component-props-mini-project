import React from "react";
import { header } from "server/reply";

function Header ({name}){

    return (
     <header>
     <h1>{name}</h1>
     </header>
    )

}
export default Header;