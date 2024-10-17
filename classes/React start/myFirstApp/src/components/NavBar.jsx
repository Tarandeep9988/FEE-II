const NavBar = () => {
    const border = {
        border: "2px solid aqua",
        display: 'flex',
        gap: '20px',
        'justify-content': 'space-around',
        'background-color': 'yellow',
        padding: '10px'
    }
    const list_style_none = {
        'list-style': 'none',
        'background-color': 'aqua',
        padding: '5px',
        'border-radius': '10px',
    }
    return (
        <ul style={border}>
            <li style={list_style_none}>Home</li>
            <li style={list_style_none}>About</li>
            <li style={list_style_none}>Contact Us</li>
        </ul>
    )
}

export default NavBar;