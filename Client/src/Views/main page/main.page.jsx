const productos = [
  {
    nombre: 'Asus pc',
    precio: '$1500',
    modelo: 'Asus',
    imagen:
      'https://elbootic.com/wp-content/uploads/2023/08/PC-ASUS-D415DA-BV873T-R3-3250U4G-WIN12GO-1TO-256-Go-nvme-NUMPAD-GRIS.png'
  },
  {
    nombre: 'Acer pc',
    precio: '$700',
    modelo: 'Acer',
    imagen:
      'https://elbootic.com/wp-content/uploads/2023/08/PC-ASUS-D415DA-BV873T-R3-3250U4G-WIN12GO-1TO-256-Go-nvme-NUMPAD-GRIS.png'
  },
  {
    nombre: 'Gateway pc',
    precio: '$350',
    modelo: 'Gateway',
    imagen:
      'https://elbootic.com/wp-content/uploads/2023/08/PC-ASUS-D415DA-BV873T-R3-3250U4G-WIN12GO-1TO-256-Go-nvme-NUMPAD-GRIS.png'
  }
]

import imgTest from '/img/logo-color.svg'

export const MainPage = () => {
  return (
    <>
      <section
        className=" px-16 py-20 w-full flex flex-nowrap justify-center items-center "
        id="promotion"
      >
        <div className="flex justify-center">
          <img src={imgTest} className=" w-full" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imgTest} className=" w-2/5" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imgTest} className=" w-1/4" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imgTest} className=" w-1/4" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imgTest} className=" w-2/5" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imgTest} className=" w-1/4" alt="" />
        </div>
      </section>
      <div className=" flex">
        {productos.map(({ nombre, precio, modelo, imagen }) => {
          return (
            <div className="flex flex-col m-10 text-center " key={modelo}>
              <h1>{nombre}</h1>
              <img className=" w-40" src={imagen} alt="" />
              <p>{precio}</p>
              <p className=" text-center">{modelo}</p>
              <button className=" bg-violet-800 px-5 py-2 rounded text-white font-semibold">
                Add card
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
