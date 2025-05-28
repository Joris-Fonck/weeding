import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const apartments = [
  {
    name: "Le Château de la Robinais",
    address: "La Robinais, 35230 Saint-Erblon",
    phone: "+33 2 99 52 25 62",
    image: "https://place-hold.it/500x300"
  },
  {
    name: "Gîte du Verger",
    address: "3 Rue du Verger, 35230 Saint-Erblon",
    phone: "+33 2 99 52 25 63",
    image: "https://place-hold.it/500x300"
  },
  {
    name: "La Maison du Bourg",
    address: "12 Place de l'Église, 35230 Saint-Erblon",
    phone: "+33 2 99 52 25 64",
    image: "https://place-hold.it/500x300"
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
                <div className="aspect-[5/3] relative">
                  <img
                    src={apartment.image}
                    alt={`Vue extérieure de ${apartment.name}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-[#414042]">
                      {apartment.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-[#414042]/80 mb-2">{apartment.address}</p>
                    <p className="text-[#414042]/80 font-medium">{apartment.phone}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Apartment;