export default function FilterBar() {
    return <div className="filter-bar">
        <div className="container">
            <div className="pd-inline-50 row bdr-right ht-p-400 bdr-light-grey">
                 <p className="wd-p-400 row-sb">Hide Filters  <span className="material-symbols-outlined fs-sm text-black">discover_tune</span></p>
            </div>
            <div className="pd-inline-150 row bdr-right ht-p-400 bdr-light-grey">
                 <p className="bold">204 results </p>
            </div>
            <div className="pd-inline-50 row ht-p-400 ">
                 <p className="text-grey">Sort By:</p>
                 <select  name="Featured" >
                    <option value="Featured"> Featured</option>
                    <option value="Newest To Oldest"> Newest To Oldest</option>
                    <option value="Price Low To High"> Price Low To High</option>
                    <option value="Price High To Low"> Price High To Low</option>
                    <option value="Ratings High To Low"> Ratings High To Low</option>
                 </select>
            </div>
           
        </div>
    </div>
}