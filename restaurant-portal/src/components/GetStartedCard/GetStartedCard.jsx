import { FiArrowRight, FiMail } from 'react-icons/fi'
import './GetStartedCard.css'

const GetStartedCard = ({ email, onFieldChange, onContinue }) => {
  return (
    <article className="setup-card">
      <div className="section-heading">
        <span className="pill">Get started</span>
        <h2>Restaurant owner access</h2>
      </div>
      <p className="section-copy">
        We are skipping OTP wiring for now. Enter the owner email, continue directly, and we will hook up
        verification during backend integration.
      </p>

      <div className="input-group">
        <label htmlFor="email">Owner email ID</label>
        <div className="input-with-icon">
          <FiMail />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="owner@restaurant.com"
            value={email}
            onChange={onFieldChange}
          />
        </div>
      </div>

      <button className="primary-button primary-button--full" type="button" onClick={onContinue} disabled={!email.trim()}>
        Continue to registration
        <FiArrowRight />
      </button>

      <div className="helper-strip">
        <span>OTP to be integrated later</span>
        <strong>Frontend flow ready</strong>
      </div>
    </article>
  )
}

export default GetStartedCard
