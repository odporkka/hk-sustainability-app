import React, { useEffect } from 'react'


const ProductPage = (props) => {
    const id = props.match.params.id

    useEffect(() => {
        console.log('Showing page for', id)
    }, [id])

    return (
        <div>
            <p>Product view</p>
            <p>Id: {id}</p>
        </div>
    )
}

export default ProductPage