import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex py-6 border-t  border-black justify-center ">
      <div className="flex justify-center items-center container gap-4">
        <h4
          style={{
            textShadow: `
        3px 3px 0 #2d3436,
        -1px -1px 0 #2d3436,  
        1px -1px 0 #2d3436,
        -1px 1px 0 #2d3436,
        1px 1px 0 #2d3436,
        4px 4px 8px rgba(0,0,0,0.3)
      `,
          }}
          className="text-[#F5C11E] font-comicBold text-2xl lg:text-5xl"
        >
          Honey
        </h4>
        <ul className="inline-flex items-center gap-2 mt-2.5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="text-3xl hover:text-blue-500 transition-colors duration-700 text-[red] xl:text-5xl" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-3xl hover:text-blue-500 transition-colors duration-700 text-[red] xl:text-5xl" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
