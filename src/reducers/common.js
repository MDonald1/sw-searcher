import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  loading: false,
  errors: [],
  searchType: '',
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.ASYNC_START:
      return {
        ...state,
        loading: true,
      }
    case keyTypes.GET_DATA:
      if (action.subtype === 'results') {
        return {
          ...state,
          data: action.error ? [] : action.payload,
          loading: false,
          errors: action.error ? [...state.errors, action.payload] : state.errors,
        }
      }
      return state
    case keyTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        [action.key]: action.payload,
      }
    case keyTypes.CLEAR_DATA:
      if (action.subtype === 'results') {
        return {
          ...state,
          data: [],
        }
      }
      return state
    default:
      return state
  }
}

export default commonReducer
