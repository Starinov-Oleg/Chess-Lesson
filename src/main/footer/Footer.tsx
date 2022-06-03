import React from 'react'
import styled from 'styled-components'
import img from '../../assets/footer/footer.jpg'
const StyledFooter = styled.div`
  background-color: #122f05;
  // background-image: url(${img});
  // background-position: center;
  // background-size: cover;
  // background-repeat: no-repeat;
  position: sticky;
  color: white;
`
function Footer() {
  return (
    <footer className='footer'>
      <StyledFooter className='text-center p-3'>© {new Date().getFullYear()} ChessLand</StyledFooter>
    </footer>
  )
}
export default Footer
