import React from 'react'
import styled from 'styled-components'

import LinkText from '../../../ui-library/link-text/link-text'

interface BanerCardItemProps {
  headertext: string
  bodytext: string
  message: string
  href: string
  style?: Object
  src: any
  alt: string
}
const StyledBanerItemCardPosition = styled.div`
  position: relative;
`
const StyledBanerItemCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 2rem var(--global-var-color-note);
  font-family: var(--global-var-font-mocha);
  background-color: var(--global-var-color-white);
  position: absolute;
  &:hover,
  &:active {
    border: 1px solid var(--global-var-color-blue);
    box-shadow: -2rem 0 3rem -2rem var(--global-var-color-blue);
    transform: rotate(-15deg);
  }
  @media screen and (max-width: 1399px) {
    position: static;
    &:hover,
    &:active {
      transform: none;
    }
  }
`
const StyledImgPosition = styled.div`
  position: relative;
  height: 5.5rem;
  padding: 10px;
`
const StyledImg = styled.img`
  width: 15%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`
const StyledHeader = styled.div`
  color: var(--global-var-color-orange);
`
function BanerItemCard({ headertext, bodytext, message, href, src, alt }: BanerCardItemProps) {
  return (
    <StyledBanerItemCardPosition>
      <StyledBanerItemCard>
        <StyledImgPosition>
          <StyledImg src={src} alt={alt} />
        </StyledImgPosition>
        <StyledHeader>{headertext}</StyledHeader>
        <div>{bodytext}</div>
        <div>
          <LinkText message={message} href={href} />
        </div>
      </StyledBanerItemCard>
    </StyledBanerItemCardPosition>
  )
}

export default BanerItemCard
