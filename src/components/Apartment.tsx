import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LesEpinays from "@/assets/les-epinays.webp"
import LeTempsQuilFaut from "@/assets/le-temps-quil-faut.webp";
import Airbnb from "@/assets/airbnb.png";
import LesStiers from "@/assets/les-stiers.webp";

const apartments = [
  {
    name: "Hôtel Le Temps qu'il Faut",
    address: "19 Rue du Temple, 35150 Piré-Chancé",
    link: "https://www.letempsquilfaut.fr/chambres-h%C3%B4tel/",
    phone: "+33 2 99 44 24 51",
    image: LeTempsQuilFaut
  },
  {
    name: "Gîte Les Epinays",
    address: "Les Epinays, 35150 Piré-Chancé",
    link: "https://www.gites-chambres-hotes-lesepinays.fr/",
    phone: "+33 2 99 00 01 16",
    image: LesEpinays
  },
  {
    name: "Les Stiers",
    address: "Les Stiers Chancé, 35680 Piré-Chancé",
    link: "https://www.chambredhote-stiers-35.com/",
    phone: "+33 2 99 49 03 53",
    image: LesStiers
  },
  {
    name: "Appartements sur Airbnb",
    link: "https://www.airbnb.fr/",
    image: Airbnb
  }
];

const Apartment = () => {
  return (
    <motion.div
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-serif text-center text-[#414042] mb-12">
        Où dormir ?
      </h2>
      <p className="text-center text-[#414042]/80 mb-8">
        A titre d'exemple, liste non exhaustive des logements à proximité du lieu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {apartments.map((apartment, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: true,
            margin: "-100px",
          });

          return (
            <motion.div
              ref={ref}
              key={apartment.name}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: `all 1.5s ease-out ${index * 0.2}s`
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <a href={apartment.link} target="_blank" rel="noopener noreferrer">
                 <div className="aspect-[5/3] relative">
                    <img
                      src={apartment.image}
                      alt={`Vue extérieure de ${apartment.name}`}
                      className="object-cover w-[500px] h-[300px]"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-[#414042]">
                        {apartment.name}
                      </CardTitle>
                    </CardHeader>
                    {(apartment.address || apartment.phone) && (<CardContent className="mt-auto">
                      <p className="text-[#414042]/80 mb-2">{apartment.address}</p>
                      <p className="text-[#414042]/80 font-medium">{apartment.phone}</p>
                    </CardContent>)}
                  </div>
                </a>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Apartment;