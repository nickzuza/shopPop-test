import { FC } from "react"
import { Conversation, ConversationMsg } from "../../types"

type CurrentConversationProps = {
    conversation: Conversation | null;
    messages: ConversationMsg[];
}

export const CurrentConversation:FC<CurrentConversationProps> = ({ conversation, messages }) => {
    const renderMessages = () => {
        if (!messages.length) {
            return <h3>No messages Yet!</h3>
        }

        return (
            <ul className="CurrentConversation__List">
                {messages.map(({ id, body, sender }) => {
                    let msgClassName = "CurrentConversation__List__Item";

                    if (sender === 'customer') {
                        msgClassName = `${msgClassName} Me`;
                    }

                    return <span key={id} className={msgClassName}>{body}</span>
                })}
            </ul>
        )
    }
    return (
        <div className="CurrentConversation">
            <div className="CurrentConversation__Top">{conversation?.customer.profile_name}</div>
            <div className="CurrentConversation__Middle">
                {renderMessages()}
            </div>
            <div className="CurrentConversation__Bottom">
                <h3>In progress</h3>
            </div>
        </div>
    )
}