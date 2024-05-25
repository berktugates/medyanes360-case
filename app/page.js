"use client";
import { useState } from "react";
import TopBox from "./components/TopBox";
import Label from "./components/Label";
import CustomerDetailTable from "./components/CustomerDetailTable";
import OrderUpdateForm from "./components/OrderUpdateForm";
import Messages from "./components/Messages";
import OrderTable from "./components/OrderTable";
import { dummyData } from "@/dummyData";
import NoteArea from "./components/NoteArea";

export default function Home() {
  const [data, setData] = useState(dummyData);
  return (
    <>
      <div id="container" className="h-screen flex justify-center">
        <div className="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/2">
          <div className="flex flex-col lg:flex-row border-b-text-gray border-b-4">
            <div
              id="left-part"
              className="lg:border-r-4 border-b-text-gray border-r-text-gray lg:w-2/3 w-full"
            >
              <div
                id="order-top-box"
                className="flex justify-center items-center p-2"
              >
                <img src="/case_img.jpg" className="w-24" />
                <TopBox
                  cost={data.order_status.order_cost}
                  no={data.order_status.order_no}
                  date={data.order_status.order_date}
                  status={data.order_status.order_status}
                />
              </div>
              <div id="order-details-box" className="mt-2">
                <Label value={"Sipariş Detayları"} />
                <div id="order-details-table">
                  <CustomerDetailTable
                    address={data.order_details.address}
                    authorizor={data.order_details.authorizor}
                    company_name={data.order_details.company_name}
                    email={data.order_details.email}
                    telephone={data.order_details.telephone}
                  />
                </div>
              </div>
              <div id="order-update-box">
                <Label value={"Sipariş Durumunu Güncelle"} />
                <div className="flex justify-center my-2">
                  <OrderUpdateForm
                    date={data.order_status.order_date}
                    status={data.order_status.order_status}
                    setData={setData}
                  />
                </div>
              </div>
            </div>
            <hr className="w-2 md:block hidden" />
            <div
              id="right-part"
              className="lg:w-1/3 w-full border-r-2 border-t-2 "
            >
              <div id="messages-box">
                <Messages messages={data.messages} setData={setData} />
                <NoteArea setData={setData} />
              </div>
            </div>
          </div>
          <div>
            <OrderTable order_items={data.order_items} />
          </div>
        </div>
      </div>
    </>
  );
}
