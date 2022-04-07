import React from 'react'
import programmexampleitem from './programm-example-item.module.css'
import H3 from '../../../ui-library/h3/h3'
import '../../../common/vars-css.css'

interface ProgrammExampleItemProps {
  messagetitle: string
  messagebody: string
  messagenote?: string
}
function ProgrammExampleItem({ messagetitle, messagebody, messagenote }: ProgrammExampleItemProps) {
  const style = {
    color: 'var(--global-var-color-orange)',
    textAlign: 'var(--global-var-align-left)',
    fontSize: 'var(--global-var-font-size-1rem)',
    padding: '1rem',
  }
  const notification = {
    color: 'var(--global-var-color-note)',
    fontSize: 'var(--global-var-font-size-1rem)',
  }
  return (
    <>
      <div className={programmexampleitem.programmexampleitem}>
        <div className={programmexampleitem.flex_item1}>
          <img src='/' alt='title programm block' />
        </div>
        <div className={programmexampleitem.flex_item2}>
          <H3 message={messagetitle} style={style} />
          {!messagenote ? null : <H3 message={messagenote} style={notification} />}
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
