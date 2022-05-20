import { FC } from "react";

type ContentProps = {
    children: JSX.Element[];
}

export const Content: FC<ContentProps> = ({ children }) => {
    return (
        <div className="Content">
            {children}
        </div>
    );
}