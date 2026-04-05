import { overviewStats } from '../../data/portalData'
import './DashboardStats.css'

const DashboardStats = () => {
  return (
    <section className="stats-grid">
      {overviewStats.map((stat) => {
        const Icon = stat.icon

        return (
          <article className="stat-card" key={stat.label}>
            <div className="stat-card__icon">
              <Icon />
            </div>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.detail}</small>
          </article>
        )
      })}
    </section>
  )
}

export default DashboardStats
