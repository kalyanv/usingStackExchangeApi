import React from 'react'
import { connect } from 'react-redux'
import { searchSE } from '../actions/searchSE'

let SearchSE = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(searchSE(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Search Stack Exchange
        </button>
      </form>
    </div>
  )
}

{/*class SearchSE extends Component {
  render() {
    console.log(this.props)
    const { input, searchSE } = this.props
    return (
      <div>
        <input ref={node => { input = node }} />
        <button onClick={() => { searchSE(input.value) }}> search </button>
      </div>
    )
  }
}*/}

SearchSE = connect()(SearchSE)

export default SearchSE
