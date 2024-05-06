import { act, useState } from "react";

const Number = ({valor}) => {
    const [active, setActive] = useState(true);
    function classe(apertado){
        if(apertado == true){
            return "circle"
        };
        return "circleSelect"
    }
    return(
        <>
            <button onClick={() => addEventListener('click', () => {
                setActive(!active)
                alert(valor)
                console.log(active);
            })} className={classe(active)}>
                <p>{valor}</p>
            </button>
        </>
    );
    
}

export default Number;