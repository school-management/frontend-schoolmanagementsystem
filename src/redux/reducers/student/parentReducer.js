import { GET_PARENT } from "../../constants/types";

const initialState = {
    parents: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARENT:
            return {
                ...state,
                parents: action.payload
            }

        default:
            return state;
    }
}