import React from 'react'

import ChessReportCard from '../../chess-report-card/chess-report-card'

interface SettingsProps {
  img: string
}
function Settings({ img }: SettingsProps) {
  return (
    <div>
      {img}
      <ChessReportCard />
    </div>
  )
}

export default Settings
