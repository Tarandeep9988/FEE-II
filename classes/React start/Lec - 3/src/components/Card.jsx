const Card = (props) => {
    const border = {
        border: '2px solid black',
        padding: '10px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
        <div style={border}>
            <img width='100px' src={props.url} alt="image" />
            <ul style={{
                'margin-left': '-20px',
            }}>
                {/* <li>These cards are made using React.</li> */}
                <li>Name: {props.name}</li>
                <li>Price: {props.price}</li>
                <li>Author: {props.author}</li>
            </ul>
        </div>
    )
}
export default Card;