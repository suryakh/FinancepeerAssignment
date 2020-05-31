import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../Redux/Actions'
import { Redirect } from 'react-router-dom'

export class Displaydata extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.getData(this.props.userStatus.token)
    }
    render() {
        if (this.props.userStatus.loginStatus) {
            if (this.props.data.userData.length === 0) {
                return (<>
                    <h2>No data</h2>
                </>)
            }
            else {
                return (
                    <>
                        <div className="container">
                            <h3>Uploaded data</h3>
                            <div className="row">
                                {this.props.data.requestStatus && this.props.data.userData.map((ele) => <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="m-1 p-3 border shadow" style={{ height: "330px" }}>
                                        <div className="mt-2"><b>userId:</b> User{ele.userId}</div>
                                        <div className="mt-2">
                                            <b>Title:</b>{ele.title}</div>
                                        <div className="mt-2"><b>body:</b>{ele.body}</div>
                                    </div>
                                </div>
                                )}
                            </div>

                        </div>

                    </>
                )
            }
        }
        else {
            return (
                <Redirect to="/logout" />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    userStatus: state.userReducers,
    data: state.dataReducers
})

const mapDispatchToProps = dispatch => {
    return {
        getData: (token) => dispatch(getData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Displaydata)
