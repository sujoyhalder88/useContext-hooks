import React, { createContext } from "react";
import UsecontextB from "./UsecontextB";

const BioData = createContext();

const UseContextA = () => {
    return (
        <div>
            <BioData.Provider value={"I am here"}>
                <h1>Hello I am UseContext A</h1>
                <UsecontextB />
            </BioData.Provider>
        </div>
    );
};

export default UseContextA;
export { BioData };
