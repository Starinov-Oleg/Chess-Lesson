import * as React from 'react'
import filter from './report-card-filter.module.css'
import Label from '../../../ui-library/label/label'
import '../../../common/vars-css.css'
function ReportCardFilter() {
  const label_style_checkbox = {
    fontSize: '1rem',
    color: 'var(--global-var-color-grey)',
    padding: 'var(--global-var-font-size-1rem)',
  }
  return (
    <div className={filter.filter}>
      <form>
        <input type='checkbox' id='lesson' name='lesson' value='Lessons(Complited)' />
        <Label message='Lessons(Complited)' htmlFor='lesson' style={label_style_checkbox} />
        <input type='checkbox' id='article' name='article' value='Articles' />
        <Label message='Article' htmlFor='article' style={label_style_checkbox} />
        <input type='checkbox' id='video' name='video' value='Videos' />
        <Label message='Videos' htmlFor='video' style={label_style_checkbox} />
        <input type='checkbox' id='workout' name='workout' value='Workouts' />
        <Label message='Workouts' htmlFor='workout' style={label_style_checkbox} />
      </form>
    </div>
  )
}

export default ReportCardFilter
