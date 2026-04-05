import { FiCheckCircle } from 'react-icons/fi'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="hero-eyebrow">PARTNER WITH TOMATO</span>
        <h1>Access restaurant tools, onboarding, and live operations in one place.</h1>
        <p>
          Built for restaurant owners to get onboarded fast, manage service hours, upload documents, and monitor
          active orders without borrowing customer-facing UI patterns that do not belong here.
        </p>
        <div className="hero-steps">
          <div>
            <span>In just 3 easy steps</span>
            <strong>Get your restaurant delivery-ready in 24 hrs</strong>
          </div>
          <ul>
            <li>
              <FiCheckCircle />
              Verify partner access
            </li>
            <li>
              <FiCheckCircle />
              Complete restaurant onboarding
            </li>
            <li>
              <FiCheckCircle />
              Start managing orders and menu
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
