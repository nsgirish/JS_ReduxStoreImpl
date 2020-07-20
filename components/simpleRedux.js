const lib = {}

lib.createStore = (combinedReducers,initialState={}) => {
    let _state = initialState
    let _listeners = []
    let _combinedReducers = {}

    if(typeof(combinedReducers) !== 'object' || Object.entries(combinedReducers).length === 0) {
        throw new Error('combined reducers object should be containing all reducer function objects')
    }

    for(const item in combinedReducers) {
        if(typeof(combinedReducers[item]) !== 'function') {
            throw new Error('reducer should be a function object')
        }
    }

    _combinedReducers = combinedReducers

    return {
        //function to get current store state
        getState:  () => _state,

        //function to dispatch action(s) to change state of store 
        dispatch: action => {
            for(const item in combinedReducers) {
                //get current state of reducer item
                const oldItemState = _state[item]

                //run action against current reducer
                const newItemState = {
                    [item]: combinedReducers[item](oldItemState,action)
                }

                //merge new item state with current state
                _state = {
                    ..._state,
                    ...newItemState,
                }

                //invoke listener callbacks
                for(const item in _listeners) {
                    _listeners[item]()
                }
                
            }
        },

        //function to subscribe for callbacks to get notified when store state changes
        subscribe: listener => {
            _listeners.push(listener)
            const unsubscribe = () => {
                _listeners = _listeners.filter(item => item !== listener)
            }
            return unsubscribe
        },
    }
}

module.exports = lib