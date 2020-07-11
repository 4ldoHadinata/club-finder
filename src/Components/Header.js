import React from 'react';
import Navigation from './Navigation';

// komponen header

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                ClubFinder
            </span>

            <Navigation />
        </header>
    )
}

export default Header;