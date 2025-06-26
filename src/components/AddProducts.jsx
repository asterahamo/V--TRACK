import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { toast } from 'react-toastify';
function AddProduct() {
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();


  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [brands, setBrands] = useState([]);
  const fetchBrandData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/brand");
      setBrands(data.brands.map((brand) => ({ id: brand._id, name: brand.BrandName }))); 
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchBrandData();
  }, []);
const [product, setProduct] = useState([]);
const [nameProduct, setNameProduct] = useState("");
const [description, setDescription] = useState("");
const [size, setSize] = useState("");
const [price, setPrice] = useState("");
const [gender, setGender] = useState("");
const [brand, setBrand] = useState("");
const handelAddProduct = async () => {
  const formData = new FormData();
  formData.append("Image", image);
  formData.append("Image1", image1);
  formData.append("Image2", image2);
  formData.append("Image3", image3);
  formData.append("Image4", image4);
  formData.append("NameProduct", nameProduct);
  formData.append("Description", description);
  formData.append("Size", size);
  formData.append("Price", price);
  formData.append("Gender", gender);
  formData.append("Brand", brand);
  try{
    const response = await axios.post("http://localhost:8000/api/product", formData);
    toast.success("Product added successfully");
    setProduct(response.data.products);
    console.log(product);
    setNameProduct("");
    setDescription("");
    setSize("");
    setPrice("");
    setGender("");
    setBrand("");
    setImage(null);
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
  }
  catch(error){
    console.error("Error adding products:", error);
    toast.error("Failed to add products");
  }
}
const handelImageClick = () => {
  inputRef.current.click();
}
const handelImageClick1 = () => {
  inputRef1.current.click();
}
const handelImageClick2 = () => {
  inputRef2.current.click();
}
const handelImageClick3 = () => {
  inputRef3.current.click();
}
const handelImageClick4 = () => {
  inputRef4.current.click();
}
const handelImageChange = (event) => {
  const file = event.target.files[0];
  console.log(file);
    setImage(event.target.files[0]);
}
const handelImageChange1 = (event) => {
  const file1 = event.target.files[0];
  console.log(file1);
    setImage1(event.target.files[0]);
}
const handelImageChange2 = (event) => {
  const file2 = event.target.files[0];
  console.log(file2);
    setImage2(event.target.files[0]);
}
const handelImageChange3 = (event) => {
  const file3 = event.target.files[0];
  console.log(file3);
    setImage3(event.target.files[0]);
}
const handelImageChange4 = (event) => {
  const file4 = event.target.files[0];
  console.log(file4);
    setImage4(event.target.files[0]);
}
  return (
    <div className='bg-[white] flex h-[100%] w-[100%]'>
      <div className="bg-[rgba(250, 250, 250, 1)] p-[20px] relative w-[15%] border-[1px]">
        <h3 className="relative text-center mt-[0px] text-[35px] font-serif font-[900] underline tracking-[-5px] text-[rgba(35, 35, 33, 1)]">LAZA</h3>
        <ul activeClassName="text-blue-500 hover:bg-gray-200" className="mt-[50px] text-[black] flex flex-col">
          <div className="mb-[20px] ml-[10px] flex items-center  hover:text-white hover:p-2 hover:bg-[#4A69E2] hover:rounded-[8px] transition-[0.3s] w-[150px] h-[48px] text-center">
            <MdOutlineDashboard className="mr-[10px]" />
            <NavLink className="font-[500] text-[14px]" to="/dashboard">DASHBOARD</NavLink>
          </div>
          <div className="mb-[20px] ml-[10px]  flex items-center  hover:bg-[#4A69E2] hover:text-white hover:p-2 hover:rounded-[8px] transition-[0.3s] w-[150px] h-[48px]">
            <IoAlbumsOutline className="mr-[10px]" />
            <NavLink className="font-[500] text-[14px]" to="/allProducts">ALLPRODUCTS</NavLink>
          </div>
          <div className="mb-[20px] ml-[10px]  flex items-center hover:bg-[#4A69E2] hover:text-white hover:p-2 hover:rounded-[8px] transition-[0.3s] w-[150px] h-[48px]">
            <FaFileAlt className="mr-[10px]" />
            <NavLink className="font-[500] text-[14px]" to="/orderList">ORDER LIST</NavLink>
          </div>
          <div className="flex items-center text-center relative top-[50px] mb-[40px] ">
            <NavLink className="font-[700] text-[17px]">Categories</NavLink>
            <img src="assets/Vector (8).png" alt="icon-1" className="w-[13.5px] h-[6.75px] text-[rgba(35, 35, 33, 1)] ml-[30px] cursor-pointer" />
          </div>
        </ul>
      </div>
      <div className="overflow-hidden w-[calc(100% - 15%)] h-[100%]">
        <div className="bg-[rgba(250, 250, 250)] p-[15px] mt-0 flex items-center justify-between border-[1px] h-[96px] w-[100%]">
          <div className="w-[50%]"></div>
          <div className="flex justify-between items-center w-[25%]">
            <div><CiSearch className="w-[24px] h-[24px] cursor-pointer" /></div>
            <div><AiOutlineBell className="w-[24px] h-[24px] cursor-pointer" /></div>
            <div className="text-center flex"><button className="flex justify-center items-center border-[1px] w-[98px] h-[40px] text-center rounded-[8px] ml-[10px] mr-[30px] text-[14px] font-[500] border-[#000]" >ADMIN</button></div>
          </div>
        </div>
        <div className="pt-[15px] pl-[15px] bg-[#c9c3c3] h-[calc(100vh-96px)] overflow-x-hidden scroll-smooth w-screen">
          <div className="">
            <h1 className="relative font-[600] text-[24px]">Product Details</h1>
            <div className="flex justify-between w-[100%] items-center">
              <p className="font-[600] text-[16px] w-[70%]" Home > All Products > Add New Product</p>
            </div>
            <div className=""></div>
          </div>
          <div className="w-[85%] pt-[10px] flex justify-between mb-[50px]">
            <div className="w-[100%] h-[100%]  rounded-[16px] bg-[#fff]">
              <div className=' w-[100%] h-[100%]'>
                <div className=" flex justify-between pl-[20px]">
                  <div className=''>
                    <div className='p-[10px]'>
                      <h1 className="font-[600] text-[20px] text-[#000] ">Product Name</h1>
                      <input type='text' placeholder='Type name here' className="outline-none pl-[10px] mt-[10px] h-[48px] w-[565px] text-[16px] font-[400] border rounded-[8px] border-[#777]" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                    </div>
                    <div className='p-[10px]'>
                      <h1 className="font-[600] text-[20px] text-[#000] ">Description</h1>
                      <textarea placeholder="Type Description here" className="outline-none pl-[10px] mt-[10px] h-[180px] w-[565px] text-[16px] font-[400] border rounded-[8px] border-[#777] pt-[10px ]" value={description} onChange = {(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='w-[565px] flex p-[10px]'>
                      <div className='w-[260px]'>
                        <h1 className="font-[600] text-[20px] text-[#000] ">Size </h1>
                        <select className='outline-none pl-[10px]  mt-[10px] h-[48px] w-[250px] border rounded-[8px] text-[16px] font-[500] text-[#777] border-[#777]' value={size} onChange={(e) => setSize(e.target.value)}>
                          <option className=' text-[16px] font-[500] text-[#777]'>S</option>
                          <option className=' text-[16px] font-[500] text-[#777]'>M</option>
                          <option className=' text-[16px] font-[500] text-[#777]'>L</option>
                          <option className=' text-[16px] font-[500] text-[#777]'>XL</option>
                          <option className=' text-[16px] font-[500] text-[#777]'>XXL</option>
                        </select>
                      </div>
                      <div className='w-[260px] ml-[20px]'>
                        <h1 className="font-[600] text-[20px] text-[#000] ">Brands</h1>
                        <select className='outline-none pl-[10px] pr-[20px] mt-[10px] h-[48px] w-[250px] border rounded-[8px] text-[16px] font-[500] text-[#777] border-[#777]' value={brand} onChange={(e) => setBrand(e.target.value)}>
                        {brands.map((brand, index) => (
                          <option key={index} value={brand.id} className='text-[16px] font-[500] text-[#000]'>
                          {brand.name}
                          </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className='w-[565px] flex p-[10px]'>
                      <div className='w-[260px]'>
                        <h1 className="font-[600] text-[20px] text-[#000] ">Price </h1>
                                <input type='text' placeholder='100$' className="outline-none pl-[10px] mt-[10px] h-[48px] w-[250px] text-[16px] font-[400] border rounded-[8px] border-[#777]" value={price} onChange={(e) => setPrice(e.target.value)}/>
                      </div>
                      <div className='w-[260px] ml-[20px]'>
                        <h1 className="font-[600] text-[20px] text-[#000] ">Gender</h1>
                          <select className="outline-none pl-[10px]  mt-[10px] h-[48px] w-[250px] border rounded-[8px] text-[16px] font-[500] text-[#777] border-[#777]" value={gender} onChange = {(e) => setGender(e.target.value)}>
                            <option className=' text-[16px] font-[500] text-[#777]'>Female</option>
                            <option className=' text-[16px] font-[500] text-[#777]'>Male</option>
                          </select>
                      </div>
                    </div>
                    <div className='flex h-[48px] justify-center mt-[70px] mr-[20px] mb-[20px]'>
                      <div className=''>
                        <button className='bg-[#000] w-[142px] h-[48px] rounded-[8px] text-[#fff] font-[500] text-[14px] mr-[50px] transition-[0.3s] hover:bg-[#fff] hover:text-[#000] hover:border hover:border-[#000]' onClick={handelAddProduct}>ADD</button>
                      </div>
                      <div className=''>
                        <button className='bg-[#fff] w-[142px] h-[48px] rounded-[8px] text-[#000] border border-[#000] font-[500] text-[14px]'>CANCEL</button>
                      </div>
                    </div>
                  </div>
                  <div className='w-[50%] h-[100%] pt-[20px]'>
                    <h1 className="font-[600] text-[20px] text-[#000]">Select Image</h1>
                    <div className="w-[457px] h-[444px] rounded-[16px] p-[8px] gb-[#fff]">
                    <div onClick={handelImageClick} className="w-[442px] h-[428px] rounded-[8px]">
                      {image ? (
                        <img src={image} alt="" className='w-[50%] h-[50%] rounded-[8px]'/>
                      ) : (
                        <img src="assets/pexels-stephan-louis-16932442.jpg" alt="" className='w-[442px] h-[428px] rounded-[8px]'/>
                      )}
                      <input type="file" ref={inputRef} onChange={handelImageChange} className='hidden'/>
                    </div>
                    </div>
                    <div className="w-[50%] h-[100%] pt-[10px ]">
                        <div className="flex ">
                          <div className="w-[160px] rounded-[16px] ml-[6px]" onClick={handelImageClick1}>
                          {image1 ? (
                            <img src={image1} alt="imageOne" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          ) : (
                            <img src="assets/pexels-stephan-louis-16932442.jpg" alt="imageOne" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          )}
                            <input type="file" ref={inputRef1} onChange={handelImageChange1} className="hidden" />
                          </div>
                          <div onClick={handelImageClick2} className="w-[160px] rounded-[16px] ml-[6px]" >
                          {image2 ? (
                            <img src={image2} alt="imageTwo" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          ) : (
                            <img src="assets/pexels-stephan-louis-16932442.jpg" alt="imageTwo" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          )}
                            <input type="file" ref={inputRef2} onChange={handelImageChange2} className="hidden" />
                          </div>
                        </div>
                        <div className="flex pt-[10px] pb-[20px]">
                        <div className="w-[160px] rounded-[16px] ml-[6px]" onClick={handelImageClick3}>
                          {image3 ? (
                            <img src={image3} alt="imageThree" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          ) : (
                            <img src="assets/pexels-stephan-louis-16932442.jpg" alt="imageThree" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          )}
                            <input type="file" ref={inputRef3} onChange={handelImageChange3} className="hidden" />
                          </div>
                          <div className="w-[160px] rounded-[16px] ml-[6px]" onClick={handelImageClick4}>
                          {image4 ? (
                            <img src={image4} alt="imageFour" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          ) : (
                            <img src="assets/pexels-stephan-louis-16932442.jpg" alt="imageFour" className="w-[150px] rounded-[8px] ml-[6px]"/>
                          )}
                            <input type="file" ref={inputRef4} onChange={handelImageChange4} className="hidden" />
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddProduct
