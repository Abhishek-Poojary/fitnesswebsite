
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { getUserDetails } from "../../actions/UserAction";


const ProtectedRoute = ({ adminRoute, children }) => {

    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.login);
    const {loading,userRole}=useSelector((state)=>state.user);
    useEffect(() => {
        dispatch(getUserDetails(user))
    }, [])
    return (
        <Fragment>
            {loading === false && (isAuthenticated === false || !isAuthenticated) ?
                (
                    <Navigate to="/login" replace />
                )
                :
                (loading === false && 
                    (adminRoute === true ?
                        (userRole !== 'admin' ?
                            (
                                <Navigate to="/" replace />
                            )
                            :
                            (
                                children
                            )
                        )
                        :
                        (children)

                    )
                )
            }
        </Fragment>
    )
}

export default ProtectedRoute;