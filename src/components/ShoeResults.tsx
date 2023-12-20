import { Link } from "react-router-dom"
import { shoeSectionData } from "../utils/const_data/shoeSectionData"

export default function ShoeResults() {
    return <ul className="shoe-results">
            {shoeSectionData.map((shoeData) => {
                return <li key={shoeData.id}>
                    <Link  to={`:${shoeData.id}/checkout`} className="shoe-content col gp-250">
                        <div className='rel-content '>
                            <img className="modular_img" src={shoeData.imgUrl} alt="" />
                            <div className="abs-title row-sb">
                                <span className="material-symbols-outlined">favorite</span>
                                <h3 className="fs-xxsm bold uppercase">{shoeData.designLocation}</h3>
                            </div>
                            <button className='add-tocart'>
                                <p>Add to Cart</p>
                                <div className="horizontal-line bg-light-grey"></div>
                                <span className="material-symbols-outlined text-almost-black">shopping_cart</span>

                            </button>
                        </div>

                        <div className='col gp-100'>
                            <h4>{shoeData.descriptionTitle}</h4>
                            <p>{shoeData.descriptionPrice}</p>
                            <p className='fs-xxsm bold text-grey uppercase'>{shoeData.descriptionType}</p>
                        </div>

                    </Link>

                </li>
            })}
        </ul>


}