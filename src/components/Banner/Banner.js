import React from 'react';
import './Banner.css';

export default function Banner ({children}) {
    return (
        <header className="lmj-banner">
            {children}
        </header>
    )
}