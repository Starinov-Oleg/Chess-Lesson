import picture from '../../assets/pages/chess-play/user.png'
import Couch from './couch'
import CardSocial from '../../ui-library/card-social/card-social'
function CouchContainerView(props) {
  //const pageCount = Math.ceil(props.users.totalUserCount / props.users.pageSize) // for count friends on page
  // const pages=[];
  /**
   * for (const i=1; i<=pageCount; i++){
   *  pages.push(i);
   * }
   */

  const couchItems = props.users.map(user => (
    <>
      {user.position === 'Couch' ? (
        <div className='col-md-3 col-12 ' key={user.id}>
          <CardSocial
            fullname={user.fullname}
            message1='-'
            followed={user.followed}
            message2='+'
            alt='picture'
            showbutton
            src={user.picture != null ? user.picture : picture}
            onClick1={() => {
              props.unfollow(user.id)
            }}
            onClick2={() => {
              props.follow(user.id)
            }}
          />
        </div>
      ) : null}
    </>
  ))
  return <Couch couchItems={couchItems} />
}
export default CouchContainerView

/**TODO guard for friedns and couches, add component for it */
