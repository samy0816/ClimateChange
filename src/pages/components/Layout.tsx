import React, {ReactNode} from "react";
import DropDown from "./DropDown.tsx";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="flex h-screen overflow-hidden">
            {children}
            <div className="fixed top-4 right-4 z-50 p-4">
                <DropDown/>
            </div>
        </div>
    )
}

export default Layout;
