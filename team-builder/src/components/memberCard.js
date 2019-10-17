import React from "react"


const MemberCard = props => {
    return (
     <div>
        {props.member.map(value => {
      return (
       <div>   
      <h2>{value.name}</h2>
      <p>{value.email}</p>
      <p>{value.role}</p>
      </div>
      )
  })}
  </div>
    )
}

export default MemberCard;