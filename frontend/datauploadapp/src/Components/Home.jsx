import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Home extends Component {
    render() {
        if(this.props.value.loginStatus){
        return (
            
            <div>
            Home page
            </div>
        )
        }
        else {
            return(
                <Redirect to = '/logout' />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value: state.userReducers
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
