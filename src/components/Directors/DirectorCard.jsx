import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ButtonsEditDelete from '../ButtonsEditDelete';
import { deleteDirectorThunk } from '../../store/slices/directors.slice'
import formatDate from '../../utils/formatDate';

const DirectorCard = ({ director, selectDirector, showOptions=true }) => {

    const { id, image, firstName, lastName, nationality } = director;

    const birthday = formatDate(director.birthday)

    const dispatch = useDispatch();

    return (
        <Col>
            <Card style={styles.component}>
                <Card.Img variant="top" src={image} style={{ height: 300, objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ color: "#D89216" }}>{firstName} {lastName}</Card.Title>
                    <div className="flex-fill">
                        <div><b>birthday: </b>{birthday}</div>
                        <div><b>Nationality: </b>{nationality}</div>
                    </div>
                    {showOptions && (
                        <ButtonsEditDelete 
                            onDelete={() => dispatch(deleteDirectorThunk(id))}
                            onUpdate={() => selectDirector(director)}
                        />
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

const styles = {
    component:{
        height: "100%",
         backgroundColor: "rgba(0, 0, 255, 0.473)",
         borderRadius: "0.5em",
         overflow:"hidden"
    }
}
export default DirectorCard;