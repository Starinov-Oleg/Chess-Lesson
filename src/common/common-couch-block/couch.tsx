//import contact from './contact.module.css'
import React from 'react'

interface CouchProps {
  couchItems: Object
}
function Couch({ couchItems }: CouchProps) {
  return <div className='row'>{couchItems}</div>
}
export default Couch

/**TODO guard for friedns and couches, add component for it */
