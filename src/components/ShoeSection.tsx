import { useEffect } from 'react';
import '../styles/shoeSection.css'
import { shoeSectionData } from '../utils/const_data/shoeSectionData';
import A11YSlider from '../utils/slider/slider';

export default function ShoeSection() {
    useEffect(() => {
        const slider = document.querySelector('#s-1');
        const sliding = new A11YSlider(slider! as HTMLElement, {
            adaptiveHeight: true,
            slidesToShow: 5,
            skipBtn: false,
            arrows: false,
            infinite: false,
            dots: true
        });


        return () => {
            sliding.destroy();
        };
    }, [])


    return <div className='shoe-section rel-content'>
        <div></div>
        <button id='prev' type="button" className='arrow'><img className='wd-150' src="/assets/icon_arrow_back.svg" alt="" /></button>

        <ul id="s-1" className="slider">
            {shoeSectionData.map((shoeData) => {
                return <li key={shoeData.id}>
                    <div className="shoe-content col gp-250">
                        <div className='rel-content '>
                            <img className="modular_img" src={shoeData.imgUrl} alt="" />
                            <div className="abs-title row-sb">
                                <div><img className='wd-150' src="/assets/icon_favorite.svg" alt="" /></div>
                                <h3 className="fs-xxsm bold uppercase">{shoeData.designLocation}</h3>
                            </div>
                            <button className='add-tocart'>
                                <p>Add to Cart</p>
                                <div className="horizontal-line bg-light-grey"></div>
                                <div><img className='wd-150' src="/assets/icon_cart.svg" alt="" /></div>
                            </button>
                        </div>

                        <div className='col gp-100'>
                            <h4>{shoeData.descriptionTitle}</h4>
                            <p>{shoeData.descriptionPrice}</p>
                            <p className='fs-xxsm bold text-grey uppercase'>{shoeData.descriptionType}</p>
                        </div>

                    </div>

                </li>
            })}


        </ul>
        <button id='next' type="button" className='arrow' ><img className='wd-150' src="/assets/icon_arrow_forward.svg" alt="" /></button>
        <div></div>
    </div>
}