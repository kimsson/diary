import React from 'react';

const NoteCard = (props) => {
  return (
    <div className="jumbotron">
      <div>{props.children}</div>
    </div>
  )
}


export default NoteCard;
