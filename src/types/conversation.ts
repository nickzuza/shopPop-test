export interface Customer {
    channel_address: string;
    profile_name: string;
}

export enum CONVERSATION_STATE {
    OPEN = 'open',
    CLOSED = 'closed'
}

export interface LastMessage {
    id: number;
    sender: string;
    status: string;
    body: string;
    received_at?: string | null;
    queued_at: string;
    sent_at: string;
    delivered_at: string;
    read_at: string;
}

export interface Conversation {
    id: number;
    state: CONVERSATION_STATE;
    customer: Customer;
    last_message: LastMessage;
}

export interface ConversationMsg {
    id: number;
    sender: string;
    status: string;
    body: string;
    received_at: string;
    queued_at?: string | null;
    sent_at?: string | null;
    delivered_at?: string | null;
    read_at?: string | null;
}

export type CurrentConversation = {
    data: Conversation;
    messages: ConversationMsg[] 
} | null;
  