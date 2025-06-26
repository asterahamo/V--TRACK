
function Footer() {
      const today = new Date();
  const tomorrow = new Date(today);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
              <div className="w-[100%] h-[35px] pt-[75px]">
            <div className=" border-[1px] border-[rgb(35, 35, 33)] mb-[20px] w-[86%]"></div>
            <div className="w-[100%] h-[40px] flex justify-between">
              <div className="w-[50%] h-[19px] flex items-center font-[600] text-[14px]">
                <p className="font-[400] text-[14px] text-center">© {currentYear} - V-Track Dashboard</p>
              </div>
            </div>
          </div>
  )
}

export default Footer