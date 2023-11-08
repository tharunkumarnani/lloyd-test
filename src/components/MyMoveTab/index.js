import {Component} from 'react'
import MovingItem from '../MovingItem'
import './index.css'

class MyMoveTab extends Component {
  state = {movingList: []}

  componentDidMount() {
    this.getMovingDetails()
  }

  getMovingDetails = async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const customerEstimateFlow = data.customer_estimate_flow
      const updateDetails = customerEstimateFlow.map(each => ({
        estimateId: each.estimate_id,
        movingFrom: each.moving_from,
        movingTo: each.moving_to,
        propertySize: each.property_size,
        distance: each.distance,
        movingOn: each.moving_on,
      }))
      this.setState({movingList: updateDetails})
    }
  }

  render() {
    const {movingList} = this.state
    return (
      <div className="moving-item-cont">
        <h1 className="heading">My Moves</h1>
        <ul className="moving-item-list">
          {movingList.map(each => (
            <MovingItem key={each.estimateId} movingDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MyMoveTab
