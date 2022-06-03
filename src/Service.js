import React from 'react'
import Cardcomp from './Cardcomp'
import Sdata from './Sdata'
function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className="row gy-5">

                            {
                                Sdata.map((val, ind) => {
                                    return <Cardcomp
                                        imagesrc={val.imagesrc}
                                        title={val.title}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Service