import React, {ReactNode} from "react";

const Title: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="font-bold text-2xl text-center">
            {children}
        </div>
    )
}

export default Title;
