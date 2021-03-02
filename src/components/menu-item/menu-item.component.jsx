import React from 'react';
import { withRouter } from 'react-router-dom'; //allows us access to the history and match attributes from react-router
import './menu-items.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}> {/*The onClick here
    dynamically generates the url for the desired page when the user clicks the link */}
    <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className='content'>
            <h1 className='title'> {title.toUpperCase()}</h1> {/*Gets the title value and converts it to capital letter*/}
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);