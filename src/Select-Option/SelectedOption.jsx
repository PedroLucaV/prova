import Number from "../Option/Option";
import Star from "../images/icon-star.svg"
import { useState } from "react";

const SelectedOption = () => {
    return(
        <>
            <div className="box">
                <div className="circleS"><img src={Star} alt="" className='star'/></div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us to improve our offering!</p>
                <span className="choose">
                    <Number valor={1}/>
                    <Number valor={2}/>
                    <Number valor={3}/>
                    <Number valor={4}/>
                    <Number valor={5}/>
                </span>
                <button className="button" type="submit">Submit</button>
            </div>
        </>
    );
}

export default SelectedOption;