import { ActionsObservable, StateObservable, combineEpics } from 'redux-observable'
import { filter, flatMap, withLatestFrom, tap } from 'rxjs/operators'

import CounterActions from '../actions/counter'
import { RootState } from '../reducers'
import { isActionOf } from 'typesafe-actions';
import RootActions from '../actions';

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

const incrementIfOddEpic = (
    // provide all our Actions type that can flow through the stream
    // everything else is gonna be handled by TypeScript so we don't have to provide any explicit type annotations. Behold... top notch DX 👌❤️🦖
    action$: ActionsObservable<RootActions>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        filter(isActionOf(CounterActions.incrementIfOdd)),
        withLatestFrom(state$),
        filter(([_, state]) => state.counter % 2 === 1),
        flatMap(async x => {
            await delay(1000);
            return x;
        }),
        flatMap(() => [CounterActions.increment(), CounterActions.increment()]),
        tap(x => console.log("epic : ", x))
    )

export const getRootEpic = () => combineEpics(incrementIfOddEpic)
