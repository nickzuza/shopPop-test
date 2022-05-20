import { FC } from "react";
import { BillingIcon, InboxIcon, SettingsIcon, TeamIcon } from "../../svg";
import { Button } from "../Button";

export const SidePanel: FC = () => {
    return (
        <div className="SidePanel">
            <div className="SidePanel__Top">
                <Button
                    text="Inbox"
                    className="SidePanel__Button Active"
                    leftIcon={<InboxIcon/>}
                />
                <Button
                    text="Team"
                    className="SidePanel__Button"
                    leftIcon={<TeamIcon/>}
                />
                <Button
                    text="Billing"
                    className="SidePanel__Button"
                    leftIcon={<BillingIcon/>}
                />
            </div>
            <div className="SidePanel__Bottom">
                <Button
                    text="Settings"
                    className="SidePanel__Button"
                    leftIcon={<SettingsIcon/>}
                />
            </div>
        </div>
    );
};