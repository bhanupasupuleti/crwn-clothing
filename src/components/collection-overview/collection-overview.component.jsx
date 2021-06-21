import React from 'react';
import { createStructuredSelector } from 'reselect';
import  {connect } from 'react-redux';

// import './collection-overview.styles.scss';
import {selectCollections} from '../../redux/shop/shop.selector'
import CollectionPreview  from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview =({collections})=>(
    <div className='collection-overview'>
    {
        collections.map(({id,...rest})=>(
            <CollectionPreview key={id} {...rest} />
        ))
    }
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
