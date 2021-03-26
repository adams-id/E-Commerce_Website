import React from 'react';
import Directory from '../../components/directory/directory.component';
import {HomePageContainer} from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
); //Function stating what should happen when the HomePage variable is called.

export default HomePage;