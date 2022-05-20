import { FC } from "react";
import { SelectIcon, HomeIcon, ChevronDownIcon } from "../../svg";
import { Button } from "../Button";

export const Header: FC = () => {
    return (
        <header className="Header">
            <div className="Header__Left">
                <Button text={<HomeIcon/>} className="Header__Button" />
                <Button text="Acme Inc." className="Header__Button" rightIcon={<SelectIcon />}/>
            </div>
            <div className="Header__Center">Inbox</div>
            <div className="Header__Right">
            <Button
                text="L. van Loon"
                className="Header__Button"
                leftIcon={<ChevronDownIcon/>}
                rightIcon={<SelectIcon />}
            />
            </div>
        </header>
    );
};
