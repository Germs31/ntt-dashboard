import React from 'react'
import Chip from './Chip.js'

const Activity = ({name, img, active, subMsg, paid, crypto, imgBgColor}) => {
    return (
        <div className="activity">
            <div className="activity-body">
                <div className="profile-img">
                    <img src={img} alt="user profile img" style={{background: imgBgColor}}/>
                </div>
                <div className="user-info">
                    <div className="name">{name}</div>
                    <div className="submsg">{subMsg}</div>
                    <div className="pay-out">
                        <div className="crypto">
                            <Chip value={crypto[0]} />
                        </div>
                        <div className="price-paid">
                            <span className="currency-symbol">$</span>
                            {paid}
                        </div>
                    </div>
                </div>
            </div>
            <div className="last-active">
                {active}
            </div>
        </div>
    )
}

export default Activity