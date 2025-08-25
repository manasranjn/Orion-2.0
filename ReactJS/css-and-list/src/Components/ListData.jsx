import React from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
  },
  {
    id: 3,
    name: "Bob Smith",
    age: 35,
  },
  {
    id: 4,
    name: "Alice Johnson",
    age: 28,
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 32,
  },
];
const ListData = () => {
  return (
    <div className="bg-slate-700 p-10 h-screen">
      <h1 className="text-3xl text-white text-center">List Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 md:gap-5 lg:gap-4">
        {data.map((item, idx) => (
          <div className="bg-white p-4 rounded-lg" key={idx}>
            <h2 className="block xl:hidden">Name: {item.name}</h2>
            <p>Age: {item.age}</p>
            <p>Id: {item.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListData;
