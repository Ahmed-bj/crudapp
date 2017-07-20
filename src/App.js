import React from 'react';
import './App.css';
import Comment from './Comment.js';
import './bootstrap.css';
import ImageUpload from  './upload.js';


var Com = Comment;
var ImageFile = ImageUpload;

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            comments : [], file :"" , src :""
        }
        this.updateComment = this.updateComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.eachComment = this.eachComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.getData = this.getData.bind(this);


    }

    addComment(text) {
        console.log("Adding Comment");
        var array = this.state.comments;
        array.push({name : this.refs.lib.value ,image : this.state.file ,description : this.refs.desc.value });
        this.setState({comments : array});
        this.refs.lib.value = "" ;
        this.refs.desc.value = "" ;
    }

    updateComment(text,i) {
        console.log("updating Comment");
        var array = this.state.comments;
        array[i] = {name:text.name,image:text.image,description:text.description};
        this.setState({comments : array});
    }

    removeComment(i) {
        console.log("updating Comment");
        var array = this.state.comments;
        array.splice(i,1);
        this.setState({comments : array});
    }
    eachComment(text,i) {
            return(<Com index={i} key={i} deleteComment={this.removeComment} updateComment={this.updateComment} name={text.name} image={text.image} description={text.description} ></Com>)
    }

    getData(f , s){
        var array = this.state.comments;
        this.setState({comments : array, file:f , src:s });
        //console.log("comments : " + array + " ,  file : " + f + " , src : " + s);
    }



    render() {
        return (
            <div>
                <div className="container-full">

                    <div className="row">

                        <div className="col-lg-12 text-center ">

                            <h1>Notre entreprise</h1>
                            <p className="lead">Gestion des projets</p>

                            <br/>

                            <div className="col-lg-12">
                                <div className="input-group input-group-lg col-sm-offset-4 col-sm-4">
                                    <input ref="lib" type="text" className="center-block form-control input-lg" title="Libelle" placeholder="Nouveau project"/>
                                    <ImageFile getData={this.getData}  />
                                    <input ref="desc" type="text" className="center-block form-control input-lg" title="Description" placeholder="Description"/>
                                </div>
                                <span className="input-group-btn"><button onClick={this.addComment} className="btn btn-lg btn-primary" type="button"  >Ajouter</button></span>

                            </div>
                        </div>

                    </div>

                    <br/><br/><br/><br/><br/>

                </div>
                <div className="container">
                    <hr/>
                    <div className="row">
                           {
                             this.state.comments.map(this.eachComment)
                           }
                    </div>
                </div>
            </div>
        );
    }
}
export default App;

