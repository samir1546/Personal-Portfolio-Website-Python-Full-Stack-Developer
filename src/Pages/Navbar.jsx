
const routes = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="fixed right-6 top-6 z-50 bg-transparent">

      <div
        className="flex gap-6 px-14 py-4 rounded-full border-b-2 border-white/20
                     backdrop-blur-3xl "
      >
        {routes.map((item) => (
          <div
            key={item}
            className="px-3 py-2 rounded-2xl
                         text-white font-medium cursor-pointer
                         border-b-2 border-transparent
                         hover:border-[#00ffbf]
                         hover:scale-110
                         
                         transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

  );
};

export default Navbar;
