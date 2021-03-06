import { createContext } from "react";

const AppContext = createContext({
    name: null
})

export function AppProvider(props) {
    return (
        <AppContext.Provider value={{
            name: 'teste Context Api'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext