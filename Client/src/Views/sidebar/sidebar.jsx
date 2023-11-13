import Logo from '/img/logo-color.svg'
export const SideBar = () => {
  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <aside
          className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
          id="sidenav-main"
        >
          <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <a className="transition-colors duration-200 ease-in-out" href="/">
              <img alt="Logo" src={Logo} className="inline" />
            </a>
          </div>

          <div className="relative pl-3 my-5 overflow-y-scroll">
            <div className="flex flex-col w-full font-medium">
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Sales
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Profile
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Settings
                  </a>
                </span>
              </div>

              <div className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                  <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                    Applications
                  </span>
                </div>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Users
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Orders
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Track Order
                  </a>
                </span>
              </div>

              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Products
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
