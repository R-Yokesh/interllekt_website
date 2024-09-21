import React from 'react'
import Slider from "react-slick";
import Assets from '../../../Assets/Assets';

function ClientSection() {

    const clientLogo = [Assets.clientAmj, Assets.clientCmc, Assets.clientDisney, Assets.clientProdapt, Assets.clientCiros,Assets.atrllogo,Assets.mashalogo,Assets.kizulogo];

    const FeatureSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='client-main' style={{overflow: 'hidden' , height:'50vh'}}>
            {/* <h1 className='client-head'>Partners</h1> */}
            <Slider {...FeatureSettings}>

                {clientLogo.map((item, i) => (
                    <div>
                        <img src={item} alt="Client-logo" className='image-slide' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ClientSection
