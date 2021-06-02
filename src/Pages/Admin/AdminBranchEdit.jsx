import React from 'react'
import Main from '../../Components/Atoms/Main'
import EditBranchForm from '../../Components/Organisms/EditBranchForm'

const AdminBranchEdit = ({ branchId }) => {
    return (
        <div className="container">
            <Main id="main">
                <EditBranchForm branchId={branchId} />
            </Main>
        </div>
    )
}

export default AdminBranchEdit
