import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'


export default class extends React.Component{
    render(){
        return(
            <div>
                <p>Update My Profile</p>
                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}