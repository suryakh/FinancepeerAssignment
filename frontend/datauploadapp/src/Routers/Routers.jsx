import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from '../Common/Login'
import Signup from '../Common/Signup'
import Logout from '../Common/Logout'
import Nav from '../Common/Nav'
import Home from '../Components/Home'
import Displaydata from '../Components/Displaydata'
import Nomodule from '../Components/Nomodule'

export class Routers extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.userStatus)
        return (
            <>
                <Nav />
                <div>
                    <Switch>
                        <Route path="/" exact render={(props) => <Home {...props} />} />
                        <Route path='/login' exact render={(props) => <Login  {...props} />} />
                        <Route path='/signup' exact render={(props) => <Signup {...props} />} />
                        <Route path='/logout' exact render={(props) => <Logout {...props} />} />
                        <Route path='/displaydata' exact render={(props) => <Displaydata {...props} />} />
                        <Route exact component={Nomodule} />

                    </Switch>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userStatus: state.userReducers
})

const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
