import React from 'react'
import programmexampleitem from './programm-example-item.module.css'
import H3 from '../../../ui-library/h3/h3'
import { FontSize1rem } from '../../../common/styled-components/font-size.styled'
import { Padding } from '../../../common/styled-components/padding-margin.styled'
interface ProgrammExampleItemProps {
  messagetitle: string
  messagebody: string
  messagenote?: string
}
function ProgrammExampleItem({ messagetitle, messagebody, messagenote }: ProgrammExampleItemProps) {
  return (
    <>
      <div className={programmexampleitem.programmexampleitem}>
        <div className={programmexampleitem.flex_item1}>
          <img src='/' alt='title programm block' />
        </div>
        <div className={programmexampleitem.flex_item2}>
          <Padding>
            <FontSize1rem>
              <H3 message={messagetitle} colorOrange textAlignLeft />
              {!messagenote ? null : <H3 message={messagenote} colorNote />}
            </FontSize1rem>
          </Padding>
        </div>
        <div className={programmexampleitem.flex_item3}>
          <p className={programmexampleitem.body}>{messagebody}</p>
        </div>
      </div>
      <hr className={programmexampleitem.betweenline} />
    </>
  )
}

export default ProgrammExampleItem
