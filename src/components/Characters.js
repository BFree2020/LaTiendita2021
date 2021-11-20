import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minWidth:"200px"}}>
                            <img src={item.imagen} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <hr />
                            <p>precio:{item.precio}</p>
                        </div>
                        </div>
                    </div>
                ))

            }


        </div>


    )
}

export default Characters
