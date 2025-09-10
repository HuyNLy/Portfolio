"use client"

export default function NavBar() {


  return (
    <>
      <div className="w-32 flex p-4 bg-opacity-20 bg-gray-900
      absolute left-0 top-1/2 -translate-y-1/2 h-144 flex-col justify-around items-center rounded-lg
     border-2 white text-white">

        <button className="btn" onClick={()=> {
          <a href="#about"></a>
        }}>About</button>
        <button className="btn">Work</button>
        <button className="btn">Contact</button>

     
    </div>
    </>
   
    );
}