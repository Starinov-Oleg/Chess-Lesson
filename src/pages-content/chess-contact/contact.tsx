import H3 from '../../ui-library/h3/h3'
import H1 from '../../ui-library/h1/h1'
import styled from 'styled-components'
interface CardProps {
  cardItems?: any
  childFriends?: React.ReactNode
  childCouches?: React.ReactNode
}
const StyledHotLine = styled.div`
  box-shadow: 0 0 2rem var(--global-var-color-note);
  border: 10px;
  padding: 1rem;
  margin: 1rem;
`
const StyledIntroduceClub = styled.div`
  margin-bottom: 2rem;
`
const StyledClub = styled.div`
  min-height: 100vh;
`
const StyledChildPeopleBlock = styled.div`
  margin: 1rem;
`
function Contact({ cardItems, childFriends, childCouches }: CardProps) {
  return (
    <section className='contact'>
      <StyledClub>
        <StyledIntroduceClub>
          <H1 message='Introduce With Club' primary />
        </StyledIntroduceClub>
        <div className='row justify-content-center '>{cardItems}</div>
        <StyledHotLine>
          <H1 message='HOT LINE + 0923234243434' primary />
        </StyledHotLine>
        <div>
          <H3 message='Introduce With Coaches' primary />
          <StyledChildPeopleBlock>{childCouches}</StyledChildPeopleBlock>
          <H3 message='Your Friends' colorBlack primary />
          <StyledChildPeopleBlock>{childFriends}</StyledChildPeopleBlock>
        </div>
      </StyledClub>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
