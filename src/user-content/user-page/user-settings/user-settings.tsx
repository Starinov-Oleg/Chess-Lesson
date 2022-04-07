import settings from './user-settings.module.css'
import ChessReportCard from '../../chess-report-card/chess-report-card'
import React from 'react'

interface SettingsProps {
  img: string
}
function Settings({ img }: SettingsProps) {
  return (
    <div className={settings.settings}>
      {img}
      <ChessReportCard />
    </div>
  )
}

export default Settings
