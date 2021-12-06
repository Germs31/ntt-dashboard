import React from 'react'

const Chip = ({value}) => {
    return (
        <div className={value.eth ? 'chip eth' : value.btc ? "chip btc" : "chip"}>
            <div>{value.tech ? value.tech : value.eth ? value.eth : value.btc}</div>
        </div>
    )
}

export default Chip