import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { uploadFile } from '../Redux/Actions'

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
            alert("please upload .json file only")
        }
        else {
            let formdata = new FormData()
            formdata.append("file", this.state.file)
            this.props.uploadFile(formdata, this.props.userStatus.token)
            this.setState({
                uploadStatus: false
            })
        }
    }
    render() {
        if (this.props.userStatus.loginStatus) {
            return (
                <>
                    <div className="container text-center mt-5 p-3 border">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="file" onChange={this.fileLoad} />
                                <label class="custom-file-label">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onClick={() => this.fileUpload()} >Upload</button>
                            </div>
                        </div>
                        <div className="m-4">
                            {this.state.uploadStatus && <h4>Selected file name : {this.state.file.name}</h4>}
                        </div>
                        <div className="m-5">
                            <Link to="/displaydata"><button className="btn btn-primary m-5">Show uploaded data </button></Link>
                            {this.props.data.dataUploaded && <h1>Uploading......</h1>}
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
    userStatus: state.userReducers,
    data: state.dataReducers
})

const mapDispatchToProps = dispatch => {
    return {
        uploadFile: (data, token) => dispatch(uploadFile(data, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
