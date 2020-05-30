import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getData } from '../Redux/Actions'

export class Displaydata extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.props.getData(this.props.value.token)
    }
    render() {
        console.log(this.props.data)

        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.userReducers,
    data:state.dataReducers
})

const mapDispatchToProps = dispatch => {
    return {
        getData: (token) => dispatch(getData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Displaydata)
