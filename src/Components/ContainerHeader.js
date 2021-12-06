import React from 'react'

const ContainerHeader = ({title, action}) => {
    return (
        <div className="container-header">
            <span className="title">{title}</span>
            <span className="action">{action}</span>
        </div>
    )
}

export default ContainerHeader
