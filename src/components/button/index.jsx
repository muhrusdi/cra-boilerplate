import React, { useState } from "react";

const Button = () => {
  const [state, setState] = useState("login")
  const handleClick = () => {
    setState("clicked")
  }
  return (
    <button role="button" onClick={handleClick} type="submit">{state}</button>
  )
}

export default Button