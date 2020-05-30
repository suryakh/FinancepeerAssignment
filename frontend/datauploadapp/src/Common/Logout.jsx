import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Logout extends Component {
    render() {
        console.log(this.props.value)
        return (
            <div>
                <h4>User successfully loggedout <Link to = "/login">login here</Link></h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
