import React from 'react'

const Container = (props) => {
  return (
    <div className="max-w-screen-lg mx-auto sm:p-8 p-5" {...props}>
      {props.children}
    </div>
  )
}

export default Container
