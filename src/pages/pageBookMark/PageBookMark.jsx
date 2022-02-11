import React from 'react';
import './pagebookmark.css';

export default function PageBookMark() {
  return <div className="pageBookMark">
     <div><h3>All bookmark</h3></div>
    <div><select id="articleSorting">
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
        </select>
        </div> 
  </div>;
}
