import React from 'react';

// loader agar ketika mencari, tidak langsung menampilkan kosong

function Loader(){
    return (
        <div className="flex justify-center">
            <div className="loader"></div>
        </div>
    )
}

export default Loader;