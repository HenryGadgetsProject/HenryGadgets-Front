import React from 'react'
import Main from '../../Components/Atoms/Main'
import EditOrderForm from '../../Components/Organisms/EditOrderForm'

const AdminOrderEdit = ({ orderId }) => {
    return (
        <div className="container">
            <Main id="main">
                <EditOrderForm orderId={orderId}/>
            </Main>
        </div>
    )
}

export default AdminOrderEdit