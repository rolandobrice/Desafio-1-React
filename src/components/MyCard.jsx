import Card from 'react-bootstrap/Card';
import MyTags from './Tags';

const MyCard = (props) => {
    return (
        <>
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img className='imagen' variant="top" src={props.img} />
            <Card.Body className='card_body'>
                <Card.Title>{props.nombrePerro}</Card.Title>
                <Card.Text>{props.decripcion}</Card.Text>
            </Card.Body>
            <MyTags 
            Raza={props.Raza}
            colorBadge={props.colorBadge}
            />
        </Card> 
        </>     
    )
}
export default MyCard