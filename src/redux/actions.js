import { ADD_CHANNEL, SELECT_CHANNEL, ADD_MESSAGE, BOT_ANSWER } from "./actionTypes.js";

export const addChannel = content => ({
    type: ADD_CHANNEL,
    payload: {
        id: Date.now(),
        content
    }
});

export const selectChannel = id => ({
    type: SELECT_CHANNEL,
    payload: { id }
});

export const addMessage = content => ({
    type: ADD_MESSAGE,
    payload: {
        id: Date.now(),
        content
    }
});

export const botAnswer = () => ({
    type: BOT_ANSWER,
    payload: {
        id: Date.now()
    }
});

export function addBlock(content) {
    return function(dispatch) {
        dispatch(addMessage(content));
        setTimeout(() => {
            dispatch(botAnswer());
        }, 5000)
    }
}