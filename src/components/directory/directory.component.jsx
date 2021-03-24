import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selector';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) =>  ( //We needed to use this because we needed access to State
    <div className='directory-menu'>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))}
     </div>
); //The ...otherSectionProps technique is a way to state that we want to destructure the "sections" array and use all the properties in it

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);