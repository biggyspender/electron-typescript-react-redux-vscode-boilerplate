import * as React from 'react'

export interface CounterStateProps {
  counter: number
}
export interface CounterDispatchProps {

  decrement: () => void
  increment: () => void
  incrementIfOdd: () => void
  navgigateHome: () => void

}
type CounterProps = CounterStateProps & CounterDispatchProps

export const Counter: React.FunctionComponent<CounterProps> = ({ counter, decrement, increment, incrementIfOdd, navgigateHome }) =>
  <div>
    <h1>Counter</h1>
    <h3>Count: <span id="counter-count">{counter}</span></h3>
    <button id="increment-button" onClick={increment}>Increment</button>
    <button onClick={incrementIfOdd}>Increment by 2 if Odd (with 1 sec delay)</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={navgigateHome}>home</button>
  </div>
