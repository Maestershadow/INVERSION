export default function FilterSection() {
    return <div style={{

        fontSize: "0.75rem"
    }} className="filter-section">
        <div>
            <div className="row-sb">
                <h3 className="bold">Gender</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Men</p>
                    </div>
                    <p>147</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Women</p>
                    </div>
                    <p>161</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Kids</p>
                    </div>
                    <p>43</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Unisex</p>
                    </div>
                    <p>147</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Kids Gender</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Boys</p>
                    </div>
                    <p>28</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Girls</p>
                    </div>
                    <p>43</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Shoe Style</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>


            <div className="bdr bdr-grey ht-lg-100 grid-auto">
                <div className="center gp-100 bdr-bottom bdr-right bdr-grey">
                    <img className="wd-500" src="/assets/low_top.svg" alt="" />
                    <p>Low Top</p>
                </div>
                <div className="center gp-100 bdr-bottom bdr-grey">
                    <img className="wd-500" src="/assets/platform.svg" alt="" />
                    <p>Platform</p>
                </div>
                <div className="center gp-100 bdr-right bdr-grey">
                    <img className="wd-500" src="/assets/slip_on.svg" alt="" />
                    <p>Slip On</p>
                </div>
                <div className="center gp-100">
                    <img className="wd-500" src="/assets/mid_top.svg" alt="" />
                    <p>Mid Top</p>
                </div>


            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Width</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="grid-auto bdr ht-300 bdr-grey">
                <div className="center bdr-right bdr-grey">
                    <p>Standard</p>
                </div>
                <div className="center">
                    <p>Wide</p>
                </div>
            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Kids Age Range</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Baby & Toddler(Ages 0-4)</p>
                    </div>
                    <p>22</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Little Kids(Ages 4-8)</p>
                    </div>
                    <p>16</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Bigs Kids(Ages 8-12)</p>
                    </div>
                    <p>5</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Footwear Size (Adult)</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div>
                <table className="filter-table">
                    <tr>
                        <td>
                            <p>M 2.5</p>
                            <p>W 4.5</p>
                        </td>
                        <td>
                            <p>M 2.5</p>
                            <p>W 4.5</p>
                        </td>
                        <td>
                            <p>M 2.5</p>
                            <p>W 4.5</p>
                        </td>
                        <td>
                            <p>M 2.5</p>
                            <p>W 4.5</p>
                        </td>
                        <td>
                            <p>M 2.5</p>
                            <p>W 4.5</p>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <p>M 5</p>
                            <p>W 7</p>
                        </td>
                        <td>
                            <p>M 5.5</p>
                            <p>W 7.5</p>
                        </td>
                        <td>
                            <p>M 6</p>
                            <p>W 8</p>
                        </td>
                        <td>
                            <p>M 6.5</p>
                            <p>W 8.5</p>
                        </td>
                        <td>
                            <p>M 7</p>
                            <p>W 9</p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>M 7.5</p>
                            <p>W 9.5</p>
                        </td>
                        <td>
                            <p>M 8</p>
                            <p>W 10</p>
                        </td>
                        <td>
                            <p>M 8.5</p>
                            <p>W 10.5</p>
                        </td>
                        <td>
                            <p>M 9</p>
                            <p>W 11</p>
                        </td>
                        <td>
                            <p>M 9.5</p>
                            <p>W 11.5</p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>M 10</p>
                            <p>W 12</p>
                        </td>
                        <td>
                            <p>M 10.5</p>
                            <p>W 12.5</p>
                        </td>
                        <td>
                            <p>M 11</p>
                            <p>W 13</p>
                        </td>
                        <td>
                            <p>M 11.5</p>
                            <p>W 13.5</p>
                        </td>
                        <td>
                            <p>M 12</p>
                            <p>W 14</p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>M 12.5</p>
                            <p>W 14.5</p>
                        </td>
                        <td>
                            <p>M 13</p>
                            <p>W 15</p>
                        </td>
                        <td>
                            <p>M 13.5</p>
                            <p>W 15.5</p>
                        </td>
                        <td>
                            <p>M 14</p>
                            <p>W 16</p>
                        </td>
                        <td>
                            <p>M 14.5</p>
                            <p>W 16.5</p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>M 15</p>
                            <p>W 17</p>
                        </td>
                        <td>
                            <p>M 15.5</p>
                            <p>W 17.5</p>
                        </td>
                        <td>
                            <p>M 16</p>
                            <p>W 18</p>
                        </td>
                        <td>
                            <p>M 16.5</p>
                            <p>W 18.5</p>
                        </td>
                        <td>
                            <p>M 17</p>
                            <p>W 19</p>
                        </td>

                    </tr>
                </table>
            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Footwear Size (Kid's)</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="kids">
                <table className="filter-table">
                    <tr>
                        <td>2C</td>
                        <td>3C</td>
                        <td>4C</td>
                        <td>5C</td>
                        <td>6C</td>
                    </tr>
                    <tr>
                        <td>7C</td>
                        <td>8C</td>
                        <td>9C</td>
                        <td>10C</td>
                        <td>10.5C</td>
                    </tr>
                    <tr>
                        <td>11C</td>
                        <td>11.5C</td>
                        <td>12C</td>
                        <td>12.5C</td>
                        <td>13C</td>
                    </tr>
                    <tr>
                        <td>13.5C</td>
                        <td>1Y</td>
                        <td>1.5Y</td>
                        <td>2Y</td>
                        <td>2.5Y</td>
                    </tr>
                    <tr>
                        <td>3Y</td>
                        <td>3.5Y</td>
                        <td>4Y</td>
                        <td>4.5Y</td>
                        <td>5Y</td>
                    </tr>


                </table>
            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Color</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="color-swatch">
                <div style={{ backgroundColor: "white" }}></div>
                <div style={{ backgroundColor: "black" }}></div>
                <div style={{ backgroundColor: "blue" }}></div>
                <div style={{ backgroundColor: "brown" }}></div>
                <div style={{ backgroundColor: "red" }}></div>
                <div style={{ backgroundColor: "green" }}></div>
                <div style={{ backgroundColor: "grey" }}></div>
                <div style={{ backgroundColor: "pink" }}></div>
                <div style={{ backgroundColor: "purple" }}></div>
                <div style={{ backgroundColor: "yellow" }}></div>
                <div style={{ backgroundColor: "beige" }}></div>
                <div style={{ backgroundColor: "orange" }}></div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Icon</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Chuck Taylor All Star</p>
                    </div>
                    <p>127</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Chuck 70</p>
                    </div>
                    <p>27</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>One Star</p>
                    </div>
                    <p>12</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Jack Purcell</p>
                    </div>
                    <p>2</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Features</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Customizable</p>
                    </div>
                    <p>80</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Easy Closure</p>
                    </div>
                    <p>22</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>#xtra Comfort</p>
                    </div>
                    <p>14</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Material</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Canvas</p>
                    </div>
                    <p>140</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Leather</p>
                    </div>
                    <p>23</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Suede</p>
                    </div>
                    <p>17</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Cotton</p>
                    </div>
                    <p>4</p>
                </div>

                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Strech</p>
                    </div>
                    <p>3</p>
                </div>

            </div>
        </div>

        <div>
            <div className="row-sb">
                <h3 className="bold">Trending</h3>
                <span className="material-symbols-outlined text-black">remove</span>
            </div>
            <div className="col gp-200">
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Custom</p>
                    </div>
                    <p>80</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Embroidery</p>
                    </div>
                    <p>18</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Limited Edition</p>
                    </div>
                    <p>16</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Wedding</p>
                    </div>
                    <p>9</p>
                </div>

                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Chuck Taylor All Star Move</p>
                    </div>
                    <p>7</p>
                </div>

                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Run Star</p>
                    </div>
                    <p>5</p>
                </div>

                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>CX</p>
                    </div>
                    <p>3</p>
                </div>
                <div className="row-sb">
                    <div className="row gp-150">
                        <input type="checkbox" name="" id="" />
                        <p>Designed In Italy</p>
                    </div>
                    <p>2</p>
                </div>


            </div>
        </div>

        <div className="ht-700">

        </div>
        <div className="ht-700">

        </div>
        <div className="ht-700">

        </div>


    </div>
}