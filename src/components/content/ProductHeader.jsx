import React from 'react'


const ProductHeader = (props) => {
    const {
        id
    } = props

    return (
        <div>
            <h3>This product is produced by farm {id} with love and care</h3>
        </div>
    )
}

export default ProductHeader