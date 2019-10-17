import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import MemberCard from './components/memberCard'

function App() {
  const [member, setMember] = useState([{name: 'Gabriel Anguiano', email: 'anguianog97@gmail', role: 'UI' }])
  const addTeamMember = newMember => {
    setMember([...member,newMember])
  }
  return (
    <div className="App">
      <h1>Add Your Team Member</h1>
      <Form addTeamMember={addTeamMember}/>
      <MemberCard member ={member}/>
    </div>
  );
}

export default App;
