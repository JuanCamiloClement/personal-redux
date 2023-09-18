import countReducer from './reducers/count.reducer';
import formReducer from './reducers/form.reducer';
import postsReducer from './reducers/posts.reducer';
import thunk from 'redux-thunk';
import {
    legacy_createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

const rootReducer = combineReducers({
    countReducer,
    formReducer,
    postsReducer
});

// const logger = (store) => {
//     return (next) => {
//         return (action) => {
//             const prevState = store.getState();
//             next(action);
//             console.log('Previous state: ', prevState, action, 'Next state: ', store.getState());
//         }
//     }
// }

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);