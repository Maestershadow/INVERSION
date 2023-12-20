export default function CommunitySection() {
    return <div className="even-col">
        <div className="bg-black">
            <img src="/assets/community_main.jpg" alt="" />
        </div>
        <div className="even-row">
            <div className="bg-light-grey center text-align-c">
                <div className="fit-content">
                    <h3 className="bold fs-xlg  mg-bl-100">Show Off<br />Your Style</h3>
                    <p>Tag @Inversion on Instagram with</p>
                    <p>#Inversion Style for a chance to be featured.</p>
                </div>


            </div>
            <div className="even-col">
                <div className="rel-content">
                    <div className="abs-title">
                        <img className="wd-150" src="/assets/icon_favorite.svg" alt="" />
                    </div>
                    <img className="modular_img" src="/assets/shoe2.jpg" alt="" />
                    <div className='col gp-100 abs-subtitle'>
                        <h4>Chuck Taylor All Star Lift Platform Moto</h4>
                        <p>$80.00</p>

                    </div>
                </div>
                <div className="rel-content">
                    <img className="modular_img" src="/assets/community_sub.jpg" alt="" />
                    <div className='abs-subtitle'>
                        <img className="filter-white wd-200" src="/assets/star-solid.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}