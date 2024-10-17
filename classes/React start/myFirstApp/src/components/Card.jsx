const Card = () => {
    const border = {
        border: '2px solid black',
        padding: '10px',
        flex: 1
    }
    const width100 = {
        width: '100%'
    }
    return(
        <div style={border}>
            <img style={width100} src="https://th.bing.com/th/id/OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8?w=271&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="image" />
            <ul>
                <li>These cards are made using React.</li>
                <li>Name: Tarandeep</li>
                <li>Roll: 2310992228</li>
            </ul>
        </div>
    )
}
export default Card;