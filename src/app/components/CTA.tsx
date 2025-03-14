import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroImg from "../../../public/image.png";

const CTA = () => {
  return (
    <div className="w-full h-[380px] border-2 border-black flex gap-10 rounded-2xl p-8 relative ">
      <div className="left flex flex-1 gap-6 flex-col">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="font-bold text-2xl">Let’s make things happen</h1>
          <p>
            Nemo tempora adipisci et. Error earum id quam. Tenetur quidem optio
            tempora est qui eius tempore laudantium est magnam dicta. Nam
            provident enim rem et consequuntur qui error doloremque aut.
          </p>
          <Button
              name="Start Practicing Now!"
              width="200px"
              height="40px"
              backgroundColor="black"
              textColor="white"
              borderRadius="16px"
            />
        </div>
      </div>
      <div className="flex flex-1">
      <Image src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default CTA;
