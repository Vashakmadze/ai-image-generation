import React from 'react'
import Card from './Card'

const RenderCards = ({data, title}) => {
    if(data?.length > 0) return data.map((image) => <Card key={post.id} {...post} />)

    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}

export default RenderCards