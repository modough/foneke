import PropTypes from 'prop-types'
import { useSelector } from "react-redux"
import Login from "../pages/login/Login"
import AdminHeader from "../components/adminHeader/AdminHeader.jsx"
const AdminLayout = ({ children }) => {
    const { token } = useSelector((state) =>
        state.userReducer
    )
    return (
        !token ?
            <Login /> :
            <>
                <AdminHeader />
                {children}
            </>
    )

}
AdminLayout.propTypes = {
    children: PropTypes.object,
}
export default AdminLayout