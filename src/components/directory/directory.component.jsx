import React from 'react';
import {connect} from 'react-redux';
import  {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import './directory.styles.scss';

const Directory=({sections})=>{
  return(
        <div className='directory-menu'>
            {
                sections.map((section,i)=>(
                    <MenuItem key={i} {...section} />
                ))
            }
        </div>
        )
}

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory)