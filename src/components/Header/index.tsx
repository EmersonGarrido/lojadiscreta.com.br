import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-12">
      <Image
        alt="Loja Discreta"
        src="/images/logo.png"
        width={200}
        height={80}
        quality={100}
      />
    </div>
  );
};

export default Header;
