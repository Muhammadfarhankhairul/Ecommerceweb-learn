import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../assets/image/logo.jpg";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className="bg-gray-900 shadow-md">
      <div className="container  px-4  place-self-center">
        <div className="min-h-16">
          <div className="flex justify-between flex-col items-center md:flex-row py-10">
            <h2 className="text-white text-xl font-semibold">Join Us</h2>
            <form className="md:w-1/3  w-full mt-8 md:mt-0 relative">
              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded shadow-md w-full bg-white "
              />
              <button className="bg-black text-white py-2 px-4 rounded-full absolute right-3 top-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
            <div>
              <img src={Logo} alt="logo" className="rounded-xl w-30 my-4" />
              <p>
                Kami berdiri sejak 2002 PT. Techno Media merupakan e-commerce
                yang membantu untuk memenuhi kebutuhan konsumen dalam mecari
                alat komunikasi. kantor pusat kami beralamat di Jakarta Barat
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                veritatis eveniet corrupti!
              </p>
              <div className="flex items-center gap-8 mt-4">
                <Facebook
                  size={40}
                  className="bg-blue-800 text-white rounded-full p-2"
                />
                <Instagram
                  size={40}
                  className="bg-gradient-to-br from-purple-600 via-red-400 to-yellow-500 text-white rounded-full p-2"
                />
                <Twitter
                  size={40}
                  className="bg-blue-500 text-white rounded-full p-2"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-white text-xl my-2">
                Techno Media
              </h2>
              <ul>
                <li>
                  <Link>Career</Link>
                </li>
                <li>
                  <Link>Warranty Information</Link>
                </li>
                <li>
                  <Link>Service Center</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white text-xl my-2">
                Categories
              </h2>
              <ul>
                <li>
                  <Link>Smartphone</Link>
                </li>
                <li>
                  <Link>Monitor</Link>
                </li>
                <li>
                  <Link>RAM Soon</Link>
                </li>
                <li>
                  <Link>Cooler Soon</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white text-xl my-2">
                Contact Us
              </h2>
              <p>
                Jl. Kenangan piluh No. 06 Blok MA III, Kec. Pasar kacang, Kel.
                Kebon pisang, Jakarta Timur Indonesia
              </p>
              <p>+6288214739128</p>
              <p>techno@media.co.id</p>
            </div>
          </div>
        </div>
        <div className="container place-self-center text-center text-white py-2 border-t-2 border-white mt-5 font-semibold ">
          <p>Copyright &copy; farhankhairulmalik</p>
        </div>
      </div>
    </div>
  );
}
