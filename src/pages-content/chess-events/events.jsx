import events from './events.module.css'

function Events() {
  return (
    <section className='events'>
      <div className={events.events}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className={events.item}>
              <h3 className={events.subtitle}>Title here</h3>
              <p>Here text</p>
              <span>10.12.2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Events
