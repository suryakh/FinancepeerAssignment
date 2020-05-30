import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Displaydata extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.props.getData(this.props.valeu.token)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.userReducers
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Displaydata)
