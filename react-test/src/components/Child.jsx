import React from "react"
import "./Child.css"

function Child({user}) {
    return (
    <>
        <h2>{user.name}</h2>
        <h2>userID is {user.id}</h2>
        <h2>hobbies are {user.hobbies.join(", ")}</h2>
        <h2>{user.ismem?"member":"not a member"}</h2>
    
    </>
    )
}

export default Child
