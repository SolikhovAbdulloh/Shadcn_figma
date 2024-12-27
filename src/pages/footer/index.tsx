import logo from "../../../public/logo.png";
function Footer() {
  return (
    <div>
        <div className="border-[solid] border-[1px] border-[grey] my-2 w-full"></div>
      <div className="flex justify-between items-center">

        <img className="cursor-pointer" src={logo} alt="logo" />
        <div className="flex items-center gap-4">
          <a href="#">contact us</a>
          <a href="#"> terms of service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
