import { Route, Routes, Navigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import GetStarted from './pages/GetStarted/GetStarted'
import Registration from './pages/Registration/Registration'
import Dashboard from './pages/Dashboard/Dashboard'
import SupportBand from './components/SupportBand/SupportBand'
import { initialForm, stepFields } from './data/portalData'
import './App.css'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialForm)

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

  const syncOwnerEmailFromGetStarted = () => {
    updateFormData({
      ownerEmail: formData.ownerEmail || formData.email,
    })
  }

  return (
    <div className="app-shell">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <GetStarted
                formData={formData}
                onFieldChange={handleFieldChange}
                onSyncOwnerEmail={syncOwnerEmailFromGetStarted}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Registration
                currentStep={currentStep}
                completedSteps={completedSteps}
                formData={formData}
                isStepValid={isStepValid}
                onFieldChange={handleFieldChange}
                onUpdateFormData={updateFormData}
                onNextStep={() => setCurrentStep((step) => Math.min(3, step + 1))}
                onPreviousStep={() => setCurrentStep((step) => Math.max(1, step - 1))}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard formData={formData} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SupportBand />
      </div>
    </div>
  )
}

export default App
