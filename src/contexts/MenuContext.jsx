import { createContext, useState } from "react";

const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuProvider };
export default MenuContext;
