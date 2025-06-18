import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <>
            <div className="navBar">
                <Link to ="home">Home</Link>
                <Link to ="shop">Shop</Link>
            </div>
        </>
    )
}