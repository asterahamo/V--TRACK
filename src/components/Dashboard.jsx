import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiDotsVertical } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Header from "./Header";
import Footer from './Footer';
const dataChar = [{ name: 'Page A', uv: 0, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 100, pv: 2400, amt: 2400 },
{ name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
{ name: 'Page D', uv: 200, pv: 2400, amt: 2400 }];

function Dashboard() {
  const today = new Date();
  const tomorrow = new Date(today);
  const startDate = formatDate(today);
  const endDate = formatDate(tomorrow);
  const navigate = useNavigate();
  function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  const [documentCount, setDocumentCount] = useState([]);
  // useEffect(() => {

  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(" http://localhost:8000/api/product");
  //     setDocumentCount(data.documentCount);
  //   }
  //   fetchProduct();
  // }, []);
  const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/brand");
  //     setBrands(data.documentCount);
  //   }
  //   fetchUser();
  // }, []);
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/profile");
  //     setUser(data.documentCount);
  //   }
  //   fetchUser();
  // }, []);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/profile");
  //     setData(data.users);
  //   }
  //   fetchUserData();
  // }, []);
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/api/profile/${itemId}`);
      setData(prevData => prevData.filter(p => p._id !== itemId));
    } catch (error) {
      console.log(error);
    }
    handleDelete();
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/product");
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductsData();
  }, []);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/product");
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductsData();
  }, []);
  const handelClick = () => {
         return navigate("/allProducts");
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
            <h1 className="relative font-[600] text-[24px]">Dashboard</h1>
            <div className="flex justify-between w-[100%] items-center">
              <p className="font-[600] text-[16px] w-[70%] flex items-center gap-[10px]">Home <FaArrowRight /> Dashboard</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mr-[10px] mt-[20px] w-[1350px]">
              <div className="bg-[white] p-[20px] rounded-[16px] relative w-[440px] h-[140px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[19px] font-[600] text-[rgb(0, 0, 0)]">Cities</h1>
                  <BiDotsVertical className="w-[24px] h-[24px] cursor-pointer" />
                </div>
                <div className="flex justify-between items-center pt-[10px]">
                  <div className="flex justify-between w-[131px] items-center">
                    <div className="w-[40px] h-[40px] rounded-[8px] p-[10px] bg-blue-500 bg-opacity-75">
                      <FaCity className="w-[20px] h-[20px] text-[#fff]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[64px] h-[20px]">
                    <h1 className="mr-[8px] font-[600]">{documentCount}</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-[16px]"></div>
                  <div className=""></div>
                  <p className="text-[12px] font-[600] pt-[10px]">Compared to {startDate}</p>
                </div>
              </div>
              <div className="bg-[white] p-[20px] rounded-[16px] relative w-[440px] h-[140px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[19px] font-[600] text-[rgb(0, 0, 0)">Governorate</h1>
                  <BiDotsVertical className="w-[24px] h-[24px] cursor-pointer" />
                </div>
                <div className="flex justify-between items-center pt-[10px]">
                  <div className="flex justify-between w-[131px] items-center">
                    <div className="w-[40px] h-[40px] rounded-[8px] p-[10px] bg-blue-500 bg-opacity-75">
                      <FaTreeCity className="w-[20px] h-[20px] text-[#fff]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[64px] h-[20px]">
                    <p className="mr-[8px] font-[600]">{brands}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-[16px]"></div>
                  <div className=""></div>
                  <p className="text-[12px] font-[600] pt-[10px]">Compared to {startDate}</p>
                </div>
              </div>
              <div className="bg-[white] p-[20px] rounded-[16px] relative w-[380px] h-[140px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[19px] font-[600] text-[rgb(0, 0, 0)">City</h1>
                  <BiDotsVertical className="w-[24px] h-[24px] cursor-pointer" />
                </div>
                <div className="flex justify-between items-center pt-[10px]">
                  <div className="flex justify-between w-[131px] items-center">
                    <div className="w-[40px] h-[40px] rounded-[8px] p-[10px] bg-blue-500 bg-opacity-75">
                      <MdLocationCity className="w-[20px] h-[20px] text-[#fff]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[64px] h-[20px]">
                    <p className="mr-[8px] font-[600]">{user}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-[16px]"></div>
                  <div className=""></div>
                  <p className="text-[12px] font-[600] pt-[10px]">Compared to {startDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[20px] flex w-[100%]">
            <div className="bg-[#fff] w-[100% - 35%] h-[290px] rounded-[16px] pt-[20px] pb-[24px] pl-[16px] pr-[16px] gap-[36px]">
              <div className="flex justify-between items-center border-b-[1px] pb-[15px] border-[#888383]">
                <h1 className="font-[600] text-[20px] text-[black]">StatScope</h1>
                <div className="flex">
                  <button className=" border-[1px] border-[black] mr-[5px] w-[90px] h-[32px] rounded-[8px] font-[500] text-[14px] cursor-pointer">Weekly</button>
                  <button className=" border-[1px] border-[black] mr-[5px] w-[90px] h-[32px] rounded-[8px] font-[500] text-[14px] cursor-pointer">Monthly</button>
                  <button className=" border-[1px] border-[black] mr-[8px] w-[90px] h-[32px] rounded-[8px] font-[500] text-[14px] cursor-pointer">Yearly</button>
                </div>
              </div>
              <div className="pt-[20px]">
                <LineChart width={865} height={200} data={dataChar} className="">
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </div>
            </div>
            <div className="bg-[#fff] w-[25%] h-[290px] rounded-[16px] ml-[20px]">
              <div className="flex flex-col h-full justify-between">
                <div className=''>
                  <div className="flex justify-between p-[20px] ">
                    <h1 className="font-semibold text-[20px] text-black pl-0">Anomaly Hotspots</h1>
                    <BiDotsVertical className="w-[24px] h-[24px] cursor-pointer" />
                  </div>
                  <div className="border-b-[1px] w-[calc(100% - 40px)] ml-[10px] mr-[10px] border-[#888383]"></div>
                </div>
                <div className="flex flex-col items-center justify-center overflow-auto pt-[20px] pb-[20px]">
                  <div className='scrollbar scrollbar-container overflow-auto'>

                    <div className="font-semibold ">
                      <table class="w-full border-collapse scrollbar-content">
                        <thead class="w-[100%] ">
                          <tr>
                            <th class="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[14px] text-center">Image</th>
                            <th class="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[14px] text-center">Size</th>
                            <th class="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[14px] text-center">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.slice(0, 3).reverse().map((product, index) => {
                            return (
                              <tr key={product._id}>
                                <td className='border border-gray-200 px-4 py-2 font-semibold text-[#000] text-[12px] text-center bg-blue-300'><img src={product.imagesProduct[0].url} alt="Products-img" className='w-12 h-12 rounded-[50%]' /></td>
                                <td className="border border-gray-200 px-4 py-2 font-semibold text-[#000] text-[12px] text-center bg-blue-100">{product.size}</td>
                                <td className="border border-gray-200 px-4 py-2 font-semibold text-[#000] text-[12px] text-center bg-blue-300">{product.description}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                    <button className="mt-[19px] w-[80px] rounded-[8px] h-[50px] transition-[0.3s] font-semibold text-[14px] text-[#fff] bg-[black] cursor-pointer hover:bg-[#fff] hover:text-[black] hover:border-[2px] hover:border-[black] hover:font-[500]" onClick={handelClick}>Report</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-[86%] h-[500px] rounded-[16px]  p-[20px] mt-[20px]">
            <div className="flex justify-between w-[1280px] h-[24px]">
              <h1 className="font-[600] text-[20px]">Recent</h1>
              <BiDotsVertical className="w-[24px] h-[24px] cursor-pointer mr-[20px]" />
            </div>
            <div className="border-b-[1px] border-[rgb(35, 35, 33)] pb-[20px]"></div>
            <div className='scrollbar-content scrollbar scrollbar-container overflow-auto'>
              <table className="w-full border-collapse h-[100%]">
                <thead className="">
                  <tr>
                    <th className="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">UserName</th>
                    <th className="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Email</th>
                    <th className="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">role</th>
                    <th className="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Date</th>
                    <th className="border-2 border-gray-300 px-4 py-2 font-[600] text-[#777] text-[16px] text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => {
                    return <tr key={user._id}>
                      <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-300 ">{user.username}</td>
                      <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-100">{user.email}</td>
                      <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-300">{user.role}</td>
                      <td className="border border-gray-200 px-4 py-2 font-[600] text-[#000] text-[16px] text-center bg-blue-100">{user.createdAt.substring(0, 10)}</td>
                      <td className="border border-gray-200 px-4 py-2 font-[600] text-[red] text-[19px] text-center flex justify-center cursor-pointer border-none"><MdDelete className="text-center" onClick={() => handleDelete(user._id)} /></td>
                    </tr>
                  })}
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

export default Dashboard
