/**
 * Created by SOTUSOFT on 17/07/2017.
 */
import React from 'react';
//import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
//import './imageUploadService.js';
//import './registerServiceWorker.js';
//import $ from 'jquery';
//var _ = require('lodash')
//var Dropzone = require('react-dropzone')

//var download = require('./download.js')
//var uploadFile = require('./uploadFile')

import fs from 'fs';

function uploadFile(url, data) {

   // var fs = require('fs');

    fs.exists(url, (exists) => {
        if (exists) {
            console.error('myfile already exists');
        } else {
            fs.open(url, data, (err, fd) => {
                if (err) throw err;
                fs.writeFileSync(fd);
            });
        }
    });

    return true;
}; /* end uploadFile() */

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.imagePreviewUrl);
        console.log('handle uploading-', this.state.file);
       // this.uploadImage(this.state.file);

       // var css = ``;
      //  download(this.state.file, "imagePreviewUrl", "text/css");

       // uploadFile(this.state.imagePreviewUrl,this.state.file);

    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.props.getData(this.state.imagePreviewUrl,this.state.file);
        }

        reader.readAsDataURL(file);

    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img  alt="produit" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form id="form" onSubmit={(e)=>this._handleSubmit(e)}>
                    <input  onChange={(e)=>this._handleImageChange(e)} ref="imag" type="file" accept="image/*" className="center-block form-control input-lg"  title="Image" placeholder="Image"/>
                </form>
            </div>
        )
    }
  /* <!-- <button id="upload" className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)} >Upload Image</button> --> */
} /* <!-- <div className="imgPreview">{$imagePreview}</div> --> */

export default ImageUpload;