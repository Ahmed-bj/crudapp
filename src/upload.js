/**
 * Created by SOTUSOFT on 17/07/2017.
 */
import React from 'react';
import './App.css';
import './bootstrap.css';
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
        //console.log('handle uploading-', this.state.imagePreviewUrl);
        //console.log('handle uploading-', this.state.file);

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
  }
export default ImageUpload;