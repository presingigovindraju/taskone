import React from "react";
import "./Signup.css";
import logo from "../Images/logo (2).png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Signup = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    color: "",
    size: "",
    style: "",
    rigging: "",
  });

  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Product Options");
  const [visibleRows, setVisibleRows] = useState(1);
  const itemsPerRow = 5;
  const images = [
    "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
    "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv_FUQNcU41MTz8NPYkrHaBDIGwsd8TUULQ&s",
    "data:image/jpeg;base64,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",
  ];

  const [thumbnailOrder, setThumbnailOrder] = useState(images);
  const [mainImage, setMainImage] = useState(images[0]);

  const handleSelect = (type, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleUpClick = () => {
    const idx = thumbnailOrder.findIndex((img) => img === mainImage);
    let newIdx;
    if (idx > 0) {
      newIdx = idx - 1; 
    } else {
      newIdx = thumbnailOrder.length - 1; 
    }

    setMainImage(thumbnailOrder[newIdx]);
  };

  const handleDownClick = () => {
    const idx = thumbnailOrder.findIndex((img) => img === mainImage);
    let newIdx;
    if (idx < thumbnailOrder.length - 1) {
      newIdx = idx + 1; 
    } else {
      newIdx = 0; 
    }

    setMainImage(thumbnailOrder[newIdx]);
  };

  // const handleThumbnailClick = (img) => {
  //   setMainImage(img);
  // };

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
          <input type="text" name="text" placeholder="Search..." />
          <div id="firstSectionInSearMixTag">
            <div id="firstSectionInProTag">
              <p>in:</p>
              <p className="ProductsColorChange">Products</p>
              {/* <i className=" fa-solid fa-angle-down"></i> */}
            </div>
            {/* <i class="searchSymbole fa-solid fa-magnifying-glass"></i> */}
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
                <i
                  className="arrowSizing fa-solid fa-angle-up"
                  onClick={handleUpClick}
                ></i>

                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setMainImage(img)}
                    className={`thumbnailImage ${
                      mainImage === img ? "activeThumbnail" : ""
                    }`}
                  />
                ))}

                <div className="videoThumb">
                  <img src={images[3]} alt="video" />
                  <i className="fa-regular fa-circle-play"></i>
                </div>

                <i
                  className="arrowSizing fa-solid fa-angle-down"
                  onClick={handleDownClick}
                ></i>
              </div>
            </div>

            <div className="mainProductImg">
              <img src={mainImage} alt="main product" />
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

          {activeTab === "Features" && (
            <div className="accessoriesGrid">
              {[...Array(5)].map((_, i) => (
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
          )}

          {activeTab === "Specifications" && (
            // <div className="specificationsTableContainer">
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
            // </div>
          )}

          {activeTab === "Resources/Downloads" && (
            <div className="SpecificationsDownLoadOne">
              <div>
                <i class="fa-solid fa-book-open"></i>
                <p>User Manual</p>
                <button type="button">Download</button>
              </div>
              <div>
                <i class="fa-solid fa-gear"></i>
                <p>Parts Diagram</p>
                <button type="button">Download</button>
              </div>
              <div>
                <i class="fa-regular fa-file-lines"></i>
                <p>Catalog Page</p>
                <button type="button">Download</button>
              </div>
            </div>

          )}
        </div>
      </div>

      <div className="fifthSection">
        <h2 className="accessoriesTitle">Accessories</h2>

        <div className="accessoriesGrid">
          {[...Array(visibleRows * itemsPerRow)].map((_, i) => (
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

        <div
          className="seeAllWrapper"
          onClick={() => setVisibleRows(visibleRows + 1)}
        >
          <p className="seeAllBtn">See All</p>
          <i className="arrowSizing fa-solid fa-angle-down"></i>
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
