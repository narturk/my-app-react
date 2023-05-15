import React from 'react';

function Footer(){
    let currentYear = new Date().getFullYear();

    console.log(currentYear);

    return (
        <footer>
            <p>Copyright &copy; { currentYear }</p>
        </footer>
    );
}

export default Footer;
