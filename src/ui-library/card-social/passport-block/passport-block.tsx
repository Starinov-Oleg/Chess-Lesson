import passport from './passport-block.module.css'

interface PassportProps {
  location?: string
  contact?: string
  position?: string
}
function Passport({ location, contact, position }: PassportProps) {
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
