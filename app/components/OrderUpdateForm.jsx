"use client";
import React, { useState } from "react";

export default function OrderUpdateForm({ date, status, setData }) {
  const [tempDate, setTempDate] = useState(date);
  const [tempStatus, setTempStatus] = useState(status);

  const handleUpdate = () => {
    setData((prevData) => ({
      ...prevData,
      order_status: {
        ...prevData.order_status,
        order_date: tempDate,
      },
    }));
    setData((prevData) => ({
      ...prevData,
      order_status: {
        ...prevData.order_status,
        order_status: tempStatus,
      },
    }));

    // yeni eklenecek mesajın şablonu
    const newMessage = {
      role: "admin",
      message: `Siparişiniz ${status} durumundan  ${tempStatus} durumuna geçirildi.`,
      date: tempDate,
    };
    setData((prevData) => ({
      ...prevData,
      messages: [newMessage, ...prevData.messages],
    }));
  };

  return (
    <>
      <div className="p-6 bg-white rounded shadow-md w-full max-w-lg mt-2">
        <div className="flex items-center justify-between">
          <h2 className="md:text-lg font-medium mb-4">Genel</h2>
          <button
            className="bg-sky-600 text-white font-medium py-1 md:py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-sky-700 hover:scale-105 hover:transition-all"
            type="button"
            onClick={handleUpdate}
          >
            Güncelle
          </button>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="created-date"
          >
            Oluşturulan tarih:
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="created-date"
            type="date"
            value={tempDate}
            onChange={(e) => {
              setTempDate(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Durum:
          </label>
          <select
            className="block appearance-none w-3/4 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            value={tempStatus}
            onChange={(e) => {
              setTempStatus(e.target.value);
            }}
          >
            <option>Başarısız</option>
            <option>Beklemede</option>
            <option>Hazırlanıyor</option>
            <option>Tamamlandı</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customer"
          >
            Müşteri:
          </label>
          <div className="relative">
            <div className="relative w-3/4 max-w-sm">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="customer"
              >
                <option>Ahmet Emin Demir (#734 - ahmetemind9@gmail.com)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.95 7.95a1 1 0 00-1.41-1.41l-3.54 3.54-3.54-3.54a1 1 0 10-1.41 1.41l3.54 3.54-3.54 3.54a1 1 0 101.41 1.41l3.54-3.54 3.54 3.54a1 1 0 001.41-1.41l-3.54-3.54 3.54-3.54z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
