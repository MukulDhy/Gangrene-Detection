import React, { useState } from "react";

const Doctors = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    position: "relative",
  };

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Vascular Surgeon",
    "Orthopedic Surgeon",
    "Dermatologist",
    "Infectious Disease Specialist",
  ];

  const doctorsData = [
    {
      name: "Dr. John Doe",
      specialty: "Vascular Surgeon",
      imgSrc:
        "https://tse3.mm.bing.net/th?id=OIP.2MRS9GqBagKCuGnI8JYMQAHaE8&pid=Api&P=0&h=180", // Replace with the actual URL of the doctor image
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Orthopedic Surgeon",
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.V5C0zCODJJzdjsvoWFRndgHaJz&pid=Api&P=0&h=180", // Replace with the actual URL of the doctor image
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      imgSrc:
        "https://tse3.mm.bing.net/th?id=OIP._G-QeBAQlxpW47O6TFYYbgHaLF&pid=Api&P=0&h=180", // Replace with the actual URL of the doctor image
    },
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? "All" : filter);
    setFilterOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white relative"
      style={backgroundStyle}
    >
      <h1 className="text-5xl font-bold -mb-10 my-[580px]">Meet Our Doctors</h1>
      <p className="text-xl my-[34px]">only the best doctors here</p>

      <div
        className="mt-4 text-2xl absolute left-50 "
        style={{ top: "calc(60vh + 20px)" }}
      >
        Filter By:{" "}
        {isFilterOpen ? (
          <span
            className="cursor-pointer underline"
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            {selectedFilter} &#9662;
          </span>
        ) : (
          <span
            className="cursor-pointer"
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            {selectedFilter} &#9662;
          </span>
        )}
        {isFilterOpen && (
          <div className="bg-white border rounded-md p-2 text-gray-800 my-96">
            {filters.map((filter, index) => (
              <p
                key={index}
                className={`cursor-pointer hover:bg-blue-200 py-56 px-16 rounded ${
                  selectedFilter === filter ? "underline" : ""
                }`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex mt-[550px]">
        {doctorsData
          .filter(
            (doctor) =>
              selectedFilter === "All" || doctor.specialty === selectedFilter
          )
          .map((doctor, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index !== doctorsData.length - 1 ? "mr-16" : ""
              }`}
            >
              <img
                src={doctor.imgSrc}
                alt={doctor.name}
                className="rounded-full w-44 h-44 mb-2"
              />
              <p className="text-lg font-bold">{doctor.name}</p>
              <p>{doctor.specialty}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Doctors;
