import { motion } from 'framer-motion';

const Other = () => {
  return (
    <motion.div
      className="py-16 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-serif text-center text-[#414042] mb-12">
        Autres informations
      </h2>

      <ul className="sans-serif">
        Voici quelques informations complémentaires pour que cette journée soit la plus agréable possible pour nous tous :

        <div className="mt-12 flex flex-col items-center gap-4">
          <li>
            - Merci de nous faire savoir si vous avez des allergies ou un régime alimentaire particulier (Végétarien, etc.) 🍕🍔🍟
          </li>
          
          <li>
            - Nous avons déjà la vaisselle ! Si vous souhaitez participer à notre voyage (ou à un autre projet), une urne sera disponible le jour J ✈️
          </li>
          
          <li>
            - Les tentes, vans, camping-cars et tout autre véhicule habitable sont autorisés pour dormir sur place ⛺🚐
          </li>
        </div>
      </ul>
    </motion.div>
  );
};

export default Other;
