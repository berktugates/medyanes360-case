import OrderLabel from "./OrderLabel";

export default function CustomerDetailTable({address, authorizor, company_name, email, telephone}) {
  return (
    <>
      <div className="mt-2">
        <OrderLabel
          name={"Yetkili İsim"}
          value={authorizor}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Firma İsmi"}
          value={company_name}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Telefon"}
          value={telephone}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"E-mail"}
          value={email}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Adres"}
          value={address}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />
      </div>
    </>
  );
}
