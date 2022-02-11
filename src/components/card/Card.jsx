import React from 'react';
import './card.css'

export default function card(props) {
  console.log(props);
  const webTitle = props.news.webTitle;
  const id = props.news.id;
  console.log(id);
  
  return <div className="card">
    <div className="title-new-card">
      <div className="title">{webTitle}</div>
    </div>
  </div>;
}

