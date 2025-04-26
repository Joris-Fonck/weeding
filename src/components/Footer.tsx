import React from 'react';

import Flower from '../assets/flower.webp';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-[#414042]/70 text-sm">
      <img src={Flower} className="w-full max-w-[1000px] mb-8 m-auto" />
      <p>Nous avons hâte de célébrer cet événement avec vous !</p>
      <p className="mt-2">
        <span className="font-serif italic">Juliette & Joris</span>
      </p>
    </footer>
  );
};

export default Footer;