import { CHANGE_FORM } from "../reducers/form.reducer"

export const changeForm = (e) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_FORM, payload: e.target })
    }
}