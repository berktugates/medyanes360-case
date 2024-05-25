export default function OrderTable({ order_items }) {
  // product isimlerini aralarında boşluk olacak şekilde yan yana sıralanması için
  const productNames = order_items
    .map((order) => {
      return `${order.product_name} x${order.quantity}`;
    })
    .join(" ");

  // satın alınan ürünlerin toplam tutarı
  const totalCost = order_items.reduce((total, order) => {
    return total + order.unit_cost * order.quantity;
  }, 0);

  return (
    <div className="bg-table-gray border-l-2  overflow-y-auto ">
      <table className="bg-white lg:min-w-full">
        <thead className="bg-table-gray text-gray-400 gap-3">
          <tr>
            <th className="border-b px-1 py-1 md:py-2 md:px-3 border-gray-300 text-left text-sm font-normal">
              Ürün
            </th>
            <th className="border-b px-1 text-center border-gray-300 text-sm font-normal">
              Maliyet
            </th>
            <th className="border-b px-1 md:px-3 text-center border-gray-300 text-sm font-normal">
              Miktar
            </th>
            <th className="border-b px-1 md:py-2 md:px-3 text-center border-gray-300 text-sm font-normal">
              Toplam
            </th>
          </tr>
        </thead>
        <tbody>
          {order_items.map((order, index) => {
            return (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-3 border-b border-gray-300 flex items-center">
                  <img
                    src={order.img}
                    alt={order.product_name}
                    className="w-12 h-12 mr-2"
                  />
                  <a
                    href="#"
                    className="text-sky-600 underline text-xs md:text-sm"
                  >
                    {order.product_name}
                  </a>
                </td>
                <td className="border-b border-gray-300 text-center text-xs md:text-sm">
                  ₺{order.unit_cost}
                </td>
                <td className="border-b border-gray-300 text-center text-xs md:text-sm">
                  x {order.quantity}
                </td>
                <td className="border-b border-gray-300  text-center text-xs md:text-sm">
                  ₺{order.total_cost}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="total-orders" className="bg-white mt-2 p-4">
        <div className="flex flex-wrap justify-between items-center p-3">
          <div className="flex items-center">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-2 me-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 7C2 5.89543 2.89543 5 4 5H16C17.1046 5 18 5.89543 18 7V18H4C2.89543 18 2 17.1046 2 16V7Z"
                  fill="#B3B3B3"
                ></path>{" "}
                <path
                  d="M18 13L21.5 13C21.7761 13 22 13.2239 22 13.5V18H18V13Z"
                  fill="#B3B3B3"
                ></path>{" "}
                <circle cx="7" cy="19" r="2" fill="#B3B3B3"></circle>{" "}
                <circle cx="17" cy="19" r="2" fill="#B3B3B3"></circle>{" "}
                <path
                  d="M17 19C17 18.7348 17.1054 18.4804 17.2929 18.2929C17.4804 18.1054 17.7348 18 18 18H20V14H18V19Z"
                  fill="#B3B3B3"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-sm md:text-base">Ücretsiz Kargo</p>
          </div>
          <div>
            <p className="text-sm md:text-base">₺0,00</p>
          </div>
        </div>
        <div className="flex flex-wrap w-full lg:w-2/3 gap-4 p-1">
          <p className="ms-4 text-sm md:text-base">Ürünler:</p>
          <p className="w-2/3 text-sm  text-gray-400">{productNames}</p>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-y-4 items-end me-4">
        <div className="flex">
          <p className="me-8">Öğe alt toplamı :</p> <p>₺{totalCost}</p>
        </div>
        <div className="flex">
          <p className="me-9">Gönderim :</p> <p>₺0,00</p>
        </div>
        <div className="flex">
          <p className="me-8">Sipariş toplamı :</p> <p>₺{totalCost}</p>
        </div>
      </div>
    </div>
  );
}
