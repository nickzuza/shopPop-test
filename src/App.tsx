import React, { useContext, useEffect } from 'react';
import { Header, SidePanel, Content, ConversationList, CurrentConversation } from './components';
import { conversationsContext } from './contexts';
import { getConversationMessages, getConversations } from './services/api.service';
import { Conversation } from './types';

function App() {
  const {
    conversations,
    setConversations,
    setStateFilter,
    stateFilter,
    currentConversation,
    setCurrentConversation,
  } = useContext(conversationsContext);

  const onConversationListItemClick = (conversation: Conversation) => {
    getConversationMessages(conversation.id)
      .then((messages) => setCurrentConversation({ messages, data: conversation }));
  }

  useEffect(() => {
    getConversations()
      .then((fetchedConversations) => {
        setConversations(fetchedConversations);
        onConversationListItemClick(fetchedConversations[0]);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Content>
        <SidePanel/>
        <ConversationList
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
          conversationList={conversations}
          currentConversation={currentConversation}
          setCurrentConversation={onConversationListItemClick}
        />
        <CurrentConversation
          conversation={currentConversation?.data || null}
          messages={currentConversation?.messages || []}
        />
      </Content>
    </div>
  );
}

export default App;
