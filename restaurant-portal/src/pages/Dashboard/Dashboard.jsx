import { FiClock, FiHelpCircle, FiPauseCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import DashboardStats from '../../components/DashboardStats/DashboardStats'
import DashboardPanels from '../../components/DashboardPanels/DashboardPanels'
import './Dashboard.css'

const Dashboard = ({ formData }) => {
  const navigate = useNavigate()

  return (
    <main className="dashboard-page">
      <div className="dashboard-topbar">
        <div>
          <p className="dashboard-brand">Tomato. Partner Console</p>
          <span>{formData.location || 'Set your live location during onboarding'}</span>
        </div>
        <button className="secondary-button dashboard-help" type="button">
          <FiHelpCircle />
          Help
        </button>
      </div>

      <div className="dashboard-header">
        <div>
          <span className="pill pill--soft">Restaurant dashboard</span>
          <h2>{formData.restaurantName || 'Tomato Partner Kitchen'}</h2>
          <p>
            Keep track of live orders, kitchen performance, driver availability, and menu updates from one owner
            workspace.
          </p>
        </div>
        <div className="dashboard-header__actions">
          <button className="secondary-button" type="button">
            <FiPauseCircle />
            Pause orders
          </button>
          <button className="primary-button" type="button" onClick={() => navigate('/register')}>
            <FiClock />
            Update restaurant details
          </button>
        </div>
      </div>

      <section className="dashboard-summary">
        <article>
          <span>Owner</span>
          <strong>{formData.ownerName || 'Restaurant owner'}</strong>
        </article>
        <article>
          <span>Operating hours</span>
          <strong>{formData.openingTime && formData.closingTime ? `${formData.openingTime} - ${formData.closingTime}` : 'Add service hours'}</strong>
        </article>
        <article>
          <span>Food type</span>
          <strong>{formData.foodType || 'Not set yet'}</strong>
        </article>
        <article>
          <span>Cuisines</span>
          <strong>{formData.cuisines || 'Add cuisine tags'}</strong>
        </article>
      </section>

      <DashboardStats />
      <DashboardPanels />
    </main>
  )
}

export default Dashboard
