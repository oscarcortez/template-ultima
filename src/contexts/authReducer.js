export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        logged: true,
        user: action.payload
      };
    case 'logout':
      return {
        ...state,
        logged: false,
        user: null
      };
    default:
      return state;
  }
};
