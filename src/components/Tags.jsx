import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
    return (
        <>
            <Badge bg={props.colorBadge}>{props.Raza}</Badge>
        </>
    )
}
export default Tags