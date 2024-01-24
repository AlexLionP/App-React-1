import Button from '../Button/Button.jsx';
import './Navbar.css';

const Navbar = ({links}) => {
    return (
        <div className="nav-container">
            <div className="navbar">
                {
                    links.map(link => (
                        <Button key={link.id}{...link} />
                    ))
                }
            </div>
        </div>
    )
}
export default Navbar;