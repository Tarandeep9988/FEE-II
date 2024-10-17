import Card from "./Card"


const CardBox = () => {
    const flex = {
        display: 'flex',
        gap: '20px'
    }
    return (
        <div style={flex}>
            <Card name='The BoyFriend' author='Freida McFadden' price='10$' url='https://storage.googleapis.com/du-prd/books/images/9781728296227.jpg'/>
            <Card name='COUNTING MIRACLES' author='Nicholas Sparks' price='10$' url='https://storage.googleapis.com/du-prd/books/images/9780593449592.jpg'/>
            <Card name='THE HOUSEMAID' author='Freida McFadden' price='10$' url='https://storage.googleapis.com/du-prd/books/images/9781538742570.jpg'/>
        </div>
    )
}

export default CardBox;