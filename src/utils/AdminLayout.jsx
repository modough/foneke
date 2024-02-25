import PropTypes from 'prop-types'
import { useSelector } from "react-redux"
import Login from "../pages/login/Login"
const AdminLayout = ({ children }) => {
    const { token } = useSelector((state) =>
        state.userReducer
    )
    if (!token) return <Login />
    if (token) return children
}
AdminLayout.propTypes = {
    children: PropTypes.object,
}
export default AdminLayout