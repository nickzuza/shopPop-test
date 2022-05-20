import { apiUrl } from "../constants";
import { Conversation, ConversationMsg } from "../types";

export const getConversations = () => {
    return fetch(`${apiUrl}/conversations.json`)
        .then((res) => res.json()) as Promise<Conversation[]>
}
export const getConversationMessages = (id: number) => {
    return fetch(`${apiUrl}/conversations/${id}/messages.json`)
        .then((res) => res.json()) as Promise<ConversationMsg[]>
}
