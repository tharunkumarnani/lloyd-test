import {BiRightArrowCircle} from 'react-icons/bi'
import {AiFillHome, AiFillCalendar} from 'react-icons/ai'
import {GrMapLocation, GrEdit} from 'react-icons/gr'
import {CgDanger} from 'react-icons/cg'
import './index.css'

const MovingItem = props => {
  const {movingDetails} = props
  const {
    estimateId,
    movingFrom,
    movingTo,
    movingOn,
    propertySize,
    distance,
  } = movingDetails
  return (
    <li className="moving-item">
      <div className="from-to-id">
        <div className="place-cont">
          <h2 className="heading">From</h2>
          <p className="place">{movingFrom}</p>
        </div>
        <BiRightArrowCircle className="icon" />
        <div className="place-cont">
          <h2 className="heading">To</h2>
          <p className="place">{movingTo}</p>
        </div>
        <div className="esti-id">
          <h2 className="heading">Request#</h2>
          <p className="estid">{estimateId}</p>
        </div>
      </div>
      <div className="home-dist-date">
        <div className="icon-value">
          <AiFillHome className="icon2" />
          <p className="value">{propertySize}</p>
        </div>
        <div className="icon-value">
          <GrMapLocation className="icon2" />
          <p className="value">{distance}</p>
        </div>
        <div className="icon-value">
          <AiFillCalendar className="icon2" />
          <p className="value">{movingOn}</p>
          <GrEdit className="icon2" />
        </div>
        <div className="icon-value">
          <GrEdit className="icon2" />
          <p className="value">Edit</p>
        </div>
        <div className="btns">
          <button type="button" className="view">
            View Move Details
          </button>
          <button type="button" className="quotes">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <div className="dis-claim">
        <CgDanger className="dis-claim-icon" />
        <p className="dis">
          <span className="sp-an">Disclaimer:</span>Please update your move date
          before two days of shifting
        </p>
      </div>
      <hr className="line-separator" />
    </li>
  )
}

export default MovingItem
