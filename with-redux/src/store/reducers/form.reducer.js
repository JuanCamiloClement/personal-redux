export const CHANGE_FORM = 'CHANGE_FORM';

const initialState = {
    email: '',
    password: '',
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_FORM':
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            }
        default:
            return state
    }
}

export default formReducer;