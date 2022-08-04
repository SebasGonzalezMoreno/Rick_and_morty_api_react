import React from 'react';

function Header(props) {
    return (
        <div className='contenedor-img'>
            <header>
                <div class="banner">
                    <p class="title">{props.title}</p>
                </div>
            </header>
        </div>
    );
}

export default Header;