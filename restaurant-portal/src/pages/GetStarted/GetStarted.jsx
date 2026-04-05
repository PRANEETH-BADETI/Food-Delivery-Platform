import { useNavigate } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import GetStartedCard from '../../components/GetStartedCard/GetStartedCard'
import './GetStarted.css'

const GetStarted = ({ formData, onFieldChange, onSyncOwnerEmail }) => {
  const navigate = useNavigate()

  const handleContinue = () => {
    if (!formData.email.trim()) {
      return
    }

    onSyncOwnerEmail()
    navigate('/register')
  }

  return (
    <main className="get-started-page">
      <HeroBanner restaurantName={formData.restaurantName} />
      <section className="get-started-grid">
        <GetStartedCard email={formData.email} onFieldChange={onFieldChange} onContinue={handleContinue} />
      </section>
    </main>
  )
}

export default GetStarted
