import { FiArrowRight, FiHash, FiHelpCircle } from 'react-icons/fi'
import './GetStartedCard.css'

const GetStartedCard = ({ identifier, onFieldChange, onContinue }) => {
  return (
    <article className="get-started-card">
      <button className="help-button" type="button">
        <FiHelpCircle />
        Help
      </button>
      <h2>Get Started</h2>
      <p className="section-copy">
        Enter a mobile number, restaurant ID, or owner email to continue. Registered partners go straight to
        their dashboard.
      </p>
      <div className="input-group">
        <label htmlFor="accessIdentifier">Restaurant ID / Mobile number / Email</label>
        <div className="input-with-icon">
          <FiHash />
          <input
            id="accessIdentifier"
            name="accessIdentifier"
            type="text"
            placeholder="Enter restaurant ID / mobile number"
            value={identifier}
            onChange={onFieldChange}
          />
        </div>
      </div>

      <button
        className="primary-button primary-button--full"
        type="button"
        onClick={onContinue}
        disabled={!identifier.trim()}
      >
        Continue
        <FiArrowRight />
      </button>

      <p className="helper-copy">Try demo partner IDs: resto-101, 9876543210, or partner@tomato.com.</p>
    </article>
  )
}

export default GetStartedCard
