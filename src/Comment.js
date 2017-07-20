import React from 'react';
import './App.css';
import './bootstrap.css';

class Comment extends React.Component {

    state = { editing: true };

    getInitialState() {
        this.setState({editing : false});
    }

    constructor() {
        super();

        this.state = {editing : false};
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.add = this.add.bind(this);

    }

    edit() {
              this.setState({editing : true});
           }
    remove() {
        console.log("Remove comment");
        this.props.deleteComment(this.props.index);
    }
    save() {
        var nameVar = this.refs.na.value;
        var imageVar = this.refs.im.value;
        var descriptionVar = this.refs.de.value;
        console.log("name : " + nameVar + " image : " + imageVar  + " description : " + descriptionVar )
        this.setState({editing : false});
        var objet = {name : this.refs.na.value ,image : this.refs.im.value ,description : this.refs.de.value };
        this.props.updateComment(objet,this.props.index);
    }
    add() {
        this.state = {editing : false};
        console.log("editing : " + this.state.editing);
    }
    renderNormal() {
         return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="centerEle panel-heading"><h3> {this.props.name} </h3></div>
                        <div className="centerEle panel-body">
                        <img src={this.props.image} className="App-logo" alt="logo"  />
                        <div className="panel-body"><p>  {this.props.description} </p></div>
                        <span className="input-group-btn"><button className="btn btn-lg btn-success" type="button" onClick={this.edit} >edit</button></span>
                        <span className="input-group-btn"><button className="btn btn-lg btn-danger" type="button" onClick={this.remove} >remove</button></span>
                    </div>
                </div>
            </div>
        );
    }
    renderForm() {
         return (
            <div>
                 <div className="panel-body">
                     <div className="col-md-4">
                         <div className="panel panel-default">
                             <div className="panel-heading"><h3> {this.props.name} </h3></div>
                                <input ref="na" defaultValue={this.props.name} type="text" className="center-block form-control input-lg" title="Libelle" placeholder="Nouveau project"/>
                                <input ref="im" defaultValue={this.props.image} type="text" className="center-block form-control input-lg" title="Image" placeholder="Image"/>
                                <input ref="de" defaultValue={this.props.description} type="text" className="center-block form-control input-lg" title="Description" placeholder="Description"/>
                                <span className="input-group-btn"><button className="btn btn-lg btn-success" type="button" onClick={this.save} >Save</button></span>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }

    render() {
        if(this.state.editing){
            return (this.renderForm());
        }else{
            return (this.renderNormal());
        }

    }
}

export default Comment;
