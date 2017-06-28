const searchSE = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_SE':
      return {
        text: action.text       
      }
    default:
      return state
  }
}

export default searchSE