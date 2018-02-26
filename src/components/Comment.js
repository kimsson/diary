import React, { Component } from 'react';
import moment from 'moment'

const Comment = (props) => {
  return <div>
    <p>{props.comment.commentBody}</p>
    <p><small>{moment(props.comment.createdAt).fromNow()}</small></p></div>
}

export default Comment;
