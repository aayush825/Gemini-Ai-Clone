import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) =>{
    //this will be object, inside this object  , if i place any function or variBLE , it can be used any where in the project
    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider