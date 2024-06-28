import OrderLabel from "./OrderLabel";

export default function CustomerDetailTable({address, authorizor, company_name, email, telephone}) {
  return (
    <>
      <div className="mt-2">
        <OrderLabel
          name={"Yetkili İsim"}
          value={authorizor}
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Firma İsmi"}
          value={company_name}
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Telefon"}
          value={telephone}
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"E-mail"}
          value={email}
        />
        <hr className="border-t-2 mb-2" />
        <OrderLabel
          name={"Adres"}
          value={address}
        />
      </div>
    </>
  );
}
