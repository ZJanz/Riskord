import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className="message">
            <div className="message__info">
                <h4>Zace<span className="message__timestamp">Timestamp</span></h4>
                <p>Message</p>
            </div>
        </div>
    )
}

export default Message
