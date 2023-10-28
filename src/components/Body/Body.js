import React from 'react'
import Box from './box'
import {advertise,secondAdd} from '../index'

function Body(){
    return<>
    <div className="add">
            <img src={advertise} alt="" />
        </div>
    <div className="All-cards">
            <p className='Heading'>Fresh recommendations</p>
            <Box/>
    
        </div>
        <div className='add-bottom'>
            <img src={secondAdd}/>
        </div>
    
    </>
}

export default Body;