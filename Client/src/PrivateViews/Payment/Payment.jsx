import { Input, Button } from '@chakra-ui/react'
import Mastercard from '/img/mastercard.png'
import Visa from '/img/visa.png'

export const Payment = () => {
  return (
    <>
      <section className="w-full h-92 flex items-center justify-center">
        <div className="w-3/5 flex flex-col items-center justify-center ">
          <form
            className=" w-3/5 flex flex-col items-center justify-center h-80"
            action=""
          >
            <h2 className="text-center mb-10 text-xl font-bold text-violet-800 ">
              Payment
            </h2>

            <div className="flex flex-col">
              <Input
                margin={2}
                variant="filled"
                htmlSize={25}
                width="auto"
                placeholder="Card Number"
                focusBorderColor="purple.400"
              />
              <div className="flex float-left">
                <img className=" w-5 m-1" src={Mastercard} alt="" />
                <img className=" w-5 m-1" src={Visa} alt="" />
              </div>

              <Input
                variant="filled"
                margin={2}
                htmlSize={12}
                width="auto"
                placeholder="Fecha"
                focusBorderColor="purple.400"
              />
              <Input
                variant="filled"
                margin={2}
                width="auto"
                placeholder="CVC"
                focusBorderColor="purple.400"
              />
            </div>

            <Button type="submit">Pay</Button>
          </form>
        </div>
      </section>
    </>
  )
}
