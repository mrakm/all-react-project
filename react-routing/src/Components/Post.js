import React from 'react'
import {useParams} from 'react-router-dom';
export const Post = () => {
 const params= useParams()
    return (
        <div>
            Single post
            {params.id}
        </div>
    )
}
