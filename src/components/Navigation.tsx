import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createUrlWithParams } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav 
      className="flex justify-center gap-8 py-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to={createUrlWithParams('/')} 
        className={`text-lg relative group ${
          location.pathname === '/' ? 'text-[#414042]' : 'text-[#414042]/70'
        }`}
      >
        La timeline
        <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-[#414042] transform origin-left transition-transform duration-300 ease-out ${
          location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`} />
      </Link>
      <Link 
        to={createUrlWithParams('/apartment')} 
        className={`text-lg relative group ${
          location.pathname === '/apartment' ? 'text-[#414042]' : 'text-[#414042]/70'
        }`}
      >
        Les logements
        <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-[#414042] transform origin-left transition-transform duration-300 ease-out ${
          location.pathname === '/apartment' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`} />
      </Link>
    </motion.nav>
  );
};

export default Navigation;