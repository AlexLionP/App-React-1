import{Link} from 'react-router-dom';
const Button = (props) => {
    console.log(props);
    return (
        <Link to={props.href}>
            <button>{props.name}</button>
        </Link>
    )
}

Button.defaultProps = {
    name: "Hola",
    href: '/',
}
export default Button;