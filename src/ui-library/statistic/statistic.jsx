import statistic from './statistic.module.css'
import Button from '../../ui-library/button-link/button-link'
function Statistic(props) {
  return (
    <div className={statistic.statistic}>
      <p className={statistic.font}>
        Name:
        <span className={statistic.font}>{props.name}</span>
      </p>
      <p className={`${statistic.user_victories} ${statistic.font}`}>
        Victories:
        <span className={statistic.user_victories_caunt}>100</span>
      </p>
      <p className={`${statistic.user_best} ${statistic.font}`}>
        Best Victories <Button message='WATCH' href='/pages/chesslandcoaches' />
      </p>
    </div>
  )
}

export default Statistic
/**TODO  Make Lose and display only on user page not for rival */
