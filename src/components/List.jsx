import  { useEffect, useState } from 'react'
import axios from 'axios';
import { CiSearch } from "react-icons/ci";
import { useRef } from 'react';
import { AiOutlineBell } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { toast } from 'react-toastify';
import { FaArrowRight } from "react-icons/fa6";
import Header from './Header';
import Footer from './Footer';
function OrderList() {
  const [brandName, setBrandName] = useState("");
  const [brandImg, setBrandImg] = useState(null);
  const [brand, setBrand] = useState([]);
  const inputRef = useRef(null);
  const fetchBrandData = async () => {
    try {
      const { data } = await axios.get("");
      setBrand(data.brands);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchBrandData();
  }, []);
  const addBrand = async () => {
    const formData = new FormData();
    console.log(brandImg);
    formData.append("BrandName", brandName);
    formData.append("image", brandImg);
    try {
      const response = await axios.post("", formData);
      toast.success("Brand added successfully");
      setBrand(response.data.brands);
      setBrandName('');
      setBrandImg(null);
    } catch (error) {
      console.error("Error adding brand:", error);
      toast.error("Failed to add brand");
    } finally {
      fetchBrandData()
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBrandImg(file);
  };
  const handelImageClick = () => {
    inputRef.current.click();
  }
  
  return (
    <div className='bg-[white] flex h-[100%] w-[100%]'>
<Header />
      <div className="overflow-hidden w-[calc(100% - 15%)] h-[100%]">
        <div className="bg-[rgba(250, 250, 250, 1)] p-[15px] mt-0 flex items-center justify-between border-[1px] h-[96px] w-[100%]">
          <div></div>
          <div className="flex items-center gap-[20px]">
            <div className='border-[1px] border-[#716c6c] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center'><CiSearch className="cursor-pointer text-[19px]" /></div>
            <div className='border-[1px] border-[#716c6c] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center'><AiOutlineBell className="text-[19px] cursor-pointer" /></div>
          </div>
        </div>
        <div className="pt-[15px] pl-[15px] bg-[#c9c3c3] h-[calc(100vh-96px)] overflow-x-hidden scroll-smooth w-screen">
          <div className="">
            <h1 className="relative font-[600] text-[24px]"> List</h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-between w-[100%] items-center">
                <p className="font-[600] text-[16px] w-[70%] flex items-center gap-[10px]">Home <FaArrowRight /> List</p>
              </div>
            </div>
            <div className='flex justify-between pt-[20px] w-[100%]'>
              <div className='bg-[white] p-[20px] rounded-[16px] relative w-[85%] h-[100%]'>
                <h1 className='text-[19px] font-[600] text-[rgb(0, 0, 0)]'>Name:</h1>
                <div className='flex justify-between items-center '>
                  <input value={brandName} onChange={(e) => setBrandName(e.target.value)} type='text' placeholder='Type name here' className="outline-none pl-[10px] mt-[10px] h-[48px] w-[565px] text-[16px] font-[400] border rounded-[8px] border-[#777]" /> 
                  <div onClick={handelImageClick} className="w-[242px] h-[100%] rounded-[8px]">
                      {brandImg ? (
                        <img src={brandImg} alt="" className='w-[250px] h-[250px] rounded-[8px]'/>
                      ) : (
                        <img src="assets/pexels-stephan-louis-16932442.jpg" alt="" className='w-[250px] h-[250px] rounded-[8px]'/>
                      )}
                      <input type="file" ref={inputRef} onChange={handleImageChange} className='hidden'/>
                    </div>
                </div>
                <div className='flex justify-between'>
                  <div></div>
                  <div>
                  <button className='w-[120px] bg-[#000] text-[#fff] font-[600] rounded-[8px] h-[48px] transition-[0.3s] hover:text-[#000] hover:bg-[#fff] hover:border hover:border-[#000] mt-[8px]' onClick={addBrand}>Add</button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-[85%] h-[52px] flex justify-between items-center">
            <div className=""></div>
          </div>
          <div className="bg-[#fff] w-[85%]  rounded-[16px]  p-[20px] mt-[20px]">
            <div className="flex justify-between w-[1280px] h-[24px]">
              <h1 className="font-[600] text-[20px]"> Brand</h1>
              <BiDotsVertical className="text-[22px] h-[24px] cursor-pointer mr-[20px]" />
            </div>
            <div className='border-b-[1px] pt-[20px]'></div>
            <div className="border-b-[1px] border-[rgb(35, 35, 33)] pb-[20px]"></div>
            <div className='scrollbar-content scrollbar scrollbar-container overflow-auto'>
              <table className="w-full border-collapse h-[100%]">
                <thead className="">
                  <tr>
                    <th className='px-4 py-2 font-[600] text-[16px] text-center'><input type='checkbox' className="outline-none " /></th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center"> Brand Name</th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Brand ID</th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {brand?.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="text-center">
                        no thing
                      </td>
                    </tr>
                  ) : (
                    brand?.map((brands, index) => (
                      <tr key={brands._id}>
                        <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-300">
                          <input type='checkbox' />
                        </td>
                        <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-100">
                          
                        </td>
                        <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-100">
                          
                        </td>
                        <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-100">
                          
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
      <Footer />
        </div>
      </div>
    </div>
  )
}

export default OrderList;
