import { Link, useParams } from "react-router-dom"
import './errorPage.css';
import HeaderFooterLayout from "../../utils/HeaderFooterLayout";


function ErrorPage() {
    const { name, id } = useParams()
    console.log(name, id)
    return (
        <HeaderFooterLayout>
            <div id="error-page">
                <h1>404</h1>
                <p className="error-message">Oups! That page doesn&apos;t exist.</p>
                <Link to='/'>
                    <p className="homepage">Return to Homepage</p>
                </Link>
            </div>
        </HeaderFooterLayout>
    )
}

export default ErrorPage