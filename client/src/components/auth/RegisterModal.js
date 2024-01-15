import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input,NavItem,NavLink} from "reactstrap"
import { registeUser } from '../../redux/actions'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
function RegisterModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")

  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
const isAuth=useSelector((state)=>state.isAuth)
  const errors=useSelector((state)=>state.err)
console.log(errors,"hellllo")
console.log(isAuth,"kkkkkkkkk")
  const handleRegister=()=>{
     
    const formdata={name,email,password,lastName}
    dispatch(registeUser(formdata,navigate))

 if (isAuth ===true){
toggle()
 }

  }

  

  return (
    <div>

          <NavItem>
          <NavLink href="#" onClick={toggle} >
     
          <strong className="navbar-text mr-3"> Register</strong> 
       
          </NavLink>
          </NavItem>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>

          <InputGroup>
    <Input style={{marginBottom:"10px"}} placeholder="Name" onChange={(event)=>setName(event.target.value)} />
  </InputGroup>
  <InputGroup>
    <Input style={{marginBottom:"10px"}} placeholder="Last Name" onChange={(event)=>setLastName(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input style={{marginBottom:"10px"}} placeholder="Johndoe@example.com" onChange={(event)=>setEmail(event.target.value)} />
  
  </InputGroup>
  <InputGroup>
    <Input style={{marginBottom:"10px"}} placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>
  <InputGroup>


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
          <Button color="primary" onClick={handleRegister}>
            register
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default RegisterModal
