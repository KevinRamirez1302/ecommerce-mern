export const Notfound = () => {
  return (
    <>
      <section className="p-6 md:flex w-full justify-center items-center">
        <div className=" p-10 md:w-2/4 text-center">
          <h1 className="font-sans m-2 font-bold  text-5xl">404 Not found</h1>
          <h3 className="font-serif font-semibold text-3xl">Sorry...</h3>
        </div>
        <img
          className=" md:w-2/4 rounded-lg justify-center items-center"
          src="https://pbs.twimg.com/media/EpAnlCnXcAYow0j.jpg:large"
          alt=""
        />
      </section>
    </>
  );
};
