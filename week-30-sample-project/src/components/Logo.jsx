import { Link } from 'react-router-dom';
import './Logo.css';

export function DefaultLogo() {
    return (
        <Link className="logo" to="/">
            <span>Skyline BlogPost</span>
        </Link>
    );
}
