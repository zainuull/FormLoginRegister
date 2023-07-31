import banner1 from "../assets/banner.jpg";
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

import foto1 from "../assets/foto1.jpg";

import NavbarItem from "../components/NavbarItem/NavbarItem";

const Product = () => {
  return (
    <div className="w-full h-[1200px] flex flex-col">
      <div className="flex flex-col relative justify-between">
        <div className="w-full absolute flex justify-between px-6 py-4 items-center">
          <h1 className="text-2xl font-semibold">Fashion Store</h1>
          <NavbarItem />
          <button className="text-xl font-semibold text-white w-[120px] h-[45px] rounded-md bg-black hover:bg-transparent transition hover:border-2 hover:border-black">Buy now</button>
        </div>
        <div className="absolute bottom-1/2 px-6">
          <h1 className="text-6xl font-bold">Find your style fashion.</h1>
          <p className="w-[600px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, libero deleniti eligendi accusamus esse in quisquam voluptates doloribus possimus maiores!</p>
        </div>
        <img src={banner1} className="w-full h-[900px] object-cover" />
        <div className="absolute bottom-10 flex gap-x-6">
          <img src={foto1} className="w-[400px] h-[400px] object-cover" />
          <div id="slider" className="flex gap-x-4">
            <div className="w-[400px] h-[400px] flex flex-col bg-white rounded-md">
              <img src={banner2} className="object-cover w-full h-[300px]" />
              <div className="p-2">
                <h1 className="text-xl font-semibold">Product name</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum sapiente voluptates! Quidem tempore, quis vel odio doloremque, cumque nihil asperiores eveniet ab nulla blanditiis sunt minus iusto dolore. Molestiae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product