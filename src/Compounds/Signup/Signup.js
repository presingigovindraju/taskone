import React from "react";
import "./Signup.css";
import logo from "../Images/logo (2).png";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import menu icon

const Signup = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    color: "",
    size: "",
    style: "",
    rigging: "",
  });
    const [showMenu, setShowMenu] = useState(false);


  const handleSelect = (type, value) => {
    setSelectedOptions((prev) => ({ ...prev, [type]: value }));
  };

  console.log(selectedOptions);

  return (
    <div className="mainSignup">
      {/* <div id="firstSection">
        <img id="firstSectionImgSIzing" src={logo} alt="img_logo" />
        <div id="firstSectionAnchorTags">
          <a className="anchorTagAttribute" href="#products">
            PRODUCTS
          </a>
          <a className="anchorTagAttribute" href="#products">
            SUPPORT & SERVICES
          </a>
          <a className="anchorTagAttribute" href="#products">
            WHO WE SERVE
          </a>
          <a className="anchorTagAttribute" href="#products">
            WHO WE ARE
          </a>
        </div>
        <div id="firstSectionSearchTag">
          <p>Search...</p>
          <div id="firstSectionInSearMixTag">
            <div id="firstSectionInProTag">
              <p>in:Products</p>
              <i className=" fa-solid fa-angle-down"></i>
            </div>
            <i class="searchSymbole fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div> */}
      <div id="firstSection">
        <img id="firstSectionImgSIzing" src={logo} alt="img_logo" />
        <div id="firstSectionAnchorTags">
          <a className="anchorTagAttribute" href="#products">
            PRODUCTS
          </a>
          <a className="anchorTagAttribute" href="#products">
            SUPPORT & SERVICES
          </a>
          <a className="anchorTagAttribute" href="#products">
            WHO WE SERVE
          </a>
          <a className="anchorTagAttribute" href="#products">
            WHO WE ARE
          </a>
        </div>
        <div id="firstSectionSearchTag">
          <p>Search...</p>
          <div id="firstSectionInSearMixTag">
            <div id="firstSectionInProTag">
              <p>in:Products</p>
              <i className=" fa-solid fa-angle-down"></i>
            </div>
            <i class="searchSymbole fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>

      {/* <div id="secoundSection">
        <div className="secoundBlock cleam">
          <h3 id="homeColor">home / </h3>
          <p className="signColorOne">Sign in</p>
        </div>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div> */}

      <div id="secoundSection">
        {/* <div className="breadcrumbPath">
          <p>
            Home / Products / Mobility / Wheelchairs / Standard Wheelchairs /{" "}
            <span>Silver Sport 1 Wheelchair</span>
          </p>
        </div> */}
         <div className="breadcrumbPath">
      <p className="breadcrumbText">
        Home / Products / Mobility / Wheelchairs / Standard Wheelchairs /{" "}
        <span>Silver Sport 1 Wheelchair</span>
      </p>

      {/* Hamburger icon for mobile */}
      <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
        <FaBars />
      </div>

      {/* Optional dropdown menu */}
      {showMenu && (
        <div className="mobileBreadcrumbDropdown">
          <p>Home</p>
          <p>Products</p>
          <p>Mobility</p>
          <p>Wheelchairs</p>
          <p>Standard Wheelchairs</p>
          <p><strong>Silver Sport 1 Wheelchair</strong></p>
        </div>
      )}
    </div>

        <div className="productLayoutTotalBlock">
          <div className="productLayout">
            <div className="leftImages">
              <div className="sideThumbnails">
                <i class="arrowSizing fa-solid fa-angle-up"></i>
                <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="thumb1"
                />
                <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="thumb2"
                />
                <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="thumb3"
                />
                <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="thumb4"
                />
                <div className="videoThumb">
                  <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="thumb4"
                />
                  <i class="fa-regular fa-circle-play"></i>
                </div>
                <i class="arrowSizing fa-solid fa-angle-down"></i>
              </div>

              
            </div>

            <div className="mainProductImg">
                <img
                  src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                  alt="main"
                />
                <p className="zoomText">Roll over image to zoom in</p>
              </div>

            {/* <div className="productDetails">
              <h2>
                Silver Sport 2 Wheelchair with Full Arms and Swing-Away
                Removable Footrests
              </h2>
              <p className="productCode">
                Item # SSP218DDA-ELR | UPC # 822383140414 | HCPCS # E4002
              </p>
              <p className="productPrice">$262.23</p>

              <div className="selectors">
                <div className="optionGroup">
                  <label>Color</label>
                  <div className="colorDots">
                    <span className="dot red"></span>
                    <span className="dot blue"></span>
                    <span className="dot black"></span>
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Seat Size</label>
                  <div className="buttonGroup">
                    <button>16"</button>
                    <button className="active">18"</button>
                    <button>20"</button>
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Arm Style</label>
                  <div className="buttonGroup">
                    <button className="active">Desk</button>
                    <button>Full</button>
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Front Rigging</label>
                  <div className="buttonGroup">
                    <button className="active">Footrests</button>
                    <button>Legrests</button>
                  </div>
                </div>
              </div>

              <div className="productBuyBox">
                <p className="inStock">In Stock</p>
                <p className="deliveryInfo">
                  Est Delivery Date: <span>11/10/24</span>
                </p>

                <div className="buyOptions">
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <select>
                    <option>4/cs</option>
                    <option>2/cs</option>
                  </select>
                </div>

                <div className="actionButtons">
                  <button className="addToCart">Add to Cart</button>
                  <button className="buyNow">Buy Now</button>
                </div>
              </div>
            </div>  */}
          </div>

          <div className="productDetailsPurchaseBoxTotally">
            <div className="productDetails">
              <div className="productDetailsOneSection">
                <h2>
                  Silver Sport 2 Wheelchair with Full Arms and Swing-Away
                  Removable Footrests
                </h2>
                
                <div className="productCode">
                  <div>
                    <p>Item # SSP218DDA-ELR</p>
                    <p className="productCodeLove">
                      <i class="lovedOne fa-regular fa-heart"></i>
                      Save to Favorites
                    </p>
                  </div>
                  <div>
                    <p>UPC # 822383140414</p>
                    <p>HCPCS # E4002</p>
                  </div>
                </div>
                <p className="productPrice">$262.23</p>
              </div>

              
              <div className="productDetailsTwoSection">
                <div className="optionGroup">
                  <label>Color</label>
                  <div className="colorDots">
                    {["red", "blue", "black"].map((color) => (
                      <span
                        key={color}
                        className={`dot ${color} ${
                          selectedOptions.color === color ? "selected active" : ""
                        }`}
                        onClick={() => handleSelect("color", color)}
                      ></span>
                    ))}
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Seat Size</label>
                  <div className="buttonGroup sizegap">
                    {['16"', '18"', '20"'].map((size) => (
                      <button
                        key={size}
                        className={
                          selectedOptions.size === size ? "active" : ""
                        }
                        onClick={() => handleSelect("size", size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Arm Style</label>
                  <div className="buttonGroup styleGap">
                    {["Desk", "Full"].map((style) => (
                      <button
                        key={style}
                        className={
                          selectedOptions.style === style ? "active" : ""
                        }
                        onClick={() => handleSelect("style", style)}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="optionGroup">
                  <label>Front Rigging</label>
                  <div className="buttonGroup riggingGap">
                    {["Footrests", "Legrests"].map((rigging) => (
                      <button
                        key={rigging}
                        className={
                          selectedOptions.rigging === rigging ? "active" : ""
                        }
                        onClick={() => handleSelect("rigging", rigging)}
                      >
                        {rigging}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="seeAllAchorTag">
                  <a
                    href="https://www.drivemedical.com/customer-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See All Product Options
                  </a>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>

              <div className="productDetailsThreeSection">
                {/* <p className="inStock">In Stock</p>
                <p className="deliveryInfo">
                  Est Delivery Date: <span>11/10/24</span>
                </p>

                <div className="buyOptions">
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <select>
                    <option>4/cs</option>
                    <option>2/cs</option>
                  </select>
                </div>

                <div className="actionButtons">
                  <button className="addToCart">Add to Cart</button>
                  <button className="buyNow">Buy Now</button>
                </div> */}
                <h3>About This Item</h3>
                <p>
                  If you are seeking an easy, transportable mobility option,
                  then look no further than Drive Medical’s Silver Sport
                  Transport Wheelchair. The durable steel frame with an
                  attractive silver vein finish and durable vinyl upholstery...
                </p>
                <div className="seeMoreAchorTag">
                  <a
                    href={"https://www.drivemedical.com/customer-service"}
                    target="_blank"
                  >
                    See more
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
            {/* <div id="purchaseBoxTotally">
              <div className="purchaseBox">
                <p className="purchasePrice">$262.23</p>
                <p className="inStockText">In Stock</p>
                <p className="deliveryText">
                  Last Order Date: <strong>11/10/24</strong>
                  <br />
                  Est Delivery Date: <strong>11/10/24</strong>
                </p>

                <div className="quantitySelects">
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <select>
                    <option>4/cs</option>
                    <option>2/cs</option>
                  </select>
                </div>

                <button className="addToCartBtn">Add to Cart</button>
                <button className="buyNowBtn">Buy Now</button>
              </div>

              <div className="replacementPartBox">
                <p className="replacementTitle">
                  <i className="fa-solid fa-gear"></i> Looking for Replacement
                  Parts?
                </p>
                <p>
                  To find replacement parts or accessories for this product,
                  visit the <a href="#">Parts Finder</a> page.
                </p>
              </div>
            </div> */}
          </div>


          <div className="purchaseBoxTotallyFull">
            <div id="purchaseBoxTotally">
              <div className="purchaseBox">
                <p className="purchasePrice">$262.23</p>
                <p className="inStockText">In Stock</p>
                <p className="deliveryText">
                  <p>Last Order Date: <strong>11/10/24</strong></p>
                  <p className="deliveryTextDeliveryTo">Deliver to <span>Chris - Huntington</span></p>
                  <p>11743</p>
                  <p>Est Delivery Date: <strong>11/10/24</strong></p>
                </p>

                <div className="quantitySelects">
                  <div className="optionSelect  optionSelectFirstones">
                  <label>Quantity</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  </div>
                  <div className="optionSelect">
                  <label>UOM</label>
                  <select>
                    <option>4/cs</option>
                    <option>2/cs</option>
                  </select>
                  </div>
                </div>

                <button className="addToCartBtn ">Add to Cart</button>
                <button className="buyNowBtn">Buy Now</button>
              </div>

              <div className="replacementPartBox">
                <p className="replacementTitle">
                  <i className="fa-solid fa-gear"></i> Looking for Replacement
                  Parts?
                </p>
                <p className="partsFinder">
                  To find replacement parts or accessories for this product,
                  visit the <a href="#">Parts Finder</a> page.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <div className="thirdSection">

      </div> */}

      {/* <div className="thirdSection">
        <div className="tabHeader">
          <button className="active">Product Options</button>
          <button>Features</button>
          <button>Specifications</button>
          <button>Resources/Downloads</button>
        </div>

        <table className="productOptionsTable">
          <thead>
            <tr>
              <th>Item #</th>
              <th>UPC</th>
              <th>Seat Size</th>
              <th>Front Rigging</th>
              <th>HCPCS</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((item, i) => (
              <tr key={i}>
                <td>PLA416FBUARAD-ELR</td>
                <td>822383005263</td>
                <td>16"</td>
                <td>Elevating Leg Rest</td>
                <td>$299.99</td>
                <td>$299.99</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>
                  <select>
                    <option>1/EACH</option>
                  </select>
                </td>
                <td>
                  <button className="addToCartBtn">Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="thirdSection">
        <div className="tabHeader">
          <button className="active">Product Options</button>
          <button>Features</button>
          <button>Specifications</button>
          <button>Resources/Downloads</button>
        </div>
       

       <div className="tableWrapper">
        <table className="productOptionsTable">
          <thead>
            <tr>
              <th>Item #</th>
              <th>UPC</th>
              <th>Seat Size</th>
              <th>Front Rigging</th>
              <th>HCPCS</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i}>
                <td data-label="Item #">PLA416FBUARAD-ELR</td>
                <td data-label="UPC">822383005263</td>
                <td data-label="Seat Size">16"</td>
                <td data-label="Front Rigging">Elevating Leg Rest</td>
                <td data-label="HCPCS">$299.99</td>
                <td data-label="Price">$299.99</td>
                <td data-label="Quantity">
                  <input type="number" defaultValue={1} />
                </td>
                <td data-label="Unit">
                  <select>
                    <option>1/EACH</option>
                  </select>
                </td>
                <td data-label="Select">
                  <button className="addToCartBtn">Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      <div className="fifthSection">
        <h2 className="accessoriesTitle">Accessories</h2>
        <div className="accessoriesGrid">
          {[...Array(5)].map((item, i) => (
            <div key={i} className="accessoryCard">
              <img
                src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
                alt="Heel Strap"
              />
              <div className="accessoryDetails">
                <h3>Heel Strap</h3>
                <p>Item # STDS831</p>
                <h4>$262.23</h4>
                <button className="addToCartBtn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="seeAllWrapper">
          <p className="seeAllBtn">
            See All <span>+</span>
          </p>
        </div>
      </div>

      <div id="products" className="fourthBlock">
        <div id="fourthBlockTotally">
          <div id="fourthBlockfirstOne">
            <img
              src="https://shop.drivemedical.com/_ui/responsive/common/images/LOGO.svg"
              alt="logoOne"
            />
            <div id="fourthBlockfirstOneAppSymbole">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>

            <div id="forHr"></div>

            <p id="fourthBlockfirstOneBigParagraphOne">
              © 2023 Medical Depot, Inc. dba Drive DeVilbiss Healthcare, 99
              Seaview Boulevard, Port Washington, NY 11050. All trademarks used
              in association with the sale of products of Drive DeVilbiss
              Healthcare are trademarks owned by Medical Depot, Inc. All other
              trademarks, trade names, service marks and logos referenced herein
              belong to their respective companies
            </p>

            <p id="fourthBlockfirstOneShortParagraphOne">
              View the Terms & Conditions and Privacy Policy
            </p>
          </div>

          <div className="products" id="fourthBlockSecoundOne">
            <div className="fourthBlockSecoundOneFirstOne">
              <div className=" fourthBlockSecoundOneFirstOneThree">
                {/* <caption>Products</caption> */}
                <ul>
                  {/* <li className="heading">Products</li> */}
                  {/* <caption>Products</caption> */}
                  <p className="list-heading">Products</p>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Beds
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Commodes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Inspired
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Mobity
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      patient Room
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Personal Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Respiratory
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Sleep Terapy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Therapeutic support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </div>

              <div className="fourthBlockSecoundOneFirstOneThree">
                <ul>
                  {/* <li className="heading">Support</li> */}
                  {/* <caption>Support</caption> */}
                  <p className="list-heading">Support</p>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Articles &Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Submit a Product Idea
                    </a>
                  </li>
                </ul>
              </div>

              <div className="fourthBlockSecoundOneFirstOneThree">
                <ul>
                  {/* <li className="heading">Who Are We</li> */}
                  {/* <caption>
                  <p>Who Are We</p>
                </caption> */}
                  <p className="list-heading">Who Are We</p>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Work With Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="fourthBlockSecoundOneSecoundOne">
              <div className="fourthBlockSecoundOneSecoundOneTwo">
                <ul>
                  {/* <li className="heading">Who We Serve</li> */}
                  {/* <caption>Who We Serve</caption> */}
                  <p className="list-heading">Who We Serve</p>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Homecare
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Providers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Long Term Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Healthcare
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Professionals
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      patient Room
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Personal Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Government
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Retailers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="fourthBlockSecoundOneSecoundOneTwo">
                <ul>
                  {/* <li className="heading">Account</li> */}
                  {/* <caption>Account</caption> */}
                  <p className="list-heading">Account</p>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Cancellations
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/@30.4380174,-84.3038144,17z"
                      target="_blank"
                    >
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="lastBlock">
        <img
          className="logoMinimizing spacing"
          src="https://shop.drivemedical.com/_ui/responsive/common/images/DeVilbiss_logo.png"
          alt="img"
        />
        <img
          className="logoMinimizing spacing"
          src="https://shop.drivemedical.com/_ui/responsive/common/images/Drive_DeVilbiss_logo.png"
          alt="img"
        />
        <img
          className="logoMinimizing spacing"
          src="https://shop.drivemedical.com/_ui/responsive/common/images/Inovo_logo.png"
          alt="img"
        />
        <div className="lastBlockLogoManupulation spacing">
          <img
            src="https://shop.drivemedical.com/_ui/responsive/common/images/v2-footer-tuv-logo.png"
            alt="img"
          />
          <p>
            MDSAP Certificate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EC Certificate
          </p>
        </div>
        <img
          className="spacing"
          src="https://shop.drivemedical.com/_ui/responsive/common/images/v2-footer-tuv-logo.png"
          alt="img"
        />
        <div className="lastBlockLogoManupulation spacing">
          <img
            src="https://shop.drivemedical.com/_ui/responsive/common/images/v2-footer-tuv-logo.png"
            alt="img"
          />
          <p>
            MDSAP Certificate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EC Certificate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
