import * as React from 'react'
import Button from '../../../../ui-library/button-click/button'

function SearchPost() {
  return (
    <form className='d-flex'>
      <input className='form-control me-2' type='search' placeholder='Search Post' aria-label='Search' />
      <Button type='submit' message='Search' />
    </form>
  )
}
export default SearchPost
