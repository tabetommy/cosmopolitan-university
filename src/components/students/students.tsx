import Card from 'react-bootstrap/Card';
import '../common-component/common-component.css';

const Students = () => {
    return(
        <div className='student-main'>
            <h1 className='student-text'>Student Admissions</h1>
            <div className='student-cards'>
                <Card className='student-card'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='student-card-b'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        )
}

export default Students