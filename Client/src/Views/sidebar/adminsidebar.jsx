import Logo from '/img/logo-color.svg';
import Shopping from '/img/shopping-cart.png';

export const AdminSideBar = (props) => {
  return (
    <>
      <div className="md:hidden container flex flex-col mx-auto bg-white">
        <aside
          className="flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 fixed-start loopple-fixed-start"
          id="sidenav-main"
        >
          <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <img alt="Logo" src={Logo} className=" w-16 rounded-md" />
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
              <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                    src={Shopping}
                    alt="avatar image"
                  />
                </div>
              </div>
              <div className="mr-2 ">
                <a
                  href="#"
                  className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
                >
                  {props.name}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div className="relative pl-3 my-5 ">
            <div className="flex flex-col w-full font-medium">
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="/"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Home
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="/about"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    About
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="/allProducts:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Shop
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="/ShoppingCar"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Shopping Car
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="flex flex-wrap ml-9 my-5"></div>
    </>
  );
};
