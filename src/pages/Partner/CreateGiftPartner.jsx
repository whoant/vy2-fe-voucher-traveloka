import React from 'react'
import DataCreateGift from '../../components/CreateGift/DataCreateGift'

const CreateGiftPartner = () => {
    return (
        <div className="row">
            <div className='col-md-2'>

            </div>
            <div className="col-md-8">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">Tạo gift card</h3>
                    </div>
                    <DataCreateGift />
                </div>

            </div>
            <div className='col-md-2'>

            </div>
        </div>
    )
}

export default CreateGiftPartner