import passport from './passport-block.module.css'

function Passport({ location, contact, position }) {
  return (
    <section>
      <div className={passport.passport}>
        <h5>Location:{location}</h5>
        <h5>Contact: {contact}</h5>
        <h5>Position: {position}</h5>
      </div>
    </section>
  )
}
export default Passport
