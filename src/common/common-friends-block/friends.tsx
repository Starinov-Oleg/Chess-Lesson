//import contact from './contact.module.css'
import React from 'react'

interface FriendsProps {
  couchItems: Object
}
function Friends({ couchItems }: FriendsProps) {
  return <div className='row'>{couchItems}</div>
}
export default Friends

/**TODO guard for friedns and couches, add component for it */
