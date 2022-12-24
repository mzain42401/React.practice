import React from 'react'
import Data from './Data'
const Card = () => {
    return (
        <>

            {
                Data.map((element) => {
                    return (
                        <>
                            <h1>{element.name}</h1>
                            <p>{element.dis}</p>
                        </>

                    )
                })
            }



        </>
    )
}
export default Card