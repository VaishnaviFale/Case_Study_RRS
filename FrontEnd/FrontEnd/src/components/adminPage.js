import React from 'react'
import DeleteTrain from './DeleteTrain'
import CreateTrain from './CreateTrain'
import TrainList from './TrainList'
import AdminHead from './AdminHead'

function adminPage() {
    return (
        <div className="home">
               <AdminHead />
               <TrainList />
               
                
        </div>
    )
}

export default adminPage
