import React from "react";
import BestsellerCard from "./BestsellerCard";
import book1 from "../../../assets/Books/book1.webp";
import book2 from "../../../assets/Books/book2.webp";
import book3 from "../../../assets/Books/book3.webp";
import book4 from "../../../assets/Books/book4.webp";
import book5 from "../../../assets/Books/book5.webp";
import book6 from "../../../assets/Books/book6.webp";
import book7 from "../../../assets/Books/book7.webp";
import book8 from "../../../assets/Books/book8.webp";
import book9 from "../../../assets/Books/book9.webp";
import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Katabasis",
    author: "R. F. Kuang",
    rating: 5.0,
    price: 30,
    oldPrice: 200,
    image: book1,
    sold: false,
  },
  {
    id: 2,
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    rating: 4.6,
    price: 8,
    oldPrice: 12,
    image: book2,
    sold: false,
  },
  {
    id: 3,
    title: "Bury Our Bones in the Midnight Soil",
    author: "V. E. Schwab",
    rating: 4.5,
    price: 15,
    oldPrice: 250,
    image: book3,
    sold: true,
  },
  {
    id: 4,
    title: "The Wedding People",
    author: "Alison Espach",
    rating: 4.3,
    price: 10,
    oldPrice: 150,
    image: book4,
    sold: false,
  },
  {
    id: 5,
    title: "Forget Me Not",
    author: "Stacy Willingham",
    rating: 4.2,
    price: 9,
    oldPrice: 15,
    image: book5,
    sold: true,
  },
  {
    id: 6,
    title: "Atmosphere",
    author: "Taylor Jenkins Reid",
    rating: 4.7,
    price: 13,
    oldPrice: 90,
    image: book6,
    sold: false,
  },
  {
    id: 7,
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    rating: 4.4,
    price: 10,
    oldPrice: 20,
    image: book7,
    sold: true,
  },
  {
    id: 8,
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    rating: 4.4,
    price: 10,
    oldPrice: 20,
    image: book8,
    sold: true,
  },
  {
    id: 9,
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    rating: 4.4,
    price: 10,
    oldPrice: 20,
    image: book9,
    sold: true,
  },
];

const BestSellers = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Today's bestsellers</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">
          See all →
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto element py-2">
        {books.map((book) => (
          <BestsellerCard key={book.id} book={book} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};
export default BestSellers;
