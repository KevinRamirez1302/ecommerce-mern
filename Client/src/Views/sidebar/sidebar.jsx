import Logo from '/img/logo-color.svg';
export const SideBar = () => {
  return (
    <>
      <div className=" md:hidden container flex flex-col mx-auto bg-white">
        <aside
          className=" flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200  "
          id="sidenav-main"
        >
          <div className="flex px-8 items-center justify-between h-[96px]">
            <img alt="Logo" src={Logo} className="inline w-[90px] rounded-xl" />
          </div>

          <div className="relative pl-3 my-5 ">
            <div className="flex flex-col w-full font-medium">
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
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
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Services
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="/"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Shop
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
