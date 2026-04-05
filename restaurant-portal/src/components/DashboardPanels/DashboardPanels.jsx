import { FiActivity, FiTruck } from 'react-icons/fi'
import { activeOrders, driverFleet, menuHighlights } from '../../data/portalData'
import './DashboardPanels.css'

const DashboardPanels = () => {
  return (
    <section className="dashboard-grid">
      <article className="panel panel--orders">
        <div className="panel__header">
          <div>
            <span className="pill">Live operations center</span>
            <h3>Active orders</h3>
          </div>
          <button className="text-button" type="button">
            Refresh queue
          </button>
        </div>

        <div className="table-list">
          {activeOrders.map((order) => (
            <div className="table-row" key={order.id}>
              <div>
                <strong>{order.id}</strong>
                <span>{order.customer}</span>
              </div>
              <div>
                <strong>{order.items}</strong>
                <span>{order.status}</span>
              </div>
              <div>
                <strong>{order.eta}</strong>
                <span>ETA</span>
              </div>
              <div>
                <strong>{order.amount}</strong>
                <span>Bill value</span>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="panel">
        <div className="panel__header">
          <div>
            <span className="pill pill--soft">Dispatch visibility</span>
            <h3>Available drivers</h3>
          </div>
          <FiTruck className="panel__header-icon" />
        </div>

        <div className="driver-list">
          {driverFleet.map((driver) => (
            <div className="driver-card" key={driver.name}>
              <div>
                <strong>{driver.name}</strong>
                <span>{driver.zone}</span>
              </div>
              <div>
                <strong>{driver.state}</strong>
                <span>{driver.trips} trips today</span>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="panel">
        <div className="panel__header">
          <div>
            <span className="pill pill--soft">System health</span>
            <h3>Operational readiness</h3>
          </div>
          <FiActivity className="panel__header-icon" />
        </div>

        <div className="health-stack">
          <div className="health-item">
            <span>POS sync</span>
            <strong>Stable</strong>
          </div>
          <div className="health-item">
            <span>Payment settlement</span>
            <strong>On track</strong>
          </div>
          <div className="health-item">
            <span>Kitchen load</span>
            <strong>Moderate</strong>
          </div>
          <div className="health-item">
            <span>Last outage</span>
            <strong>None today</strong>
          </div>
        </div>
      </article>

      <article className="panel panel--menu">
        <div className="panel__header">
          <div>
            <span className="pill">Menu management</span>
            <h3>Inventory and pricing</h3>
          </div>
          <button className="text-button" type="button">
            Add new item
          </button>
        </div>

        <div className="menu-list">
          {menuHighlights.map((item) => (
            <div className="menu-row" key={item.item}>
              <div>
                <strong>{item.item}</strong>
                <span>{item.stock}</span>
              </div>
              <div>
                <strong>{item.price}</strong>
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default DashboardPanels
