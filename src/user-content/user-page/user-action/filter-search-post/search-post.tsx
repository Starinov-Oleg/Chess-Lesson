import * as React from 'react'

interface SearchPostProps {
  onChange?: any
  value?: any
}
function SearchPost({ onChange, value }: SearchPostProps) {
  return (
    <div className='d-flex'>
      <input className='form-control' placeholder='Search Post' aria-label='Search' onChange={onChange} />
    </div>
  )
}
export default SearchPost
