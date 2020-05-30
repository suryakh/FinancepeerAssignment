import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { uploadFile } from '../Redux/Actions'
import axios from 'axios'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            uploadStatus: false
        }
    }
    fileLoad = (e) => {
        this.setState({
            file: e.target.files[0],
            uploadStatus: true
        })
    }
    fileUpload = () => {
        let fileInput = document.getElementById('file')
        let filePath = fileInput.value
        let validefile = /(\.json)$/i
        if (!validefile.exec(filePath)) {
            alert("enter upload .json file only")
        }
        else {
            let formdata = new FormData()
            formdata.append("file", this.state.file)
            this.props.uploadFile(formdata, this.props.value.token)
            this.setState({
                uploadStatus: false
            })
        }
    }
    render() {
        console.log(this.state.file)
        if (this.props.value.loginStatus) {
            return (
                <>
                    <div>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="file" onChange={this.fileLoad} />
                                <label class="custom-file-label">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onClick={this.fileUpload} >Button</button>
                            </div>
                        </div>
                        <div>
                            {this.state.uploadStatus && <h4>file name :{this.state.file.name}</h4>}
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <Redirect to='/logout' />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value: state.userReducers
})

const mapDispatchToProps = dispatch => {
    return {
        uploadFile: (data, token) => dispatch(uploadFile(data, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
