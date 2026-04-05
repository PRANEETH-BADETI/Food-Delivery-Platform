import { FiHome, FiUsers } from 'react-icons/fi'
import './SupportBand.css'

const SupportBand = () => {
  return (
    <section className="support-band" id="support">
      <article>
        <FiUsers />
        <div>
          <strong>Owner support</strong>
          <span>Quick onboarding help and compliance checklist review.</span>
        </div>
      </article>
      <article>
        <FiHome />
        <div>
          <strong>Brand consistency</strong>
          <span>UI aligned with the customer portal so the full platform feels connected.</span>
        </div>
      </article>
    </section>
  )
}

export default SupportBand
