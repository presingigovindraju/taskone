import React from "react";
import "./Signup.css";
import logo from "../Images/logo (2).png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const thumbnails = [
    "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
    ];

const Signup = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    color: "",
    size: "",
    style: "",
    rigging: "",
  });
   const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Product Options");

  const handleSelect = (type, value) => {
    setSelectedOptions((prev) => ({ ...prev, [type]: value }));
  };

  console.log(selectedOptions);

  return (
    <div className="mainSignup">
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

      <div id="secoundSection">
        <div className="breadcrumbPath">
          <p className="breadcrumbText">
            Home / Products / Mobility / Wheelchairs / Standard Wheelchairs /{" "}
            <span>Silver Sport 1 Wheelchair</span>
          </p>

          <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </div>

          {showMenu && (
            <div className="mobileBreadcrumbDropdown">
              <p>Home</p>
              <p>Products</p>
              <p>Mobility</p>
              <p>Wheelchairs</p>
              <p>Standard Wheelchairs</p>
              <p>
                <strong>Silver Sport 1 Wheelchair</strong>
              </p>
            </div>
          )}
        </div>

        <div className="productLayoutTotalBlock">
          {/* <div className="productLayout">
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

            
          </div> */}
           <div className="productLayout">
      <div className="leftImages">
        <div className="sideThumbnails">
          <i className="arrowSizing fa-solid fa-angle-up"></i>

          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`thumb-${index}`}
              onClick={() => setMainImage(thumb)}
              className="thumbnailImage"
              style={{ cursor: "pointer", marginBottom: "5px", width: "50px" }}
            />
          ))}

          <div className="videoThumb">
            <img src={thumbnails[0]} alt="video" />
            <i className="fa-regular fa-circle-play"></i>
          </div>

          <i className="arrowSizing fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className="mainProductImg">
        <img src={mainImage} alt="main" />
        <p className="zoomText">Roll over image to zoom in</p>
      </div>
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
                          selectedOptions.color === color
                            ? "selected active"
                            : ""
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
            
          </div>

          <div className="purchaseBoxTotallyFull">
            <div id="purchaseBoxTotally">
              <div className="purchaseBox">
                <p className="purchasePrice">$262.23</p>
                <p className="inStockText">In Stock</p>
                <p className="deliveryText">
                  <p>
                    Last Order Date: <strong>11/10/24</strong>
                  </p>
                  <p className="deliveryTextDeliveryTo">
                    Deliver to <span>Chris - Huntington</span>
                  </p>
                  <p>11743</p>
                  <p>
                    Est Delivery Date: <strong>11/10/24</strong>
                  </p>
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

     

      
      <div className="thirdSection">
       
        <div className="tabHeader">
          {[
            "Product Options",
            "Features",
            "Specifications",
            "Resources/Downloads",
          ].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        
        <div className="tableWrapper">
          {activeTab === "Product Options" && (
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
          )}

          {activeTab === "Features" && <p>Features</p>}
         
          {activeTab === "Specifications" && (
            <div className="specificationsTableContainer">
              <div className="specTables">
                <table className="specTable">
                  <tbody>
                    <tr>
                      <th>Primary Product Color</th>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <th>Primary Product Material</th>
                      <td>Steel</td>
                    </tr>
                    <tr>
                      <th>Overall Product Height</th>
                      <td>36"</td>
                    </tr>
                    <tr>
                      <th>Overall Product Length</th>
                      <td>42"</td>
                    </tr>
                    <tr>
                      <th>Overall Product Width</th>
                      <td>26"</td>
                    </tr>
                    <tr>
                      <th>Folded Dimensions</th>
                      <td>42" x 12.5" x 36"</td>
                    </tr>
                    <tr>
                      <th>Base Shipping Height</th>
                      <td>36.6</td>
                    </tr>
                    <tr>
                      <th>Base Shipping Length</th>
                      <td>32.48</td>
                    </tr>
                    <tr>
                      <th>Base Shipping Width</th>
                      <td>11.42</td>
                    </tr>
                    <tr>
                      <th>Base Shipping Weight</th>
                      <td>47.69</td>
                    </tr>
                    <tr>
                      <th>Actual Product Weight</th>
                      <td>44 lbs</td>
                    </tr>
                    <tr>
                      <th>Product Weight Capacity</th>
                      <td>300 lb</td>
                    </tr>
                    <tr>
                      <th>Seat Width</th>
                      <td>18"</td>
                    </tr>
                  </tbody>
                </table>

                <table className="specTable">
                  <tbody>
                    <tr>
                      <th>Seat Depth</th>
                      <td>16"</td>
                    </tr>
                    <tr>
                      <th>Seat to Floor Height</th>
                      <td>17.5"-19.5"</td>
                    </tr>
                    <tr>
                      <th>Seat to Armrest Height</th>
                      <td>8"</td>
                    </tr>
                    <tr>
                      <th>Armrest Length</th>
                      <td>14"</td>
                    </tr>
                    <tr>
                      <th>Armrest to Floor Height</th>
                      <td>27.5"</td>
                    </tr>
                    <tr>
                      <th>Closed Width</th>
                      <td>12.5"</td>
                    </tr>
                    <tr>
                      <th>Number of Wheels</th>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th>Rear Wheels</th>
                      <td>24" x 1"</td>
                    </tr>
                    <tr>
                      <th>Casters</th>
                      <td>8"</td>
                    </tr>
                    <tr>
                      <th>Brakes</th>
                      <td>Push-To-Lock Wheel Brakes</td>
                    </tr>
                    <tr>
                      <th>Back of Chair Height</th>
                      <td>16"</td>
                    </tr>
                    <tr>
                      <th>Overall Length /w Riggings</th>
                      <td>42"</td>
                    </tr>
                    <tr>
                      <th>Warranty</th>
                      <td>3 Year Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "Resources/Downloads" && (
            <p>Resources and downloads</p>
          )}
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
                
                <ul>
                 
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
