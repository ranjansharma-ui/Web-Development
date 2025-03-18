import React from 'react'
import './Panel.css'

const Panel = (props) => {
  return (
    <div>
        <section className='panel'>
            <h3>{props.title}</h3>
            {props.isActive ? (<p>
                {props.children}
            </p>):
            (<button onClick={props.onShow}>Show</button>)}
        </section>
        <section>
            
            ranjan sharma
        </section>
      
    </div>
  )
}

export default Panel
