import counter from './counter'
import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import { getType } from 'typesafe-actions';
import StoreActions from '../actions/store';
import RootActions from '../actions';

const getInitialState = <S>(reducer: Reducer<S>) => reducer(undefined, { type: null })

export type RootState = ReturnType<ReturnType<typeof getRootReducer>>
export const getRootReducer = (history: History) => {
    const r = combineReducers({ counter, router: connectRouter(history) });
    return (state: ReturnType<typeof r>, action: RootActions):ReturnType<typeof r> => {
        switch (action.type) {
            case getType(StoreActions.reset):
                return getInitialState(r);
            default:
                return r(state, action);
        }
    }
}
