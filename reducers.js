// reducers.js
export function appReducer (state = '', action)  {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    default:
      return state  
  }
}
