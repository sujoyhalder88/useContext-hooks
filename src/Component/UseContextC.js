import React, { useContext } from "react";
import { BioData } from "./UseContextA";

const UseContextC = () => {
    const text = useContext(BioData);
    return (
        <div>
            <h1>Hello I am UseContext C {text}</h1>
        </div>
    );
};

export default UseContextC;
