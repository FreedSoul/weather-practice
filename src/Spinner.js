import React from 'react';

const Spinner = (props) => {
    return ( 
        <div className='ui segment'>
            <p></p>
            <div className='ui  active dimmer'>
                <div className='ui loader season-display'>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Spinner;