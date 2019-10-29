import { GET_PARENT } from "../../constants/types"

export const getParents = () => dispatch => {
    dispatch({
        type: GET_PARENT,
        payload: [
            {
                id: 1,
                fatherName: "a",
                motherName: "b",
            }
        ]
    })
} 