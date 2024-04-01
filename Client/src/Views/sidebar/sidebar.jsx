import Logo from '/img/logo-color.svg'
import { Link } from 'react-router-dom'
import { UseAuth } from '../../../context/AuthContext'
export const SideBar = () => {
  const { isAuthenticated, Logout } = UseAuth()

  return (
    <>
      <div className=" md:hidden container flex flex-col mx-auto">
        <div className=" flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200  ">
          <div className="flex px-8 items-center justify-between h-[96px]">
            <img alt="Logo" src={Logo} className="inline w-[90px] rounded-xl" />
          </div>

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
                    href="/allProducts"
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
              {isAuthenticated == false ? (
                <>
                  <Link
                    className="m-1 text-purple-800 font-bold text-lg"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="m-1 rounded-xl   text-lg font-bold  text-purple-900 transition duration-200"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <Link
                  onClick={() => Logout()}
                  className="m-1 text-purple-800 font-bold text-lg"
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
