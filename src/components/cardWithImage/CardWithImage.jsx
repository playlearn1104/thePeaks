import React, { useEffect, useState } from 'react';
import './cardWithImage.css'
import pic from '../../assets/images/pic.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardWithImage(props) {
  console.log(props);
  const webTitle = props.news.webTitle;
  const id = props.news.id;

  const [contentBody, setBody] = useState([]);
  useEffect(() => {
    axios.get(`https://content.guardianapis.com/${id}?show-blocks=all&api-key=110f5ca5-a5e9-4400-a9e8-2f048997ffd6`).then((response)=>{
      console.log(response.data.response.content);
    setBody(response.data.response.content);
  
    });

 }, []);

  return (<Link to="/article">
  <div className="cardWithImage" >
      <img src={pic} alt="demo" id="demo-picture"/>
      <div className="title-new-card-image" >
      <div className="title-image">{webTitle}</div>
      <div className="title-description"></div>
    </div>
  </div>
  </Link>
  );
}





