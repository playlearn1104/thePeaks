import React from 'react';
import './navigation.css';
import logoThePeaks from '../../assets/images/logoThePeaks.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

export default function Navigation() {
  return <div className="navigation">
       <div className="logo-column">
         <img src={logoThePeaks} alt="" id="logoThePeaks" />
         </div>
         <div className="search-filter">
             <FontAwesomeIcon icon={faSearch} id="search-icon"/>
         </div>
  </div>;
}

