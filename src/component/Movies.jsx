import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import { deleteMovie } from '../Redux/Action';
import {useSelector,useDispatch} from 'react-redux'
function Movies() {
   const dispatch = useDispatch()
    const Movies =useSelector(state=>state.movies)
  return (
    <div>
        <Row xs={1} md={4} className="g-4 m-auto">
  {Movies?.map((el, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={el.imgUrl}/>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
           {el.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button onClick={()=>dispatch(deleteMovie(el._id))}> delete</button>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default Movies