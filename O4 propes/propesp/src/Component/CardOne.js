import React from 'react'

 function CardOne({username}) {
  console.log(username);
  return (
    <>
     <div className="relative h-[400px] w-[300px] rounded-md place-content-center mt-2 ml-auto">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQH76L5Z2ZsUjw/profile-displayphoto-shrink_200_200/0/1669822672654?e=1713398400&v=beta&t=H2CDKbUFD2Y5Q3GQxdTTAVYYe1yM35jh-VLGPwwksyA"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lgs"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div></>
  )
}
export default CardOne