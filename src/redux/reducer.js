const initState = {
    users: [{ id: 1, card: 115 }, { id: 2, card: 113 }], balance: {}, withdraw: {}
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'users/usersList':
            return {
                value: state.users
            }
        default:
            return state
    }
}
export default rootReducer