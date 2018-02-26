import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// methods
import { getNotes, saveNote, deleteNote } from '../actions/notesAction'
import { getUser } from '../actions/userAction';
import NoteCard from './NoteCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentRecievedProps() {
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit (e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid,
      createdAt: new Date().getTime()
    }
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: ''
    })
  }

  renderNotes () {
    return _.map(this.props.notes, (note, key) => {
        return (
          <NoteCard key={key}>
            <Link to={`/${key}`}>
                <h2>{note.title}</h2>
            </Link>
            <h2><small>{note.title}</small></h2>
            <p>{note.body}</p>
            <p><small>{moment(note.createdAt).fromNow()}</small></p>
            { note.uid === this.props.user.uid && (
              <button
                className="btn btn-danger btn-xs"
                onClick={() => this.props.deleteNote(key)}>Delete
              </button>
            )}
          </NoteCard>
        )
      })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form
              onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control form-control-sm no-border"
                  placeholder="Titile..."
                  required
                />
               </div>

               <div className="form-group">
                 <textarea
                   onChange={this.handleChange}
                   value={this.state.body}
                   type="text"
                   name="body"
                   className="form-control no-border"
                   placeholder="Body..."
                   required
                 />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Save</button>
                </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }
}

// map, dispatch
export default connect(mapStateToProps, {getNotes, saveNote, deleteNote, getUser}) (App);
