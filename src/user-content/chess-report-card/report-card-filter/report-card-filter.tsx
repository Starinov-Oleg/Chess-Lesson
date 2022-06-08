import * as React from 'react'

import Label from '../../../ui-library/label/label'

function ReportCardFilter() {
  const padding = { paddingRight: '1rem', paddingLeft: '1rem' }
  return (
    <div className='container'>
      <form>
        <input type='checkbox' id='lesson' name='lesson' value='Lessons(Complited)' />
        <Label message='Lessons(Complited)' htmlFor='lesson' style={padding} />

        <input type='checkbox' id='article' name='article' value='Articles' />
        <Label message='Article' htmlFor='article' style={padding} />

        <input type='checkbox' id='video' name='video' value='Videos' />
        <Label message='Videos' htmlFor='video' style={padding} />

        <input type='checkbox' id='workout' name='workout' value='Workouts' style={padding} />
        <Label message='Workouts' htmlFor='workout' />
      </form>
    </div>
  )
}

export default ReportCardFilter

/**TODO make array for element, style checkbox */
