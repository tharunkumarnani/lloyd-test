import {Component} from 'react'
import MyMoveTab from '../MyMoveTab'
import Tabs from '../Tabs'
import './index.css'

const leftTabsList = [
  {id: 1, tabName: 'My Moves', path: 'my-moves'},
  {id: 2, tabName: 'My Profile', path: 'my-moves'},
  {id: 3, tabName: 'GetQuote', path: 'my-moves'},
]

class MyMoves extends Component {
  state = {activeTab: leftTabsList[0].id}

  updateActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="home-cont">
        <div className="left-cont">
          <ul className="tabs-items">
            {leftTabsList.map(each => (
              <Tabs
                key={each.id}
                activeTab={activeTab}
                tabDetails={each}
                updateActiveTab={this.updateActiveTab}
              />
            ))}
          </ul>
          <a
            rel="noreferrer"
            className="foot-contact"
            href="https://www.lloydsbank.com/"
          >
            Contact Us
          </a>
        </div>
        <div className="right-cont">
          <MyMoveTab />
        </div>
      </div>
    )
  }
}

export default MyMoves
