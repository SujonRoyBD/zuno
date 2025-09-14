import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#303a46]">
      <div className="container  text-white  py-10  z-20 sticky bottom-20">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-12 justify-between ">
        <div>
          <Image src="/assets/logo.svg" width={80} height={80} alt="logo" />
        </div>
        
          <div>
            <p className="text-[#98a581] font-bold hover:underline">Explore</p>
            <p className="text-[#abb1a0] hover:underline">About Zuno</p>
          <p className="text-[#abb1a0] hover:underline">Learn</p>
          </div>
        
        <div>
          <p className="font-bold text-[#98a581] hover:underline">Company</p>
          <p className="text-[#abb1a0] hover:underline">Careers</p>
          <p className="text-[#abb1a0] hover:underline">Terms of service</p>
          <p className="text-[#abb1a0] hover:underline">Privacy policy</p>
          <p className="text-[#abb1a0] hover:underline">Contact us</p>
        </div>
        <div>
          <p className="font-bold text-[#98a581] hover:underline">Follow us</p>
          <p className="text-[#abb1a0] hover:underline" >Instagram</p>
          <p className="text-[#abb1a0] hover:underline" >TikTok</p>
          <Link className="text-[#abb1a0] hover:underline"  href="/" >
            Twitter
          </Link>
        </div>
        <div>
          <p className="font-bold text-[#98a581] hover:underline">Newsletter</p>
          <div className="border border-gray-400 rounded mt-2">
            <input
              placeholder="Email Address"
              type="text"
              className="p-2 bg-transparent outline-none"
            />
          </div>
          <p className="text-sm mt-2 text-[#7e7e80]">
            We only share your information in accordance with our privacy
            policy.
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full  mt-6 "></div>
      <p className="py-7 text-[#7e7e80]">Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.. © Zuno 2025. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;








