/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base = `bg-yellow-400 text-sm uppercase font-semibold text-stone-800
            inline-block tracking-wide rounded-full hover:bg-yellow-300
            transition-colors duration-300 focus:outline-none focus:ring
            focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 `;

  const styles = {
    primary: base + " px-4 py-4 md:px-6 md:py-4",
    small: base + " py-2 px-2 md:px-5 md:py-2.5 text-xs",
    secondary: `border-2 text-sm border-stone-300  uppercase font-semibold text-stone-400
            inline-block tracking-wide rounded-full hover:bg-stone-300
             hover:text-stone-800 transition-colors duration-300 
             focus:outline-none focus:ring focus:ring-stone-300
             focus:bg-stone-300 focus:text-stone-800 
             focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5`,
    round: base + " py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
