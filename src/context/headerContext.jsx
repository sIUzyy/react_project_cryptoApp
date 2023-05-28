import { createContext, useState } from "react";

export const Header = createContext()

export const HeaderContext = ({children}) => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const value = {
        nav,
        setNav,
        handleNav,
        

    }

    return (
    <Header.Provider value={value}>
        {children}
    </Header.Provider>
  )
}
