
const intialState = {
    user: [],
    selected: 0,
    selectedItem: {}
}
export default function users(state = intialState, action) {
    switch (action.type) {
        case 'SEARCH_USERS_SAVE':
            return Object.assign({}, state, { user: action.users });
        case 'SELECT_USERS_SAVE':
            return Object.assign({}, state, { selected: action.selected });
        case 'SELECTED_USERS_SAVE':
            return Object.assign({}, state, { selectedItem: action.selectedItem });
        default:
            return state;
    }
}