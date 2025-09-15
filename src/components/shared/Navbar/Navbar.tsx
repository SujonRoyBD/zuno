"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="py-4 w-full flex items-center justify-center mx-auto">
        <div className="flex justify-between items-center w-full max-w-[1000px] bg-gray-100 z-30 py-3 px-4 rounded-2xl">
          <div>
            <Link href="/"><Image
              src="/assets/67ea1567f801b7bf3d63fad7_zuno-logo-b.svg"
              width={80}
              height={80}
              alt="logo"
              className="mt-1"
            /></Link>
          </div>
          <div className="hidden md:flex gap-6 relative">
            <Link href="/"><p className="cursor-pointer">Home</p></Link>
            <div className="relative group">
              <p className="cursor-pointer flex gap-2">Pages <MdKeyboardArrowDown className="mt-1"/></p>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl p-4 grid grid-cols-4 gap-3 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/" className="hover:text-green-500">Home 1</Link>
                <Link href="/" className="hover:text-green-500">About 1</Link>
                <Link href="/" className="hover:text-green-500">Home 2</Link>
                <Link href="/" className="hover:text-green-500">About 2</Link>
                <Link href="/" className="hover:text-green-500">Home 3</Link>
                <Link href="/" className="hover:text-green-500">About 3</Link>
                <Link href="/" className="hover:text-green-500">Features 1</Link>
                <Link href="/" className="hover:text-green-500">Log in</Link>
                <Link href="/" className="hover:text-green-500">Features 2</Link>
                <Link href="/" className="hover:text-green-500">Sign up</Link>
                <Link href="/" className="hover:text-green-500">Features 3</Link>
                <Link href="/" className="hover:text-green-500">Contact</Link>
                <Link href="/requestdemo" className="hover:text-green-500">Request Demo</Link>
              </div>
            </div>
            <div className="relative group">
               <p className="cursor-pointer flex gap-2">Tamplate <MdKeyboardArrowDown className="mt-1"/></p>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl p-4  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/" className="hover:text-green-500">Style Guide</Link>
                <Link href="/" className="hover:text-green-500">License </Link>
                <Link href="/" className="hover:text-green-500">ChangeLog</Link>
                
               
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/requestdemo"
              onClick={closeMenu}
              className="px-3 py-2 bg-[#d2f0a3] rounded-xl w-fit inline-block"
            >
              Request Demo
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-[#d2f0a3] rounded-xl"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-[300px] bg-white gap-6 z-50 px-6 py-7 shadow-lg rounded-b-2xl">
            <div className="flex justify-between items-center mb-6">
              <p className="font-bold text-xl">Menu</p>
              <button onClick={closeMenu}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button onClick={closeMenu} className="text-lg text-left">Home</button>
              <button onClick={closeMenu} className="text-lg text-left">Pages</button>
              <button onClick={closeMenu} className="text-lg text-left">Template</button>
              <Link
                href="/requestdemo"
                onClick={closeMenu}
                className="mt-4 px-3 py-2 bg-[#d2f0a3] rounded-xl w-fit inline-block"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
