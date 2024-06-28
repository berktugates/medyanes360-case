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
        <div className="mx-2 md:mx-8 lg:mx-12">
          <div className="flex flex-col lg:flex-row lg:mt-4 lg:gap-2">
            <div
              id="left-part"
              className="lg:w-2/3 w-full lg:border lg:border-gray-300 lg:shadow-md lg:rounded-xl lg:p-4"
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
              <div id="order-details-box" className="mt-2 border-b-2">
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
              <div id="order-update-box" className="mt-4">
                <div className="flex justify-center my-2">
                  <OrderUpdateForm
                    date={data.order_status.order_date}
                    status={data.order_status.order_status}
                    setData={setData}
                  />
                </div>
              </div>
            </div>
            <div
              id="right-part"
              className="lg:w-1/3 w-full lg:border lg:border-gray-300 lg:shadow-md lg:rounded-xl lg:p-4"
            >
              <div id="messages-box">
                <Messages messages={data.messages} setData={setData} />
                <NoteArea setData={setData} />
              </div>
            </div>
          </div>
          <div className="lg:mt-3">
            <OrderTable order_items={data.order_items} />
          </div>
        </div>
      </div>
    </>
  );
}
