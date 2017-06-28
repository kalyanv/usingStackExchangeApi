export default function (state = {
  search: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_SE_DATA": {
      return { ...state, fetching: true, fetched: false }
    }
    case "FETCH_SE_DATA_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        search: action.payload
      }
    }
    case "FETCH_SE_DATA_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

  }
  return state;
}
