import { ADD_CHANNEL, SELECT_CHANNEL, ADD_MESSAGE, BOT_ANSWER } from '../actionTypes.js';

const initialState = {
    gid: 0,
    allChannels: {
        1001: {
            title: 'HelpDesk',
            isSelected: false,
            messages: [
                { mid: 2001, send: 'БОТ', text: 'Готов к работе' }
            ]
        },
        1002: {
            title: 'Бухгалтерия',
            isSelected: false,
            messages: [
                { mid: 2001, send: 'БОТ', text: 'Готов к работе' }
            ]
        },
        1003: {
            title: 'Начальник',
            isSelected: false,
            messages: [
                { mid: 2001, send: 'БОТ', text: 'Готов к работе' }
            ]
        },
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_CHANNEL:
            {
                const { id, content } = action.payload;
                return {
                    ...state,
                    allChannels: {
                        ...state.allChannels,
                        [id]: {
                            title: content,
                            isSelected: false,
                            messages: [
                                { mid: 2001, send: 'БОТ', text: 'Готов к работе' }
                            ]
                        }
                    }
                };
            }
        case SELECT_CHANNEL:
            {
                const { id } = action.payload;
                let exp =
                    Object.entries(state.allChannels).find(([key, value]) => value.isSelected === true);
                let prevId = (exp === undefined) ? id : exp[0];

                return {
                    ...state,
                    gid: id,
                    allChannels: {
                        ...state.allChannels,
                        [prevId]: {
                            ...state.allChannels[prevId],
                            isSelected: false
                        },
                        [id]: {
                            ...state.allChannels[id],
                            isSelected: true
                        },

                    }
                };
            }
        case ADD_MESSAGE:
            {
                const { id, content } = action.payload;
                const gid = state.gid;
                return {
                    ...state,
                    allChannels: {
                        ...state.allChannels,
                        [gid]: {
                            ...state.allChannels[gid],
                            messages: [
                                ...state.allChannels[gid].messages,
                                { mid: id, send: 'Я', text: content }
                            ]
                        }
                    }
                };

            }
        case BOT_ANSWER:
            {
                const { id } = action.payload;
                const gid = state.gid;
                return {
                    ...state,
                    allChannels: {
                        ...state.allChannels,
                        [gid]: {
                            ...state.allChannels[gid],
                            messages: [
                                ...state.allChannels[gid].messages,
                                { mid: id, send: 'БОТ', text: 'Извините, я думаю...' }
                            ]
                        }
                    }
                };

            }
        default:
            return state;
    }
}