import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './HeroBanner.css'

const HeroBanner = ({ restaurantName, showDashboardAction = true }) => {
  const navigate = useNavigate()

  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="pill pill--light">Restaurant partner workspace</span>
        <h1>Launch your restaurant dashboard with the same Tomato feel.</h1>
        <p>
          A frontend-first onboarding and operations console for restaurant owners, built to match the customer
          portal with the same bright palette, soft cards, and clean spacing.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={() => navigate('/register')}>
            Start restaurant setup
            <FiArrowRight />
          </button>
          {showDashboardAction && (
            <button className="secondary-button hero-secondary" type="button" onClick={() => navigate('/dashboard')}>
              View live dashboard
            </button>
          )}
        </div>

        <div className="hero-meta">
          <div>
            <strong>3-step onboarding</strong>
            <span>Owner info, documents, and menu setup.</span>
          </div>
          <div>
            <strong>Live operations center</strong>
            <span>Orders, drivers, and health signals in one place.</span>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__window">
          <div className="hero-panel__top">
            <span className="pill">Go live in 20 mins</span>
            <span className="mini-status">Payments healthy</span>
          </div>

          <div className="hero-panel__stats">
            <article>
              <span>Orders in queue</span>
              <strong>28</strong>
              <small>7 new in the last 15 min</small>
            </article>
            <article>
              <span>Menu sync</span>
              <strong>94%</strong>
              <small>2 items need stock refresh</small>
            </article>
          </div>

          <div className="hero-panel__activity">
            <div>
              <p>Current focus</p>
              <strong>{restaurantName || 'Your restaurant onboarding'}</strong>
            </div>
            <div>
              <p>Suggested next action</p>
              <strong>Complete partner registration</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
