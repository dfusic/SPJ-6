import React from "react";
import image from "./reakt.png"

function Zaglavlje(props)
{
    const naslov = 'IT Shoping Kraljica '
    return(
        <>
            <img src={image} width={100} height={100}></img>
            {(props.naslov)}
        </>
    )
}
export default Zaglavlje;