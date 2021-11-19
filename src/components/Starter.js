import React from 'react';
import './Starter.css';

function Starter() {
    return (
        <div className='Starter'>
            <div className="Starter_text">
                <h1>Sold Out</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    quaerat excepturi, perspiciatis officiis non maxime esse deserunt
                    asperiores modi distinctio harum totam magni. Voluptatum
                    nesciunt eius quasi, minima cumque facilis?</p>

                <div className='Starter_navigator'>
                    <button>
                        <div className="Starter_image"></div>
                        <h4>OPENSEA</h4>
                    </button>
                    <div className="mint_stat">
                        {/* insert image you want in src */}
                        <div className="Starter_image"></div>
                        <p>MINT COUNT 10000/10000</p>
                    </div>
                </div>
            </div>

            <div className="Starter_images">
                <img src="/images/girl2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Starter
