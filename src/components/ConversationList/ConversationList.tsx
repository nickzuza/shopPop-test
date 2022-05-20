import { FC, useCallback, useMemo } from 'react';
import { Button } from '../Button';
import { Conversation, CONVERSATION_STATE, CurrentConversation } from '../../types';

type ConversationListProps = {
    conversationList: Conversation[];
    stateFilter: CONVERSATION_STATE;
    setStateFilter: (state: CONVERSATION_STATE) => void;
    currentConversation: CurrentConversation;
    setCurrentConversation: (newCurrent: Conversation) => void;
}

export const ConversationList: FC<ConversationListProps> = ({
    conversationList,
    setStateFilter,
    stateFilter,
    currentConversation,
    setCurrentConversation
}) => {
    const conversationToShow = useMemo(() => conversationList.filter((conversation) => (
        conversation.state === stateFilter
    )), [conversationList, stateFilter]);

    const renderConversationList = useCallback(() => {
        if (!conversationList.length ) {
            return <h3>No Conversations yet!</h3>
        }

        return (
            <ul className="ConversationList__Items">
                {conversationToShow.map((conversation) => {
                    const { id, customer: { profile_name }, last_message: { body: lastMessageBody } } = conversation;
                    let conversationClassName = "ConversationList__Item";

                    if (id === currentConversation?.data.id) {
                        conversationClassName = `${conversationClassName} Current`; 
                    }

                    const messageToShow = lastMessageBody.length <= 30
                        ? lastMessageBody
                        : `${lastMessageBody.substring(0, 30)}...`;

                    return (
                        <li className={conversationClassName} key={id} onClick={() => setCurrentConversation(conversation)}>
                            <div className="ConversationList__Item__Top">
                                <span className="ConversationList__Item__UserName">{profile_name}</span>
                            </div>
                            <div className="ConversationList__Item__LastMessage">{messageToShow}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }, [conversationList, stateFilter, currentConversation])

    const renderFilterButtons = () => {
        return [
            CONVERSATION_STATE.OPEN,
            CONVERSATION_STATE.CLOSED
        ].map((filter) => {
            let buttonClassName = "ConversationList__Filter__Button";

            if (filter === stateFilter) {
                buttonClassName = `${buttonClassName} Active`;
            }

            return <Button text={filter} className={buttonClassName} onClick={() => {setStateFilter(filter)}} />
        })
    }

    return (
        <div className="ConversationList">
        <div className="ConversationList__Filter">
            <div className="ConversationList__Filter__Buttons">
                {renderFilterButtons()}
            </div>
        </div>
        {renderConversationList()}
      </div>
    );
}
