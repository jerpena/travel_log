import Logo from '../images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='logo' />
            <span className='brand'>my travel journal.</span>
        </header>
    );
}

export default Header;