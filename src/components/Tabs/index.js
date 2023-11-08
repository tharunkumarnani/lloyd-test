import {Link} from 'react-router-dom'
import './index.css'

const Tabs = props => {
  const {tabDetails, activeTab, updateActiveTab} = props
  const {id, tabName, path} = tabDetails
  const activeTabStyle = id === activeTab ? 'active-tab' : ''
  const requestTab = () => {
    updateActiveTab(id)
  }
  return (
    <li className={`tab-item ${activeTabStyle}`} onClick={requestTab}>
      <Link to={`/${path}`}>{tabName}</Link>
    </li>
  )
}

export default Tabs
