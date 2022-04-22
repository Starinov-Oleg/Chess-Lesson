import React from 'react'
import styled from 'styled-components'
import couchsay from '../../../assets/section-couch/couch-face.png'
import LanguagesContext from '../../../common/languages/language-context'

const StyledSectionCouch = styled.div`
  display: flex;
  font-size: var(--global-var-font-size-1rem);
  color: var(--global-var-color-white);
  border-radius: 10px;
  border: 1px solid var(--global-var-color-white);
  box-shadow: 0 0 2rem var(--global-var-color-note);
  text-align: var(--global-var-align-left);
  justify-content: space-between;
`
const StyledCouchBody = styled.div`
  padding: 2%;
  padding-top: 10%;
  width: 70%;
  font-family: var(--global-var-font-mocha);
`
const StyledCouchImgContainer = styled.div`
  padding: 1rem;
`
const StyledCouchFigure = styled.figure`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: inline-block;
  background-color: #bbb;
  position: relative;
`
const StyledCouchImg = styled.img`
  padding: var(--global-var-font-size-1rem);
  width: 100%;
`
const StyledCouchFigCaption = styled.figcaption`
  color: var(--global-var-color-note);
  font-family: var(--global-var-font-mocha);
`
function CouchSay() {
  const language = React.useContext(LanguagesContext)
  return (
    <StyledSectionCouch>
      <StyledCouchBody>
        <p>{language.couching_text.message}</p>
      </StyledCouchBody>
      <StyledCouchImgContainer>
        <StyledCouchFigure>
          <StyledCouchImg src={couchsay} alt='funny couch face here' />
          <StyledCouchFigCaption>Pham Dung </StyledCouchFigCaption>
        </StyledCouchFigure>
      </StyledCouchImgContainer>
    </StyledSectionCouch>
  )
}

export default CouchSay
