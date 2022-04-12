import * as React from 'react'
import filter from './report-card-filter.module.css'
import Label from '../../../ui-library/label/label'
import { FontSize1rem } from '../../../common/styled-components/font-size.styled'
import { Padding } from '../../../common/styled-components/padding-margin.styled'
function ReportCardFilter() {
  return (
    <div className={filter.filter}>
      <form>
        <input type='checkbox' id='lesson' name='lesson' value='Lessons(Complited)' />
        <Padding>
          <FontSize1rem>
            <Label message='Lessons(Complited)' htmlFor='lesson' />
          </FontSize1rem>
        </Padding>
        <input type='checkbox' id='article' name='article' value='Articles' />
        <Padding>
          <FontSize1rem>
            <Label message='Article' htmlFor='article' />
          </FontSize1rem>
        </Padding>
        <input type='checkbox' id='video' name='video' value='Videos' />
        <Padding>
          <FontSize1rem>
            <Label message='Videos' htmlFor='video' />
          </FontSize1rem>
        </Padding>
        <input type='checkbox' id='workout' name='workout' value='Workouts' />
        <Padding>
          <FontSize1rem>
            <Label message='Workouts' htmlFor='workout' />
          </FontSize1rem>
        </Padding>
      </form>
    </div>
  )
}

export default ReportCardFilter

/**TODO make array for element, style checkbox */
