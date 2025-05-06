import React, { useRef } from "react";

import logo from "@/assets/image/logo.jpg";

interface InvoiceProps {
  companyName: string;
  companyLogo: string;
  name: string;
  bookingId: string;
  timeAndDate: string;
  from: string;
  to: string;
  bookingType: string;
  bookingStatus: string;
  distance: string;
  flt_no: string;
  sp_req?: string;
  vehicleType: string;
  mob_number: string;
  email: string;
  pax: string;
  emergency_number: string;
}

const InvoiceComponent: React.FC<InvoiceProps> = ({
  companyName,
  // companyLogo,
  name,
  bookingId,
  timeAndDate,
  from,
  to,
  bookingType,
  bookingStatus,
  distance,
  flt_no,
  sp_req = "N/A",
  vehicleType,
  mob_number,
  email,
  pax,
}) => {
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="mx-auto min-h-[297mm] w-[210mm] rounded-lg border bg-white p-4 shadow-lg"
      ref={invoiceRef}
    >
      <div className="p-2">
        {/* ✅ Header (Company Logo & Title) */}
        <div className="flex h-[46px] items-center justify-center border-b">
          <img src={logo} alt="Company Logo" className="h-22 w-32" />
        </div>

        {/* ✅ Greeting */}
        <div className="mb-4 text-left">
          <p className="mt-4 text-lg leading-10 text-gray-900">Dear, {name},</p>
          <p className="mt-2 leading-10 text-gray-700">
            Thank you for booking with {companyName}. Below is your booking
            summary:
          </p>
        </div>
        {/* ✅ Booking Details */}
        <div className="mt-6 items-center rounded-lg border border-[#5E5E5E] border-opacity-40 bg-[#EAF0F333] px-4 pb-4 pt-1">
          <h3 className="mb-2 items-center border-b pb-4 text-left text-lg font-semibold text-gray-800">
            Booking Details
          </h3>
          <div className="grid grid-cols-[160px,1fr] gap-y-3 text-left text-sm text-gray-900">
            <p className="font-medium text-[#6A6A6A]">Booking ID:</p>
            <p className="font-medium text-[#1E1E1E]">{bookingId}</p>

            <p className="font-medium text-[#6A6A6A]">Pickup Date & Time:</p>
            <p className="font-medium text-[#1E1E1E]">{timeAndDate}</p>

            <p className="font-medium text-[#6A6A6A]">Pickup:</p>
            <p className="ffont-medium text-[#1E1E1E]">{from}</p>

            <p className="font-medium text-[#6A6A6A]">Drop Off:</p>
            <p className="font-medium text-[#1E1E1E]">{to}</p>

            <p className="font-medium text-[#6A6A6A]">Booking Type:</p>
            <p className="font-medium text-[#1E1E1E]">{bookingType}</p>

            <p className="font-medium text-[#6A6A6A]">Booking Status:</p>
            <p className="font-medium text-[#28A745]">{bookingStatus}</p>

            <p className="font-medium text-[#6A6A6A]">Distance:</p>
            <p className="font-medium text-[#1E1E1E]">{distance}</p>

            <p className="font-medium text-[#6A6A6A]">Flight/Train No.:</p>
            <p className="font-medium text-[#1E1E1E]">{flt_no}</p>

            <p className="font-medium text-[#6A6A6A]">Special Request:</p>
            <p className="font-medium text-[#1E1E1E]">{sp_req}</p>
          </div>
        </div>

        {/* ✅ Car Details */}
        <div className="mt-6 items-center rounded-lg border border-[#5E5E5E] border-opacity-40 bg-[#EAF0F333] px-4 pb-4 pt-1">
          <h3 className="mb-2 items-center border-b pb-4 text-left text-lg font-semibold text-gray-800">
            Car Details
          </h3>
          <div className="grid grid-cols-[160px,1fr] gap-y-2 text-left text-sm">
            <p className="font-medium text-[#6A6A6A]">Vehicle Type:</p>
            <p className="font-medium text-[#1E1E1E]">{vehicleType}</p>
          </div>
        </div>

        <div className="mt-6 items-center rounded-lg border border-[#5E5E5E] border-opacity-40 bg-[#EAF0F333] px-4 pb-4 pt-1">
          <h3 className="mb-2 items-center border-b pb-4 text-left text-lg font-semibold text-gray-800">
            Passenger Details
          </h3>
          <div className="grid grid-cols-[160px,1fr] gap-y-3 text-left text-sm font-medium">
            <p className="text-sm text-[#6A6A6A]">Name</p>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-sm text-[#6A6A6A]">Email</p>
            <p className="text-sm font-medium">{email}</p>
            <p className="text-sm text-[#6A6A6A]">Contact</p>
            <p className="text-sm font-medium">{mob_number}</p>
            <p className="text-sm text-[#6A6A6A]">No. of Pax:</p>
            <p className="text-sm font-medium">{pax}</p>
          </div>
        </div>
        {/* ✅ Passenger Details */}
        {/* <div className="bg-[#EAF0F333] border border-[#5E5E5E80] p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2 text-left">Passenger Details</h3>
          <div className="grid grid-cols-[160px,1fr] xl:grid-cols-[160px,1fr] gap-y-2 text-gray-900 text-sm">
            <p className="font-semibold">Name:</p> <p>{name}</p>
            <p className="font-semibold">Mobile:</p> <p>{mob_number}</p>
            <p className="font-semibold">Email:</p> <p>{email}</p>
            <p className="font-semibold">No. of Pax:</p> <p>{pax}</p>
          </div>
        </div> */}

        {/* ✅ Disclaimer */}
        <div className="mt-10 border-t pt-3 text-xs text-gray-500">
          <p>
            ** Prices include statutory taxes. Free cancellation up to 24 hours
            before pickup. Booking amendments within 24 hours are subject to
            availability.
          </p>
        </div>

        {/* ✅ Social Media Links */}
        {/* <div className="mt-20 flex flex-col items-center"> */}
          {/* <div className="flex gap-2">
            <span>
            <a href=" https://www.facebook.com/share/1Bf6ZUaVMt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Facebook1Icon className="h-8 w-8" />
              </a>
            </span>
            <span>
            <a href="https://www.instagram.com/drivado_official/" target="_blank" rel="noopener noreferrer">
              <Instagram1Icon className="h-8 w-8" />
              </a>
            </span>
            <span>
            <a href="https://www.linkedin.com/company/drivado/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon1 className="h-8 w-8" />
              </a>
            </span>
          </div> */}
          {/* <p className="mt-0 text-sm font-normal">
            Copyright © 2022. All Rights Reserved.
          </p>
          <p className="text-xs font-bold">Drivado Transfers Pvt Ltd.</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default InvoiceComponent;
