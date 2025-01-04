import logo from "../../assets/imgs/logo-one.png";
import SmallStar from "../../assets/svgs/SmallStar";
import Button from "../../ui/Button/Button";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between rounded-full bg-white px-8 py-4">
      <img
        src={logo}
        alt="logo-one"
        loading="lazy"
        className="h-[3.5rem] cursor-pointer"
      />

      <ul className="flex items-center gap-8">
        <li className="relative">
          <a
            href="#"
            className="text-xl font-medium gradient-text hover:underline"
          >
            <span>Home</span>

            <span className="absolute top-0 -right-2">
              <SmallStar />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium hover:underline">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium hover:underline">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium hover:underline">
            Resource
          </a>
        </li>
      </ul>

      <Button bg="gradient">Contact Us</Button>
    </nav>
  );
}
