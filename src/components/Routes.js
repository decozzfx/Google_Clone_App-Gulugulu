import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import Result from './Result'

const Routes = () => {
    return (
        <div className='p-4' > 
            <Switch>
                <Route  path="/search" element={<Result />} />
                {/* <Route  Path=""  element={() => <Navigate to="/search" />} /> */}
                <Route  path="/images" element={<Result />} />
                <Route  path="/news" element={<Result />} />
                <Route  path="/videos" element={<Result />} />
            </Switch>
        </div>
    )
}

export default Routes
