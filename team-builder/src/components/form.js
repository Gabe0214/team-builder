import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: '', email: '', role: ''
    })

  const submitForm = event => {
    event.preventDefault();
    props.addTeamMember(member);
    setMember({name: '', email: '', role: ''})
  }
  
    const changeHandler = e => {
      setMember({...member, [e.target.name]: e.target.value })

  }

  return(
      <div>
    <form onSubmit={submitForm}>
     <label htmlFor ="name">Name</label>
     <input 
     name="name"
     type ="text" 
     id="name" 
     placeholder="Name" 
     onChange={changeHandler}/>
     <label htmlFor="email">Email</label>
     <input name = 
     "email" 
     type ="text" 
     id ="email" 
     placeholder ="E-mail"
     onChange={changeHandler}/>
     <label htmlFor="role">Role</label>
     <input 
     name="role" 
     type="text" 
     id ="role" 
     placeholder="role" 
     onChange={changeHandler}/>
     <button type ="submit">Add Team Member</button>
     </form>
     </div>
  )

}

export default Form