import React from "react";
import { FaMoneyBillWave, FaTruck, FaUserCheck } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-green-600 text-4xl" />,
      title: "Earn cash for your books",
      text: "Other readers want the books you're probably not going to read again. Selling on BookBazaars is like opening your own little book shop. Transfer your earnings as cash or earn a 2% bonus if you use them to buy more books!",
    },
    {
      icon: <FaTruck className="text-blue-600 text-4xl" />,
      title: "Simple shipping",
      text: "Get pre-paid labels sent right to your phone when you sell. Skip the line at the post office and take the guesswork out of shipping!",
    },
    {
      icon: <FaUserCheck className="text-yellow-500 text-4xl" />,
      title: "A+ customer service",
      text: "The BookBazaars support team takes care of all the customer service for your orders. And if you need any help while selling, you can talk to a real person who loves books as much as you do!",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
