# Implementation of Redux store with combined reducers

## Summary:
A simple implmenation of redux like data store providing functionality to initialize state, return current store state, execute actions

## Usage:
const {createStore} = require('./components/SimpleRedux')

const reducers = {
        reducer1,
        reducer2,
    } // where reducer1 and reducer2 are reducer pure functions

//create store

const store = createStore(reducers) 

//subscribe to receive updates in state

store.subscribe(() => console.log('current store state is ',JSON.stringify(store.getState(),null,3))) 

//dispatch action

store.dispatch(action) //where action is a action object with type and payload

## Reference:
https://www.freecodecamp.org/news/redux-in-24-lines-of-code/
