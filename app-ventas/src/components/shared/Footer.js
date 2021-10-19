import React, { Fragment } from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <Fragment>
            <p>Todos los derechos reservados &copy; { year }</p>
        </Fragment>
    )
}
