import React from 'react';

const Link = ({
    actionMethod,
    children,
}) => {
    return (
        <a href="#"
           onClick={e => {
               actionMethod(e);
           }}
        >
            {children}
        </a>
    );
};

export default Link;