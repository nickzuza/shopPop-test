import { createContext, FC, ReactNode, useState } from 'react';
import { Conversation, CONVERSATION_STATE, CurrentConversation } from '../types';

const voidFunction = () => console.log;



type ConversationsContext = {
    conversations: Conversation[];
    setConversations: (conversationList: Conversation[]) => void;
    stateFilter: CONVERSATION_STATE;
    setStateFilter: (state: CONVERSATION_STATE) => void;
    currentConversation: CurrentConversation;
    setCurrentConversation: (currentCoversation: CurrentConversation) => void;
}

export const conversationsContext = createContext<ConversationsContext>({
    conversations: [],
    setConversations: voidFunction,
    stateFilter: CONVERSATION_STATE.OPEN,
    setStateFilter: voidFunction,
    currentConversation: null,
    setCurrentConversation: voidFunction,
});

export const ConversationsProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [stateFilter, setStateFilter] = useState(CONVERSATION_STATE.OPEN);
    const [currentConversation, setCurrentConversation] = useState<CurrentConversation>(null);

    return (
        <conversationsContext.Provider 
            value={{
                conversations,
                setConversations,
                stateFilter,
                setStateFilter,
                currentConversation,
                setCurrentConversation
            }}
        >
            {children}
        </conversationsContext.Provider>
    );
}
