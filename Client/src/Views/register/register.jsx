export const Register = () => {
  return (
    <>
      <section className="w-full h-92 flex items-center justify-center">
        <form
          className=" w-3/5 flex flex-col items-center justify-center h-80"
          action=""
        >
          <h2 className="text-center mb-10 text-xl font-bold text-violet-800 ">
            Register
          </h2>
          <input
            className="w-80 bg-gray-200 transition-all m-1 text-black p-2 px-4 rounded focus:outline-none focus:outline-violet-800"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-80 bg-gray-200 transition-all m-1 text-black p-2 focus:outline-none px-4 focus:outline-violet-800 rounded"
            type="email"
            placeholder="email"
          />
          <input
            className=" w-80 bg-gray-200 transition-all m-1 focus:outline-none text-black p-2 px-4 focus:outline-violet-800 rounded"
            type="text"
            placeholder="Password"
          />
          <button className=" bg-violet-800 pl-5 pr-5 pt-2 pb-2  w-40 m-4 text-white font-bold">
            Enter
          </button>
        </form>
        <div className=" w-2/5 h-92 flex flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-fuchsia-400 ">
          <h1 className=" m-3 font-bold text-white text-3xl">New Here ? </h1>
          <p className="font-bold text-white text-xl text-center px-8">
            Sign up and Style at your Fingertips - Shop E-commerce Cloth Today!
          </p>
        </div>
      </section>
    </>
  )
}
