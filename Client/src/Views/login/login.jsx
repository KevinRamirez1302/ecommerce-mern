export const Login = () => {
  return (
    <>
      <form
        className="flex flex-col items-center justify-center h-80"
        action=""
      >
        <h2 className="text-center m-4 ">Login</h2>
        <input
          className="w-60 bg-gray-200 transition-all m-1 text-black p-2 px-4 rounded"
          type="email"
          placeholder="email"
        />
        <input
          className=" w-60 bg-gray-200 transition-all m-1 text-black p-2 px-4 rounded"
          type="text"
          placeholder="Password"
        />
        <button className="bg-violet-800 pl-5 pr-5 pt-2 pb-2  w-40 m-4">
          Enter
        </button>
      </form>
    </>
  );
};
