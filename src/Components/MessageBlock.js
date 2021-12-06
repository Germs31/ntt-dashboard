import React from 'react'
import Chip from './Chip'
import Message from './Message'
const MessageBlock = ({user}) => {
    return (
        <div className="message-block">
            <div className="message-header">
                <div className="user-info">
                    <div className="profile-img">
                        <img src={user.profileImg} alt="user profile img" style={{background: user.imgBgColor}}/>
                    </div>
                    <div className="user">
                        <div className="name">{user.fullName}</div>
                        <div className="last-active">{user.active}</div>
                    </div>
                </div>
                <div className="tech">
                    <Chip value={user.techtype} />
                </div>
            </div>
            {
                user.messages.map((msg,i) => {
                    return (
                        <Message key={i} msg={msg.msg} />
                    )
                })
            }

            <div className="pay-out">
                {
                    user.crypto.reverse().map((c,i) => {
                        return (
                            <div key={i} className="chip-container">
                                <Chip value={c} />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MessageBlock
