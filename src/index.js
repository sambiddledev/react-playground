import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return ( <
    div >
    <
    h4 > Hello!This is what you 've got!</h4> <
    /div>

  )
};

ReactDom.render( < Greeting / > , document.getElementById('root'));