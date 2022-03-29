import statistic from './statistic-block.module.css'
import Button from '../../button-link/button-link'

interface StatisticProps {
  win?: number
  lose?: number
}
function Statistic({ win, lose }: StatisticProps) {
  return (
    <section>
      <div className={statistic.statistic}>
        <h5>Win: {win}</h5>
        <h5>Lose: {lose}</h5>
        <p className={`${statistic.user_victories} ${statistic.font}`}>
          Victories:
          <span className={statistic.user_victories_caunt}>100</span>
        </p>
        <p className={`${statistic.user_best} ${statistic.font}`}>
          Best Victories <Button message='WATCH' href='/pages/chesslandcoaches' />
        </p>
      </div>
    </section>
  )
}
export default Statistic
