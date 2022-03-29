import settings from './user-settings.module.css'

interface SettingsProps {
  img: string
}
function Settings({ img }: SettingsProps) {
  return <div className={settings.settings}>{img}</div>
}

export default Settings
