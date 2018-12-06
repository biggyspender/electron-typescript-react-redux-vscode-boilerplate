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
    <h3>Count: {counter}</h3>
    <button onClick={increment}>Increment</button>
    <button onClick={incrementIfOdd}>Increment if Odd</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={navgigateHome}>home</button>
  </div>
