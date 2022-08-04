import React from 'react';
import Header from '../layout/Header'
import Main from '../layout/Main'

function Home(props) {
    return (
        <div>
            <Header title='Rick Y Morty API' />
            <Main />
        </div>
    );
}

export default Home;