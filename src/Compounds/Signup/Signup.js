import React from "react";
import "./Signup.css";
import logo from "../Images/logo (2).png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import chairOne from "../Images/chairOne.png";
import chairTwo from "../Images/chairTwo.png";
import chairThree from "../Images/chairThree.jpeg";
import chairFour from "../Images/chairFour.jpg";
import Navbar from "../Navbar/Navbar";

const Signup = ({setHide}) => {
  const [selectedOptions, setSelectedOptions] = useState({
    color: "red",
    size: '18"',
    style: "Desk",
    rigging: "Legrests",
  });

  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Product Options");
  const [visibleRows, setVisibleRows] = useState(1);
  const itemsPerRow = 5;

  // const images = [
  //   "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  //   "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
  //   "https://www.pngkey.com/png/detail/80-808253_strongback-premium-lightweight-portable-wheelchair-wheel.png",
  //   "https://www.pngkey.com/png/detail/80-808430_patented-axial-technology-motorized-wheelchair.png"
  // ];
  const images = [chairFour,chairThree,chairOne,chairTwo];

  
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
   
  const shortText =
    "If you are seeking an easy, transportable mobility option, then look no further than Drive Medical’s Silver Sport Transport Wheelchair. The durable steel frame with an attractive silver vein finish and durable vinyl upholstery";

  const moreText =
    " . If you are seeking an easy, transportable mobility option, then look no further than Drive Medical’s Silver Sport Transport Wheelchair. The durable steel frame with an attractive silver vein finish and durable vinyl upholstery If you are seeking an easy, transportable mobility option, then look no further than Drive Medical’s Silver Sport Transport Wheelchair. The durable steel frame with an attractive silver vein finish and durable vinyl upholstery";

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

//   const downloadImage = async () => {
//   const imageUrl = mainImage;

//   try {
//     const response = await fetch(imageUrl, { mode: 'no-cors' }); 
//     const blob = await response.blob();
//     const blobUrl = URL.createObjectURL(blob);

//     const link = document.createElement('a');
//     link.href = blobUrl;
//     link.download = 'downloaded-image.jpg';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(blobUrl);
//   } catch (error) {
//     console.error('Image download failed:', error);
//     alert("Failed to download image. The image host might be blocking downloads.");
//   }
// };

// const downloadImage = () => {
//   const imageAncho = document.createElement("a");
//   imageAncho.href = mainImage; 
//   imageAncho.download = "downloaded-image.jpg"; 
//   imageAncho.click();
// };

 

 
  

  return (
    <div className="mainSignup">
    <Navbar setHide={setHide}/>
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
                  <img src={images[0]} alt="video" />
                  <i className="fa-regular fa-circle-play"></i>
                </div>

                <i
                  className="arrowSizing fa-solid fa-angle-down"
                  onClick={handleDownClick}
                ></i>
              </div>
            </div>

            {/* <div className="mainProductImg">
              <img src={mainImage} alt="main product" />
              <button onClick={downloadImage}>Download Image</button>
              <p className="zoomText">Roll over image to zoom in</p>
            </div> */}
            <div className="mainProductImg">
                <img src={mainImage} alt="main product" />
               {/* <button onClick={downloadImage}>Download Image</button> */}
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

              {/* <div className="productDetailsThreeSection">
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
              </div> */}
              <div className="productDetailsThreeSection">
                 <h3>About This Item</h3>
                   <p>
                       {shortText}
                       {!isExpanded ? "..." : moreText}
                   </p>
             <button id="seeMoreButton" onClick={toggleReadMore} style={{ marginTop: "8px" }}>
               <span className="seeMoreText">{isExpanded ? "See Less" : "See More"}</span><i className="arrowTextDocaretionRemove fa-solid fa-angle-right"></i>
             </button>
            </div>
            </div>
          </div>

          <div className="purchaseBoxTotallyFull">
            <div id="purchaseBoxTotally">
              <div className="purchaseBox">
                <p className="purchasePrice">$262.23</p>
                <div className="quantitySelects">
                  <div className="optionSelect  optionSelectFirstones">
                    <label>Quantity</label>
                    <select>
                      <option className="optionsCenter">1</option>
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
                
                <p className="deliveryText">
                  
                  <p className="deliveryTextDeliveryTo">
                    Deliver to <span>Chris - Huntington</span>
                  </p>
                  
                  <p className="numberSpacing">11743</p>
                  <p>
                    Last Order Date: <strong>11/10/24</strong>
                  </p>
                  <p className="inStockText">In Stock</p>
                  {/* <p>
                    Est Delivery Date: <strong>11/10/24</strong>
                  </p> */}
                </p>

                

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
                      <button className="addToCartBtns">Add to Cart</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "Features" && (
            <div className="featuresSection">
              <ul className="featureList">
                <li>Compact and lightweight design for easy transport</li>
                <li>LED display with battery and flow rate indicators</li>
                <li>Quiet operation suitable for home and clinical use</li>
                <li>Medical-grade materials ensure patient safety</li>
              </ul>
              <ul className="featureList">
                <li>Adjustable oxygen flow up to 5 L/min</li>
                <li>Comes with reusable air filters for cost efficiency</li>
                <li>Low oxygen alarm for patient safety</li>
                <li>Continuous and pulse dose modes available</li>
                <li>Backed by a 2-year manufacturer warranty</li>
              </ul>
            </div>
          )}

          {activeTab === "Specifications" && (
            // <div className="specificationsTableContainer">
            // hgvv
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

      {/* <div className="productDetailsThreeSection">
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
              </div> */}
    </div>
  );
};

export default Signup;
