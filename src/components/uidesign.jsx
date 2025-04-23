import React, { useEffect, useState } from "react";
import q1 from "../q1.jpg"; // Import the image
import q2 from "../q2.jpg"; // Import the image
import q3 from "../q3.jpg"; // Import the image
import q4 from "../q4.jpeg"; // Import the image
const Uidesign = () => {
  const [qawali, setQawali] = useState([
    {
      name: "Night Qawali",
      img: q1,
      description: "A soulful Qawali performance under the moonlight.",
    },
    {
      name: "Rang e Ishq ",
      img: q2,
      description: "Traditional Qawali that takes you back in time.",
    },
    {
      name: "Sham e Suroor",
      img: q3,
      description: "Experience the divine connection through Sufi Qawali.",
    },
    {
      name: "Qawali",
      img: q4,
      description: "A fusion of traditional and contemporary Qawali.",
    },
    {
      name: "Rang e Ishq ",
      img: q2,
      description: "Traditional Qawali that takes you back in time.",
    },
    {
      name: "Sham e Suroor",
      img: q3,
      description: "Experience the divine connection through Sufi Qawali.",
    },
    {
      name: "Sham e Suroor",
      img: q3,
      description: "Experience the divine connection through Sufi Qawali.",
    },
    {
      name: "Qawali",
      img: q4,
      description: "A fusion of traditional and contemporary Qawali.",
    },
  ]);

  const [filterQawali, setFilterQawali] =   useState([qawali]);
  const [filter, setFilter] =useState('');

  useEffect(()=> {
    if(filter === ""){
        setFilterQawali(qawali)
    } else {
        setFilterQawali(
            // qawali.filter((item) => item.name.toLowerCase().trim().includes(filter.toLowerCase().trim() ))
            qawali.filter((item) => item.name.toLowerCase().split(' ').join('').includes(filter.toLowerCase().split(' ').join('') ))

        )
    }
  } , [filter, qawali])
  return (
    <div className="md:mx-24 mx-4 my-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-blue-500">Search Qawali</p>
        <input
          type="text"
          value={filter}
          onChange={(e)=> {setFilter(e.target.value)}}
          className="block rounded-md bg-white w-48 md:w-96 px-3 py-1.5 mb-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Filter data"
        />
      </div>
      <div  className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
        {filterQawali.map((list, index) => (
          <div
            key={index}
            className=" bg-white border transition-transform ease-in-out duration-500 hover:scale-105 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg w-full h-80"
              src={list.img}
              alt="img"
            />

            <h5 className="mb-2 px-2 flex justify-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {list.name}
            </h5>

            <p className="text-sm px-2 flex justify-start text-gray-400">{list.description}</p>
            <a className="hover:text-blue-500 flex px-2 pb-2 justify-start hover:underline" href="http://localhost:3000/" target="blank">Go to</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Uidesign;
