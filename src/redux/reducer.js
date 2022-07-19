const initState = {
    users: [{ id: 1, name: 'duc', balance: 100, pin: 2909, numberAcc: 123, phoneNumber: 115 }, { id: 2, name: 'thu', balance: 100, pin: 2909, numberAcc: 123, phoneNumber: 113 }], balance: {}, withdraw: {}
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