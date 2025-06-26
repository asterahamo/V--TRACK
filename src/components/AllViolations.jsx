import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { CgMathPlus } from "react-icons/cg";
import { request } from '../utils/request';
import Header from './Header';
import { FaArrowRight } from "react-icons/fa6";
import Footer from './Footer';
function AllViolations() {
  const [product, setProduct] = useState([]);
useEffect(() => {
  const fetchProductsData = async () => {
    try {
      const token = localStorage.getItem('authToken'); 
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      };
      const { data } = await request.get("/governorates", config);
      setProduct(data.items);
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching items data:", error);
    }
  };
  fetchProductsData();
}, []);
    const handleDelete = async (itemId) => {
        console.log("Delete item with ID:", itemId);
        // Implement actual delete API call
        // try {
        //     const token = localStorage.getItem('authToken');
        //     const config = {
        //         headers: { 'Authorization': `Bearer ${token}` }
        //     };
        //     await request.delete(`/products/${itemId}`, config); // Or /governorates/${itemId}
        //     setProduct(prevProducts => prevProducts.filter(item => item.id !== itemId)); // Update state
        //     toast.success("Item deleted successfully!");
        // } catch (error) {
        //     console.error("Error deleting item:", error);
        //     toast.error("Failed to delete item.");
        // }
    };
        const handleEdit = (itemId) => {
        console.log("Edit item with ID:", itemId);
        // Implement navigation to an edit page, e.g.:
        // navigate(`/editProduct/${itemId}`);
    };
  const navigate = useNavigate();
  const handelClickAdd = () => {
    return navigate("/addProducts");
};
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
            <h1 className="relative font-[600] text-[24px]">All Violations</h1>
            <div className="flex justify-between items-center">
            <div className="flex justify-between w-[100%] items-center">
              <p className="font-[600] text-[16px] w-[70%] flex items-center gap-[10px]">Home <FaArrowRight /> All Violations</p>
            </div>
            <div className='w-[50%] ml-[150px]'>
              <button className='text-[#fff] font-[600] text-[18px] bg-[#000]  h-[48px] rounded-[8px] hover:bg-[#fff] hover:text-[black] hover:font-[600] hover:border-[2px] hover:border-[black] flex justify-center items-center px-[12px]' onClick={handelClickAdd}><CgMathPlus className="mr-[5px]"/> ADD NEW Violations</button>
            </div>
            </div>
          </div>
          <div className="bg-[#fff] w-[85%]  rounded-[16px]  p-[20px] mt-[20px]">
            <div className="flex justify-between w-[1280px] h-[24px] scrollbar-content scrollbar scrollbar-container overflow-auto'">
              <h1 className="font-[600] text-[20px]">Recent Purchases</h1>
              <BiDotsVertical className="text-[22px] h-[24px] cursor-pointer mr-[50px]" />
            </div>
            <div className='border-b-[1px] pt-[20px]'></div>
            <div className="border-b-[1px] border-[rgb(35, 35, 33)] pb-[20px]"></div>
            <div className=''>
              <table className="w-full border-collapse h-[100%]">
                <thead className="">
                  <tr>
                  <th className='px-4 py-2 font-[600] text-[16px] text-center'><input type='checkbox' className=''/></th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">No.</th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">City</th>
                    <th className="border border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                                    {Array.isArray(product) && product.length > 0 ? (
                                        product.map((item, index) => {
                                            if (!item || !item.id || !item.name) {
                                                console.warn("Skipping item due to missing id or name:", item);
                                                return null;
                                            }
                                            return (
                                                <tr key={item.id}>
                                                    <td className='px-4 py-4 font-[600] text-[16px] text-center'><input type='checkbox' className='text-[50px]' /></td>
                                                    <td className='border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-[#ded6d6] '>{index + 1}</td>
                                                    <td className='border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-[#ded6d6] '>{item.name}</td>
                                                    <td className='border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-[#ded6d6] '>
                                                        <button
                                                            onClick={() => handleEdit(item.id)}
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-4 bg-[#ded6d6]">No items found.</td>
                                        </tr>
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

export default AllViolations
