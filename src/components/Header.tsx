import { useRef, useState } from 'react';
import '../styles/header.css'


export default function Header() {

    const [flyout_visible, setFlyoutVisible] = useState(false);
    const flyoutRef = useRef<HTMLDivElement>(null);
    const tabContainerRef = useRef<HTMLDivElement>(null);


    const handleOnMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const tabBox = tabContainerRef.current?.getBoundingClientRect();
        let displaySomething = false;
        if (tabBox !== undefined) {
            const flyoutBox = flyoutRef.current?.getBoundingClientRect();
            let tabBoxBool = false;
            let flyoutBool = false;
            if (event.clientX >= tabBox.left
                && event.clientX <= tabBox.right
                && event.clientY >= tabBox.top
                && event.clientY <= tabBox.bottom
            ) {
                tabBoxBool = true;
            }
            if (flyoutBox !== undefined) {
                if (event.clientX >= flyoutBox.left
                    && event.clientX <= flyoutBox.right
                    && event.clientY >= flyoutBox.top
                    && event.clientY <= flyoutBox.bottom) {
                    flyoutBool = true;
                }
            }


            if (tabBoxBool || flyoutBool) {
                displaySomething = true;
            }
        }


        if (!displaySomething) {
            handleOnMouseLeave()
        }
        else {
            const clickedTab = (event.target as HTMLElement).closest("[role='tab']");
            const currentTab = tabContainerRef.current?.querySelector('[aria-selected="true"]');
            if (!clickedTab || clickedTab === currentTab) {
                return;
            }
            setFlyoutVisible(true);
            if (currentTab === null) {
                clickedTab?.setAttribute("aria-selected", "true");
                tabContainerRef.current?.style.setProperty('--_visibility', "visible");
            }
            else {
                tabContainerRef.current?.style.setProperty('--_transition-time', "200ms");
            }
            switchTab(clickedTab as HTMLButtonElement);
        }


    };

    function switchTab(newTab: HTMLButtonElement) {
        const oldTab = tabContainerRef.current?.querySelector('[aria-selected="true"]') as HTMLButtonElement;
        const activePanelId = newTab.getAttribute("aria-controls");
        const activePanel = tabContainerRef.current?.parentElement?.nextElementSibling?.querySelector(
            "#" + CSS.escape(activePanelId!)
        );
        const tabButtons = tabContainerRef.current?.querySelectorAll("[role=tab]");
        tabButtons?.forEach((button) => {
            button.setAttribute("aria-selected", "false");
            button.setAttribute("tabindex", "-1");
        });
        const tabPanels = document.querySelectorAll("[role=tabpanel]");
        tabPanels.forEach((panel) => {
            panel.setAttribute("hidden", "true");
        });

        activePanel?.removeAttribute("hidden");

        newTab.setAttribute("aria-selected", "true");
        newTab.setAttribute("tabindex", "0");
        newTab.focus();
        moveIndicator(oldTab, newTab);

    }

    function moveIndicator(oldTab: HTMLButtonElement, newTab: HTMLButtonElement) {
        const newTabPosition = oldTab?.compareDocumentPosition(newTab);
        if (tabContainerRef.current?.offsetWidth !== undefined) {
            const newTabWidth = newTab.offsetWidth / tabContainerRef.current?.offsetWidth;
            let transitionWidth;
            //New tab to right
            if (newTabPosition === 4) {
                transitionWidth = newTab.offsetLeft + newTab.offsetWidth - oldTab?.offsetLeft;
            }
            else {
                transitionWidth = oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft;
                tabContainerRef.current?.style.setProperty('--_left', newTab.offsetLeft + "px");
            }

            tabContainerRef.current?.style.setProperty('--_width', `${transitionWidth / tabContainerRef.current?.offsetWidth}`);
            setTimeout(() => {
                tabContainerRef.current?.style.setProperty('--_left', newTab.offsetLeft + "px");
                tabContainerRef.current?.style.setProperty('--_width', `${newTabWidth}`);
            }, 200)
        }

    }


    function handleOnMouseLeave() {
        const currentTab = tabContainerRef.current?.querySelector('[aria-selected="true"]');
        currentTab?.setAttribute("aria-selected", "false");
        tabContainerRef.current?.style.setProperty('--_visibility', "hidden");
        tabContainerRef.current?.style.setProperty('--_transition-time', "0ms");
        setFlyoutVisible(false);
    }

    function handleFlyoutOnMouseEnter() {

    }

    function handleFlyoutOnMouseLeave() {

    }





    return (
        <header>
            <div onMouseMove={(e) => handleOnMouseMove(e)} onMouseLeave={handleOnMouseLeave} >
                <div className=" container row-sb  ht-400">
                    <a href="#"><img className="main-logo" src="/assets/inversion_logo.png" /></a>
                    <nav ref={tabContainerRef}  /*onMouseEnter={(e) => handleMouseEnter(e)} onClick={handleOnClick} */ className='ht-p-400  row gp-300' role="tablist" aria-labelledby="channel-name">
                        <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="false" tabIndex={-1}>New & Featured</button>
                        <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabIndex={-1}>Women</button>
                        <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabIndex={-1}>Men</button>
                        <button id="tab-4" role="tab" aria-controls="tabPanel-4" aria-selected="false" tabIndex={-1}>Kids</button>
                        <button id="tab-5" role="tab" aria-controls="tabPanel-5" aria-selected="false" tabIndex={-1}>Custom</button>
                        <button id="tab-6" role="tab" aria-controls="tabPanel-6" aria-selected="false" tabIndex={-1}>Launch</button>
                        <button id="tab-7" role="tab" aria-controls="tabPanel-7" aria-selected="false" tabIndex={-1}>Gifts</button>
                    </nav>

                    <div className='row gp-250'>
                        <button ><img className='wd-150' src="/assets/icon_search.svg" alt="" /></button>
                        <button ><img className='wd-150' src="/assets/icon_favorite.svg" alt="" /></button>
                        <button ><img className='wd-150' src="/assets/icon_cart.svg" alt="" /></button>

                    </div>

                </div>

                <div onMouseEnter={handleFlyoutOnMouseEnter} onMouseLeave={handleFlyoutOnMouseLeave} ref={flyoutRef} data-visible={`${flyout_visible}`} className='header-flyout_body'>
                    <div id="tabPanel-1" role="tabpanel" tabIndex={0} aria-labelledby="tab-1">
                        <div className='col gp-200 fs-sm'>
                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>What's new</h2>
                                <ul className='regular col gp-100'>
                                    <li>Women's New Arrivals</li>
                                    <li>Men's New Arrivals</li>
                                    <li>Kid's New Arrivals</li>
                                    <li>How I Style It</li>
                                    <li>Back In Stock</li>
                                </ul>
                            </div>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Inversion Color</h2>
                                <ul className='regular col gp-100'>
                                    <li>Get Inspired</li>
                                    <li>Shop</li>
                                </ul>
                            </div>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Pride</h2>
                                <ul className='regular col gp-100'>
                                    <li><p>Explore</p></li>
                                    <li><p>Shop</p></li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div>
                                <img src="/assets/nav_conv.jpg" alt="" />
                            </div>
                            <h2 className='bold fs-md mg-bl-100'>Give Styles, Give Possibilities</h2>
                            <p className='fs-sm regular'>
                                Make style dreams come true with classic Chucks, boots, and more.
                            </p>
                        </div>

                        <div className='col gp-200 fs-sm'>
                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Featured</h2>
                                <ul className='regular col gp-100'>
                                    <li>Create Next</li>
                                    <li>Inversion All Stars</li>
                                </ul>
                            </div>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Skateboarding</h2>
                                <ul className='regular col gp-100'>
                                    <li>Skate's Latest</li>
                                    <li>Shop</li>
                                </ul>
                            </div>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Basketball</h2>
                                <ul className='regular col gp-100'>
                                    <li>Basketball's Latest</li>
                                    <li>Shop</li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div>
                                <img src="/assets/nav_stor.jpg" alt="" />
                            </div>
                            <h2 className='bold fs-md mg-bl-100'>50% Off Cold Weather Styles*</h2>
                            <p className='fs-sm regular'>
                                Bundle up and save big. Shop winter-ready styles, for less with code WINTER50
                            </p>

                        </div>
                    </div>


                    <div id="tabPanel-2" role="tabpanel" tabIndex={0} aria-labelledby="tab-2" className='fs-sm'>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Trending</h2>
                            <ul className='regular col gp-100'>
                                <li>Best Sellers</li>
                                <li>New Arrivals</li>
                                <li>Inversion Exclusives</li>
                                <li>How I Style It</li>
                                <li>Trending Now</li>
                                <li>Metallic Styles</li>
                                <li>Trending: Red Styles</li>
                                <li>Shoes $75 and Under</li>
                                <li>Sale</li>
                                <li>Gifts for Her</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shoes</h2>
                            <ul className='regular col gp-100'>
                                <li>All Shoes</li>
                                <li>High Top</li>
                                <li>Low Top</li>
                                <li>Platforms</li>
                                <li>Boots</li>
                                <li>Classic Chuck</li>
                                <li>Chuck 70</li>
                                <li>Run Star</li>
                                <li>Lift Platforms</li>
                                <li>One Star</li>
                                <li>Wide Width</li>
                                <li>Skateboarding</li>
                                <li>Basketball</li>
                                <li>Custom</li>
                            </ul>
                        </div>

                        <div className='col gp-300'>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Clothing</h2>
                                <ul className='regular col gp-100'>
                                    <li>All Clothing</li>
                                    <li>Tops & Shirts</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Pants & Shorts</li>
                                    <li>Matching Sets</li>
                                </ul>
                            </div>


                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Accessories</h2>
                                <ul className='regular col gp-100'>
                                    <li>All Accessories</li>
                                    <li>Bags & Backpacks</li>
                                    <li>Hats</li>
                                    <li>Socks</li>
                                    <li>Laceys</li>
                                    <li>KeyChains</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="tabPanel-3" role="tabpanel" tabIndex={0} aria-labelledby="tab-3" className='fs-sm'>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Trending</h2>
                            <ul className='regular col gp-100'>
                                <li>Explore Men's</li>
                                <li>Best Sellers</li>
                                <li>New Arrivals</li>
                                <li>Inversion Exclusives</li>
                                <li>How I Style It</li>
                                <li>Trending Now</li>
                                <li>Leather Styles</li>
                                <li>Trending: Monochrome</li>
                                <li>Shoes $75 and Under</li>
                                <li>Sale</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shoes</h2>
                            <ul className='regular col gp-100'>
                                <li>All Shoes</li>
                                <li>High Top</li>
                                <li>Low Top</li>
                                <li>Platforms</li>
                                <li>Boots</li>
                                <li>Classic Chuck</li>
                                <li>Chuck 70</li>
                                <li>Run Star</li>
                                <li>Lift Platforms</li>
                                <li>One Star</li>
                                <li>Wide Width</li>
                                <li>Skateboarding</li>
                                <li>Basketball</li>
                                <li>Custom</li>
                            </ul>
                        </div>

                        <div className='col gp-300'>

                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Clothing</h2>
                                <ul className='regular col gp-100'>
                                    <li>All Clothing</li>
                                    <li>Tops & Shirts</li>
                                    <li>Jackets & Sweatshirts</li>
                                    <li>Pants & Shorts</li>
                                    <li>Matching Sets</li>
                                </ul>
                            </div>


                            <div className='col gp-100'>
                                <h2 className='fs-md bold'>Accessories</h2>
                                <ul className='regular col gp-100'>
                                    <li>All Accessories</li>
                                    <li>Bags & Backpacks</li>
                                    <li>Hats</li>
                                    <li>Socks</li>
                                    <li>Laceys</li>
                                    <li>KeyChains</li>
                                </ul>
                            </div>

                        </div>


                    </div>

                    <div id="tabPanel-4" role="tabpanel" tabIndex={0} aria-labelledby="tab-4">

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Trending</h2>
                            <ul className='regular col gp-100'>
                                <li>Explore Kids</li>
                                <li>Best Sellers</li>
                                <li>New Arrivals</li>
                                <li>Top Rated</li>
                                <li>Shoes $50 & Under</li>
                                <li>Sale</li>
                                <li>Gift For Kids</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>By Age / Gender</h2>
                            <ul className='regular col gp-100'>
                                <li>Baby & Toddler (Ages 0-4)</li>
                                <li>Little Kids (Ages 0-4)</li>
                                <li>Big Kids (Ages 0-4)</li>
                                <li>Boys</li>
                                <li>Girls</li>
                                <li>Kids' Size Guide</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shoes</h2>
                            <ul className='regular col gp-100'>
                                <li>All Shoes</li>
                                <li>High Top</li>
                                <li>Low Top</li>
                                <li>Platforms</li>
                                <li>Boots</li>
                                <li>Easy-On / Easy-Off</li>
                                <li>Kids' Prints</li>
                                <li>Custom</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Clothing & Accessories</h2>
                            <ul className='regular col gp-100'>
                                <li>All Clothing & Accessories</li>
                                <li>Tops & T-Shirts</li>
                                <li>Jackets & Sweatshirts</li>
                                <li>Pants & Shorts</li>
                                <li>Matching Sets</li>
                            </ul>
                        </div>

                    </div>

                    <div id="tabPanel-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-5" className='fs-sm'>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Trending</h2>
                            <ul className='regular col gp-100'>
                                <li>Explore Custom</li>
                                <li>New Arrivals</li>
                                <li>Start From Scratch</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shop By Gender</h2>
                            <ul className='regular col gp-100'>
                                <li>All Custom</li>
                                <li>Womens</li>
                                <li>Mens</li>
                                <li>Kids</li>

                            </ul>
                        </div>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Custom By Style</h2>
                            <ul className='regular col gp-100'>
                                <li>All Custom</li>
                                <li>High Top</li>
                                <li>Low Top</li>
                                <li>Platforms</li>
                                <li>Boots</li>
                                <li>Slip-Ons</li>
                            </ul>
                        </div>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Start with a Collection</h2>
                            <ul className='regular col gp-100'>
                                <li>All Custom</li>
                                <li>Classic Chuck</li>
                                <li>Chuck 70</li>
                                <li>Wide Width</li>
                                <li>Extra Comfort Options</li>
                                <li>Match Your Mini</li>
                                <li>Embroidery</li>
                                <li>Prints</li>
                                <li>Glitter</li>
                                <li>Wedding</li>
                                <li>Leather</li>
                            </ul>
                        </div>

                    </div>

                    <div id="tabPanel-6" role="tabpanel" tabIndex={0} aria-labelledby="tab-6" className='fs-sm'>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Featured</h2>
                            <ul className='regular col gp-100'>
                                <li>Comme des Garcons</li>
                                <li>DRKSHDW</li>
                                <li>A-Cold-Wall</li>
                                <li>GOLF WANG</li>
                                <li>Stussy</li>
                                <li>Liverpool FC</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shop Launch</h2>
                            <ul className='regular col gp-100'>
                                <li>All Launch</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>The Latest</h2>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>


                    </div>

                    <div id="tabPanel-7" role="tabpanel" tabIndex={0} aria-labelledby="tab-7" className='fs-sm'>
                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Shop Gifts</h2>
                            <ul className='regular col gp-100'>
                                <li>All Gifts</li>
                                <li>Gifts For Her</li>
                                <li>Gifts For Him</li>
                                <li>Gifts For Kids</li>
                            </ul>
                        </div>

                        <div className='col gp-100'>
                            <h2 className='fs-md bold'>Gifts By Price</h2>
                            <ul className='regular col gp-100'>
                                <li>All Gifts</li>
                                <li>Gifts $50 & Under</li>
                                <li>Gifts $75 & Under</li>
                                <li>Gifts $100 & Under</li>
                            </ul>
                        </div>

                    </div>

                </div>



            </div>

        </header>
    )
}