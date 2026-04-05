import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiMapPin,
  FiPhone,
  FiStar,
  FiUpload,
} from 'react-icons/fi'
import { registrationSteps } from '../../data/portalData'
import './RegistrationForm.css'

const RegistrationForm = ({
  currentStep,
  completedSteps,
  formData,
  isStepValid,
  onFieldChange,
  onUpdateFormData,
  onNextStep,
  onPreviousStep,
  onComplete,
}) => {
  return (
    <article className="registration-card">
      <div className="section-heading">
        <span className="pill pill--soft">Registration form</span>
        <h2>3-step onboarding for restaurant owners</h2>
      </div>

      <div className="stepper">
        {registrationSteps.map((step) => {
          const status = currentStep === step.id ? 'active' : completedSteps >= step.id ? 'complete' : 'upcoming'

          return (
            <div className={`stepper__item stepper__item--${status}`} key={step.id}>
              <div className="stepper__count">{status === 'complete' ? <FiCheck /> : step.id}</div>
              <div>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </div>
            </div>
          )
        })}
      </div>

      {currentStep === 1 && (
        <div className="form-layout">
          <div className="input-group">
            <label htmlFor="ownerName">Owner full name</label>
            <input id="ownerName" name="ownerName" value={formData.ownerName} onChange={onFieldChange} />
          </div>
          <div className="input-group">
            <label htmlFor="restaurantName">Restaurant name</label>
            <input id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={onFieldChange} />
          </div>
          <div className="input-group input-group--wide">
            <label htmlFor="location">Restaurant location</label>
            <div className="input-with-icon">
              <FiMapPin />
              <input id="location" name="location" value={formData.location} onChange={onFieldChange} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="ownerEmail">Owner mail ID</label>
            <input id="ownerEmail" name="ownerEmail" type="email" value={formData.ownerEmail} onChange={onFieldChange} />
          </div>
          <div className="input-group">
            <label htmlFor="contactNumber">Contact number</label>
            <div className="input-with-icon">
              <FiPhone />
              <input id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={onFieldChange} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="workingDays">Working days in a week</label>
            <div className="input-with-icon">
              <FiCalendar />
              <input
                id="workingDays"
                name="workingDays"
                placeholder="Mon-Sun or 6 days"
                value={formData.workingDays}
                onChange={onFieldChange}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="openingTime">Opening time</label>
            <input id="openingTime" name="openingTime" type="time" value={formData.openingTime} onChange={onFieldChange} />
          </div>
          <div className="input-group">
            <label htmlFor="closingTime">Closing time</label>
            <input id="closingTime" name="closingTime" type="time" value={formData.closingTime} onChange={onFieldChange} />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="form-layout">
          <div className="input-group">
            <label htmlFor="pan">PAN</label>
            <div className="input-with-icon">
              <FiFileText />
              <input id="pan" name="pan" value={formData.pan} onChange={onFieldChange} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="gst">GST</label>
            <input id="gst" name="gst" value={formData.gst} onChange={onFieldChange} />
          </div>
          <div className="input-group">
            <label htmlFor="bankIfsc">Bank IFSC</label>
            <div className="input-with-icon">
              <FiCreditCard />
              <input id="bankIfsc" name="bankIfsc" value={formData.bankIfsc} onChange={onFieldChange} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="bankAccount">Bank account number</label>
            <input id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={onFieldChange} />
          </div>
          <div className="input-group input-group--wide">
            <label htmlFor="fssaiFile">FSSAI certificate upload</label>
            <div className="upload-field">
              <FiUpload />
              <input
                id="fssaiFile"
                name="fssaiFile"
                placeholder="fssai-certificate.pdf"
                value={formData.fssaiFile}
                onChange={onFieldChange}
              />
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="form-layout">
          <div className="input-group input-group--wide">
            <label>Food type</label>
            <div className="segmented-control">
              {['Pure veg', 'Includes non-veg'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={formData.foodType === option ? 'is-active' : ''}
                  onClick={() => onUpdateFormData({ foodType: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="input-group input-group--wide">
            <label htmlFor="cuisines">Cuisines included</label>
            <div className="input-with-icon">
              <FiGrid />
              <input
                id="cuisines"
                name="cuisines"
                placeholder="North Indian, South Indian, Chinese"
                value={formData.cuisines}
                onChange={onFieldChange}
              />
            </div>
          </div>
          <div className="input-group input-group--wide">
            <label htmlFor="menuUpload">Menu upload</label>
            <div className="upload-field">
              <FiUpload />
              <input
                id="menuUpload"
                name="menuUpload"
                placeholder="starter-menu.xlsx"
                value={formData.menuUpload}
                onChange={onFieldChange}
              />
            </div>
          </div>
          <div className="note-card">
            <FiStar />
            <p>
              Tagging cuisines here will help keep the restaurant portal aligned with the discovery experience in
              the customer portal later.
            </p>
          </div>
        </div>
      )}

      <div className="form-actions">
        <button className="secondary-button" type="button" onClick={onPreviousStep} disabled={currentStep === 1}>
          Back
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={currentStep === 3 ? onComplete : onNextStep}
          disabled={!isStepValid()}
        >
          {currentStep === 3 ? 'Complete setup' : 'Save and continue'}
          <FiArrowRight />
        </button>
      </div>
    </article>
  )
}

export default RegistrationForm
