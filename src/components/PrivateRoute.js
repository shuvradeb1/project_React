import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute