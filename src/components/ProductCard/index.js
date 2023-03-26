import { Card, Container } from "react-bootstrap";

export default function ProductCard (){
    return (
        <Card className="border border-dark">
            <Card.Header>titolo</Card.Header>
            <Card.Body>contenuto</Card.Body>
        </Card>
    )
}