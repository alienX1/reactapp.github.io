import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Curasol() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            padding: '100px 0'
        }}>
            <h1 
            style={{
                fontSize:'4rem',
                fontWeight: '900',
                textAlign:'center',
                // fontFamily: 'Archivo'
            }}
            >New generation of<br/> Crypto.Chicks</h1>
            <p style={{ fontWeight:'800', marginBottom: '63px' }}>Crypto.Chicks = 10K gorgeous, proud, independent, and empowered girls</p>
            <div>
                <Carousel style={{ 
                    display: 'block', 
                    width: 500, 
                    padding: 30,
                    border: '10px solid purple'
                    }}>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="/images/girl1.jpg"
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/images/girl2.jpg"
                            alt="Image Two"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Curasol
