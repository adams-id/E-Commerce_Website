import React from 'react';
import Shop_Data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class shopPage extends React.Component {
    constructor(props){
        super(props);

    this.state = {
        collections : Shop_Data
    }}
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            
            </div>
        );
    }
};

export default shopPage;