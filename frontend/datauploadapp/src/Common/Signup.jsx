import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../Redux/Actions'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            mobile: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let temp = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile
        }
        if (this.state.username !== "" && this.state.password !== "") {
            this.props.signupUser(temp)
        }
        else {
            alert("please fill all details")
        }
        this.setState({
            username: "",
            email: "",
            password: "",
            mobile: ""
        })
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 shadow" style={{ height: "450px", marginTop: "10%" }}>
                    <div className="row p-5 formdiv">
                        <div className="col-12">
                            <label>Username</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="username" placeholder="enter username" value={this.state.username} type="text" onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <label>Email</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="email" placeholder="enter email" value={this.state.email} type="text" onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <label>Password</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" type="password" name="password" placeholder="enter password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <label>Mobile</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" type="text" name="mobile" placeholder="enter mobile no." value={this.state.mobile} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 text-center m-4">
                            <button className="btn btn-success" onClick={this.handleClick}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userStatus: state.userReducers
})

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (data) => dispatch(signupUser(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
