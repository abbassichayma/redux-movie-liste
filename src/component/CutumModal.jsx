import {React,useState} from 'react'
import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { addNewMovie } from '../Redux/Action';
 
  export default function CutumModal() {
      const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [imgUrl,setImgUrl]=useState('')
    const [rate,setRate]=useState('')
    const movies=useSelector(state=>state.movies)
    const addMovie =()=>{
        dispatch(addNewMovie({title,category,description,date,imgUrl,rate,_id:movies.length+1}))
        handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="title"
           aria-label="title"
           aria-describedby="basic-addon1"
           onChange={(e)=>setTitle(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="category"
           aria-label="category"
           aria-describedby="basic-addon1"
           onChange={(e)=>setCategory(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="description"
           aria-label="description"
           aria-describedby="basic-addon1"
           onChange={(e)=>setDescription(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="date"
           aria-label="date"
           aria-describedby="basic-addon1"
           onChange={(e)=>setDate(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="imgUrl"
           aria-label="imgUrl"
           aria-describedby="basic-addon1"
           onChange={(e)=>setImgUrl(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="rate"
           aria-label="rate"
           type
           aria-describedby="basic-addon1"
           onChange={(e)=>setRate(e.target.value)}
           />
          </InputGroup>
         

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addMovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  