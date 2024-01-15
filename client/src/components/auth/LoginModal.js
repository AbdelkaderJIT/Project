import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input,NavItem,NavLink} from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'




function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toggle=()=>{
    setModal(!modal)
  }
  const errors=useSelector((state)=>state.err)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    const formdata={email,password}
    dispatch(loginUser(formdata,navigate))


  }
  return (
    <div>


          <NavItem>
          <NavLink href="#" onClick={toggle} >
     
          <strong className="navbar-text mr-3"> Login</strong> 
       
          </NavLink>
          </NavItem>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
  <InputGroup>
    <Input style={{marginBottom:"10px"}} placeholder="johndoe@example.com" onChange={(event)=>setEmail(event.target.value)} />
  
  </InputGroup>
  <InputGroup style={{marginBottom:"10px"}} >
    <Input placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>
  <InputGroup style={{marginBottom:"10px"}} >


{errors && (
                <Alert color="danger">
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}
                </Alert>
              )}
</InputGroup> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin}>
Login          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default LoginModal


