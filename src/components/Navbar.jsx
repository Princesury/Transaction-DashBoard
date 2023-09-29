import MonthSelector from "./monthSelector"

const Navbar = ({currentMonth,changeMonth}) => {
  return(
    <div className=" h-16 w-screen flex justify-around items-center bg-gray-800 ">
      <h1 className="font-Lora text-3xl font-bold">
        Transaction Dashboard
      </h1>
      <div>
      <MonthSelector
          currentMonth={currentMonth}
          handleMonthChange={changeMonth}
        />
      </div>
    </div>
  )

}

export default Navbar