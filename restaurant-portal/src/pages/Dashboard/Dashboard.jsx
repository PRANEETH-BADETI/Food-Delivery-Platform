import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import DashboardStats from '../../components/DashboardStats/DashboardStats'
import DashboardPanels from '../../components/DashboardPanels/DashboardPanels'
import './Dashboard.css'

const Dashboard = ({ formData }) => {
  const navigate = useNavigate()

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <span className="pill pill--soft">Restaurant dashboard</span>
          <h2>{formData.restaurantName || 'Tomato Partner Kitchen'}</h2>
          <p>
            Live operations center for active orders, nearby drivers, and menu control. Built with the same clean
            card system as the customer experience.
          </p>
        </div>
        <div className="dashboard-header__actions">
          <button className="secondary-button" type="button" onClick={() => navigate('/register')}>
            Edit onboarding
          </button>
          <button className="primary-button" type="button">
            Go live
            <FiArrowRight />
          </button>
        </div>
      </div>

      <DashboardStats />
      <DashboardPanels />
    </main>
  )
}

export default Dashboard
