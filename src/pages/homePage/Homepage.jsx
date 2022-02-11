import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import './homepage.css';
import TopStories from '../../components/topStories/TopStories';
import Card from '../../components/card/Card';
import CardWithImage from '../../components/cardWithImage/CardWithImage';


export default function Homepage() {
  const [news, setNews] = useState([]);
  const [sports, setSports] = useState([]);
  //https://content.guardianapis.com/search?section=news&api-key=test
  //https://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?show-blocks=body&api-key=test
  
  useEffect(() => {
     axios.get(`https://content.guardianapis.com/search?section=news&show-fields=thumbnail&api-key=110f5ca5-a5e9-4400-a9e8-2f048997ffd6`).then((response)=>{
      console.log(response.data.response.results);
     setNews(response.data.response.results);
     });
    

     axios.get(`https://content.guardianapis.com/search?section=sport&show-fields=thumbnail&api-key=110f5ca5-a5e9-4400-a9e8-2f048997ffd6`).then((response)=>{
      console.log(response.data.response.results);
     setSports(response.data.response.results);
     });

  }, []);

     
  if(!news) return null;

  const style1 = {
    height:136,
    width:540
  }

  const style2 = {
    height:100,
    width:340
  }


  return (<div className="homepage">
        <TopStories/>
        <div className="container">
          <div className="row-1">
          {news.filter((news,index) => index ===0).map((news,index)=> <CardWithImage news={news}  style1={style1} key={index} />)}
          <div className="grid">
          {news.filter((news,index) => index ===1).map((news,index)=> <CardWithImage news={news}  style2={style2}  key={index} />)}
          {news.filter((news,index) => index ===2).map((news,index)=> <CardWithImage news={news}  style2={style2}   key={index} />)}
          {news.filter((news,index) => index ===3).map((news,index)=> <Card news={news}  key={index} />)}
          {news.filter((news,index) => index ===4).map((news,index)=> <Card news={news}  key={index} />)}
          </div>
          </div>
          <div className="grid-3">
          {news.filter((news,index) => index ===5).map((news,index)=> <CardWithImage news={news}  key={index} />)}
          {news.filter((news,index) => index ===6).map((news,index)=> <CardWithImage news={news}  key={index} />)}
          {news.filter((news,index) => index ===7).map((news,index)=> <CardWithImage news={news}  key={index} />)}
        </div>
          <h3>Sports</h3>
          <div className="grid-3">
          {sports.filter((sports,index) => index ===0).map((sports,index)=> <CardWithImage news={sports}  key={index} />)}
          {sports.filter((sports,index) => index ===1).map((sports,index)=> <CardWithImage news={sports}  key={index} />)}
          {sports.filter((sports,index) => index ===2).map((sports,index)=> <CardWithImage news={sports}  key={index} />)}
        </div>
        </div>
       
       
  </div>);
}
