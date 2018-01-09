import keyTypes from '../keyTypes'

const loadTest = payload => ({
  type: keyTypes.LOAD_TEST,
  payload,
})

const searchValueChange = (key, payload) => ({
  type: keyTypes.SEARCH_VALUE_CHANGE,
  key,
  payload,
})

const unloadPage = () => ({
  type: keyTypes.UNLOAD_PAGE
})

export default {
  loadTest,
  searchValueChange,
  unloadPage,
}
