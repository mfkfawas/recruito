import logo from "../../assets/imgs/logo-one.png";
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
        <li>
          <a href="#" className="text-xl font-medium hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-medium">
            Resource
          </a>
        </li>
      </ul>

      <Button bg="gradient">Contact Us</Button>
    </nav>
  );
}
