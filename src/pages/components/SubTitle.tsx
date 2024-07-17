import React, {ReactNode} from "react";

const SubTitle: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="font-bold text-xl">
            {children}
        </div>
    )
}

export default SubTitle;
