import { useNavigate } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import GetStartedCard from '../../components/GetStartedCard/GetStartedCard'
import './GetStarted.css'

const GetStarted = ({ formData, onFieldChange, onContinue }) => {
  const navigate = useNavigate()

  const handlePortalEntry = () => {
    const destination = onContinue()
    if (destination === 'register') {
      navigate('/register')
    }
    if (destination === 'dashboard') {
      navigate('/dashboard')
    }
  }

  return (
    <main className="get-started-page">
      <section className="portal-entry">
        <HeroBanner />
        <div className="portal-entry__card">
          <GetStartedCard
            identifier={formData.accessIdentifier}
            onFieldChange={onFieldChange}
            onContinue={handlePortalEntry}
          />
        </div>
      </section>
    </main>
  )
}

export default GetStarted
