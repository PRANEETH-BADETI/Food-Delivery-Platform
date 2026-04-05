import { useNavigate } from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './Registration.css'

const Registration = ({
  currentStep,
  completedSteps,
  formData,
  isStepValid,
  onFieldChange,
  onUpdateFormData,
  onNextStep,
  onPreviousStep,
}) => {
  const navigate = useNavigate()

  const handleComplete = () => {
    if (!isStepValid()) {
      return
    }

    navigate('/dashboard')
  }

  return (
    <main className="registration-page">
      <RegistrationForm
        currentStep={currentStep}
        completedSteps={completedSteps}
        formData={formData}
        isStepValid={isStepValid}
        onFieldChange={onFieldChange}
        onUpdateFormData={onUpdateFormData}
        onNextStep={onNextStep}
        onPreviousStep={onPreviousStep}
        onComplete={handleComplete}
      />
    </main>
  )
}

export default Registration
