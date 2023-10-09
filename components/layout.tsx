import React from "react";



const Layout = ( {children}: any ) => {

    return (
        <div className="d-flex flex-column align-items-center vh-100 container">
            <img src="/pokemonLogo.svg" className="" style={{ height: '13%', margin: '2%' }} alt="" />
            <main className="d-flex align-items-center justify-content-center" style={{ height: '80%', maxWidth: '100%' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
