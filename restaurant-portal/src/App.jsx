import { Route, Routes, Navigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import GetStarted from './pages/GetStarted/GetStarted'
import Registration from './pages/Registration/Registration'
import Dashboard from './pages/Dashboard/Dashboard'
import { initialForm, registeredPartnerIdentifiers, registeredPartnerProfiles, stepFields } from './data/portalData'
import './App.css'

const normalizeIdentifier = (value) => value.trim().toLowerCase()

const App = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialForm)
  const [partnerStatus, setPartnerStatus] = useState({ isRegistered: false, identifier: '' })

  const completedSteps = useMemo(() => currentStep - 1, [currentStep])

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const updateFormData = (updates) => {
    setFormData((current) => ({ ...current, ...updates }))
  }

  const isStepValid = (step = currentStep) =>
    stepFields[step].every((field) => String(formData[field]).trim())

  const handleAccessContinue = () => {
    const normalizedIdentifier = normalizeIdentifier(formData.accessIdentifier)

    if (!normalizedIdentifier) {
      return 'stay'
    }

    if (registeredPartnerIdentifiers.includes(normalizedIdentifier)) {
      setFormData((current) => ({
        ...current,
        accessIdentifier: formData.accessIdentifier,
        ...registeredPartnerProfiles[normalizedIdentifier],
      }))
      setPartnerStatus({ isRegistered: true, identifier: normalizedIdentifier })
      return 'dashboard'
    }

    setCurrentStep(1)
    setPartnerStatus({ isRegistered: false, identifier: normalizedIdentifier })
    if (normalizedIdentifier.includes('@')) {
      updateFormData({
        ownerEmail: formData.ownerEmail || formData.accessIdentifier,
      })
    }
    return 'register'
  }

  const completeRegistration = () => {
    const fallbackIdentifier = normalizeIdentifier(formData.ownerEmail || formData.accessIdentifier || formData.contactNumber)
    setPartnerStatus({ isRegistered: true, identifier: fallbackIdentifier })
  }

  return (
    <div className="app-shell">
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <GetStarted
                formData={formData}
                onFieldChange={handleFieldChange}
                onContinue={handleAccessContinue}
              />
            }
          />
          <Route
            path="/register"
            element={
              partnerStatus.isRegistered ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Registration
                  currentStep={currentStep}
                  completedSteps={completedSteps}
                  formData={formData}
                  isStepValid={isStepValid}
                  onFieldChange={handleFieldChange}
                  onUpdateFormData={updateFormData}
                  onNextStep={() => setCurrentStep((step) => Math.min(3, step + 1))}
                  onPreviousStep={() => setCurrentStep((step) => Math.max(1, step - 1))}
                  onCompleteRegistration={completeRegistration}
                />
              )
            }
          />
          <Route
            path="/dashboard"
            element={partnerStatus.isRegistered ? <Dashboard formData={formData} /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
