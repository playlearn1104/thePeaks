import React, { useEffect, useState } from 'react';
import './topstories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/fontawesome-free-solid';
import { Link } from "react-router-dom";


export default function TopStories() {
    return <div className="topStories">
        <div className="flex-50">
            <h3>Top Stories</h3>
        </div>
        <div className="flex-50">
            <div className="column-50">
                <Link to="/pageBookMark"><button className="view-bookmark"><FontAwesomeIcon icon={faBookmark} /><span className="text-button">VIEW BOOKMARK</span></button></Link>
                <div className ="sorting">
                    <select id="articleSorting">
                        <option value="Newest">Newest First</option>
                        <option value="Oldest">Oldest First</option>
                        <option value="Popular">Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    </div>;
}
