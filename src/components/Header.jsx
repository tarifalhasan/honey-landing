import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex items-center py-5 justify-between container">
      <div className="inline-flex items-center gap-4">
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
            <FaTelegramPlane className="text-3xl text-[red] xl:text-5xl" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-3xl text-[red] xl:text-5xl" />
          </a>
        </ul>
      </div>

      <button className="p-3 lg:p-5 bg-black/10 text-xs lg:text-lg font-normal text-black rounded-[10px]">
        <span className="md:block  hidden">
          CA: B1KrhWbacPi3tpjWqnsbjKQJEkp3RvWppGxNzUYBpump
        </span>
        <span className="md:hidden  ">CA: B1KrhWb....</span>
      </button>
    </header>
  );
};

export default Header;
