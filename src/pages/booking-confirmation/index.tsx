import { useState, useEffect, useRef } from "react";
import Container from "@/components/container";
import InvoiceSvg from "@/assets/svgs/invoice-icon";
import DownloadIcon from "@/assets/svgs/download-icon";
import Confirmation from "@/assets/svgs/confirmation-icon";
import NavOptions from "@/components/nav-option";
import AffiliateVoucher from "./components/voucher";
import InvoiceComponent from "./components/invoice";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// import { fetchImageAsBase64 } from "./convertor";
// import fb from "@/assets/image/fb.png";

// import instagram from "@/assets/image/instagram.png";
// import youtube from "@/assets/image/youtube.png";
// import link from "@/assets/image/link.png";

export default function BookingConfirmation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const voucherRef = useRef<HTMLDivElement | null>(null);
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Booking Data
  const bookingData = {
    companyName: "Drivado",
    companyLogo: "https://example.com/logo.png",
    name: "Mr. Cameron Williamson",
    bookingId: "D0924-1919",
    timeAndDate: "August 15, 2025, 13:45",
    from: "London Heathrow Airport (LHR), TW6 1QG, United Kingdom Park Plaza Westminster Bridge London, SE1 7UT,",
    to: "Park Plaza Westminster Bridge London, SE1 7UT, United Kingdom",
    bookingType: "Oneway",
    bookingStatus: "Confirmed",
    distance: "115 km",
    vehicleType: "Standard Sedan",
    totalAmount: "239.74",
    mob_number: "+1 907-555-0101",
    email: "cameron@example.com",
    flt_no: "SK 2301",
    pax: "2",
    luggage: "3",
    tol_distance: "1 hour 16 min",
    sp_req: "One water bottle",
    emergency_number: "+1 908-555-0111",
  };

  // const addSocialIconsToPDF = async (pdf: jsPDF) => {
  //   const yPosition = 268; // Shifted slightly higher for better alignment
  //   const iconSize = 9; // Standardized icon size
  //   const gap = 6; // Consistent spacing between icons

  //   // ✅ Convert PNG images to Base64
  //   const facebookIconBase64 = await fetchImageAsBase64(fb);
  //   const instagramIconBase64 = await fetchImageAsBase64(instagram);
  //   const linkedinIconBase64 = await fetchImageAsBase64(link);
  //   const youtubeIconBase64 = await fetchImageAsBase64(youtube);

  //   // ✅ Calculate total width of all icons + spacing
  //   const totalWidth = iconSize * 4 + gap * 3; // 4 icons with 3 gaps
  //   const startX = (pdf.internal.pageSize.width - totalWidth) / 2; // Dynamically center icons

  //   // ✅ Add Facebook Icon and Clickable Link
  //   pdf.addImage(
  //     facebookIconBase64,
  //     "PNG",
  //     startX,
  //     yPosition,
  //     iconSize,
  //     iconSize,
  //   );
  //   pdf.link(startX, yPosition, iconSize, iconSize, {
  //     url: "https://www.facebook.com/share/1Bf6ZUaVMt/?mibextid=wwXIfr",
  //   });

  //   // ✅ Add Instagram Icon and Clickable Link
  //   pdf.addImage(
  //     instagramIconBase64,
  //     "PNG",
  //     startX + iconSize + gap,
  //     yPosition,
  //     iconSize,
  //     iconSize,
  //   );
  //   pdf.link(startX + iconSize + gap, yPosition, iconSize, iconSize, {
  //     url: "https://www.instagram.com/drivado_official/",
  //   });

  //   // ✅ Add LinkedIn Icon and Clickable Link
  //   pdf.addImage(
  //     linkedinIconBase64,
  //     "PNG",
  //     startX + (iconSize + gap) * 2,
  //     yPosition,
  //     iconSize,
  //     iconSize,
  //   );
  //   pdf.link(startX + (iconSize + gap) * 2, yPosition, iconSize, iconSize, {
  //     url: "https://www.linkedin.com/company/drivado/",
  //   });

  //   // ✅ Add YouTube Icon and Clickable Link
  //   pdf.addImage(
  //     youtubeIconBase64,
  //     "PNG",
  //     startX + (iconSize + gap) * 3,
  //     yPosition,
  //     iconSize,
  //     iconSize,
  //   );
  //   pdf.link(startX + (iconSize + gap) * 3, yPosition, iconSize, iconSize, {
  //     url: "https://www.youtube.com/@drivado",
  //   });
  // };

  // ✅ Fix: Capture and download Voucher PDF
  const downloadVoucher = async () => {
    if (!voucherRef.current) return;

    const element = voucherRef.current;
    const scale = 3;

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);

    // await addSocialIconsToPDF(pdf);

    pdf.save(`Booking_Voucher_${bookingData.bookingId}.pdf`);
  };

  // ✅ Fix: Capture and download Invoice PDF
  const downloadInvoice = async () => {
    if (!invoiceRef.current) return;

    const element = invoiceRef.current;
    const scale = 3;

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);

    // await addSocialIconsToPDF(pdf);

    pdf.save(`Invoice_${bookingData.bookingId}.pdf`);
  };

  return (
    <Container className="relative z-20 h-auto overflow-hidden bg-[#F6F7F9] pb-7">
      <div className="mt-5">
        <NavOptions />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full">
          {isMobile ? (
            <div className="block">
              <div className="items-center text-center">
                <div className="mb-1 flex flex-col items-center">
                  <Confirmation className="h-[35px] w-[35px]" />
                </div>

                <h1 className="mt-2 text-xs font-semibold text-[#28A745] sm:text-[12px]">
                  Thank you for your payment. Your booking is CONFIRMED
                </h1>
                <p className="mt-1 px-3 text-[10px] text-[#28A745]">
                  You will receive driver details at least 1 hour prior to
                  pick-up time
                </p>
              </div>

              {/* Booking Confirmation */}
              <div className="mb-6 mt-[34px] items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                <h2 className="mb-4 text-center text-sm font-semibold 2xl:text-[24px]">
                  Booking Confirmation
                </h2>
                <div className="h-max-32 flex justify-between text-sm">
                  <div className="w-max-80 h-max-32 rounded-lg border border-[#EDEDED] px-1">
                    <div className="space-y-[2px] text-left">
                      <p className="text-[9px] font-medium text-[#6D6D6D]">
                        Booking ID
                      </p>
                      <p className="text-xs font-semibold text-[var(--brand-theme-color)]">
                        {bookingData.bookingId}
                      </p>
                    </div>
                  </div>
                  <div className="w-max-80 h-max-32 rounded-lg border border-[#EDEDED] px-1 text-right">
                    <div className="space-y-[2px] text-left">
                      <p className="text-[9px] font-medium text-[#6D6D6D]">
                        Booking Status
                      </p>
                      <p className="text-xs font-semibold text-[#009951]">
                        {bookingData.bookingStatus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Journey Details */}
                <div className="mt-[47px]">
                  <div className="gap-[6px] text-xs text-[#282828]">
                    <span className="text-[10px] text-[#6D6D6D]">From:</span>
                    <p>{bookingData.from}</p>
                  </div>
                  <div className="mt-4 gap-[6px] text-xs text-[#282828]">
                    <span className="text-[10px] text-[#6D6D6D]">To:</span>
                    <p>{bookingData.to}</p>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs text-[#282828]">
                      <span className="text-[10px] text-[#6D6D6D]">Date:</span>
                      <p> {bookingData.timeAndDate.split(",")[0]}</p>
                    </div>
                    <div className="mt-4 text-xs text-[#282828]">
                      <span className="text-[10px] text-[#6D6D6D]">Time:</span>
                      <p>{bookingData.timeAndDate.split(",")[1]}</p>
                    </div>
                  </div>
                  <div className="mt-[28px] flex items-center space-x-2 text-[11px] font-semibold">
                    <div className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.pax}
                    </div>
                    <div className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.distance}
                    </div>
                    <div className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.tol_distance}
                    </div>
                    <div className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.bookingType}
                    </div>
                  </div>
                </div>
                <hr className="mt-4 w-full border-t border-[#C3D4E9]" />

                {/* Passenger Details */}
                <div className="mt-4">
                  <h3 className="mb-4 text-[10px] font-semibold text-[var(--brand-theme-color)]">
                    Passenger Details
                  </h3>
                  <div className="grid grid-cols-[75px,1fr] gap-y-4 text-xs mobM:grid-cols-[130px,1fr]">
                    <span className="text-xs text-[#6A6A6A]">Name</span>
                    <p className="font-medium">{bookingData.name}</p>
                    <span className="text-xs text-[#6A6A6A]">Email</span>
                    <p className="font-medium">{bookingData.email}</p>
                    <span className="text-xs text-[#6A6A6A]">Contact</span>
                    <p className="font-medium">{bookingData.mob_number}</p>
                    <span className="text-xs text-[#6A6A6A]">Flight</span>
                    <p className="font-medium">{bookingData.flt_no}</p>
                    <span className="text-xs text-[#6A6A6A]">
                      Special Request
                    </span>
                    <p className="font-medium">{bookingData.sp_req}</p>
                  </div>
                </div>

                <hr className="mt-4 w-full border-t border-[#C3D4E9]" />
                {/* Vehicle Details */}
                <div className="mt-6">
                  <h3 className="mb-4 text-[10px] font-semibold text-[var(--brand-theme-color)]">
                    Vehicle Details
                  </h3>
                  <div className="grid grid-cols-[130px,1fr] gap-y-4 text-xs">
                    <span className="text-xs text-[#6A6A6A]">Type:</span>
                    <p className="font-medium">{bookingData.vehicleType}</p>
                    <span className="text-xs text-[#6A6A6A]">
                      Passenger Capacity:
                    </span>
                    <p className="font-medium">{bookingData.pax}</p>
                    <span className="text-xs text-[#6A6A6A]">
                      Luggage Capacity:
                    </span>
                    <p className="font-medium">{bookingData.luggage}</p>
                  </div>
                </div>
                <hr className="mt-4 w-full border-t border-[#C3D4E9]" />

                {/* Price and Actions */}
                <div className="mt-[32px] text-center">
                  <div className="flex justify-between">
                    <span className="text-left">
                      <h3 className="text-sm font-semibold text-[var(--brand-theme-color)]">
                        Total Price
                      </h3>
                      <p className="mt-[3px] w-[120px] text-[9px] font-medium text-[#282828] mobM:w-max">
                        Includes VAT, Gratuities, Meet & Greet services
                      </p>
                    </span>
                    <span className="text-right">
                      <h1 className="text-xl font-semibold">
                        {bookingData.totalAmount}
                      </h1>
                    </span>
                  </div>
                  <div className="mt-6 flex justify-center gap-4 text-xs font-medium">
                    <div className="flex w-full justify-center gap-4">
                      <button
                        onClick={downloadVoucher}
                        className="flex w-full items-center gap-2 rounded-lg bg-[#282828] px-6 py-2 text-white sm:w-auto"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        Voucher
                      </button>
                      <button
                        onClick={downloadInvoice}
                        className="flex w-full items-center gap-2 rounded-lg bg-[var(--brand-theme-color)] px-6 py-2 text-white sm:w-auto"
                      >
                        <InvoiceSvg className="h-4 w-4" />
                        Invoice
                      </button>
                    </div>

                    {/* ✅ Hidden Sections for PDF Generation */}
                    <div className="absolute left-[-9999px]" ref={voucherRef}>
                      <AffiliateVoucher {...bookingData} />
                    </div>
                    <div className="absolute left-[-9999px]" ref={invoiceRef}>
                      <InvoiceComponent {...bookingData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Container className="relative z-20 mb-7 h-auto bg-[#F6F7F9]">
              {/* Header */}
              <div className="text-center">
                <div className="mb-1 flex flex-col items-center">
                  <Confirmation className="w-[40px] xl:w-[88px] 2xl:w-[100px]" />
                </div>

                <h1 className="mb-1 font-semibold text-[#28A745] md:text-base xl:text-[24px] 2xl:mt-4 2xl:text-[24px]">
                  Thank you for your payment. Your booking is CONFIRMED
                </h1>
                <p className="text-sm text-[#28A745] md:text-sm xl:text-base 2xl:text-base">
                  You will receive driver details at least 1 hour prior to
                  pick-up time
                </p>
              </div>

              <div className="mt-[26px] h-max items-center justify-center rounded-2xl bg-white px-[15px] py-4 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] xl:mt-[36px] xl:px-[20px] xl:py-[22px] 2xl:mt-[40px] 2xl:px-[22px] 2xl:py-[24px]">
                {/* Booking Confirmation */}
                <div className="">
                  <h2 className="mb-4 text-center font-semibold md:text-base xl:text-[20px] 2xl:text-[24px]">
                    Booking Confirmation
                  </h2>
                  <div className="mb-6 mt-[44px] flex items-center justify-between text-sm xl:mt-[46px]">
                    <div className="flex rounded-lg border border-[#EDEDED] p-[6px] xl:p-2 2xl:p-2">
                      <p className="text-sm font-medium text-[var(--brand-theme-color)]">
                        Booking ID-
                      </p>
                      <p className="text-sm font-semibold text-[#1E1E1E]">
                        {bookingData.bookingId}
                      </p>
                    </div>
                    <div className="flex rounded-lg border border-[#EDEDED] p-[6px] xl:p-2">
                      <p className="text-sm text-[#6D6D6D]">Booking status-</p>
                      <p className="text-sm font-semibold text-[#28A745]">
                        {bookingData.bookingStatus}
                      </p>
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="mt-[30px] flex text-sm text-[#282828] xl:mt-[22px] 2xl:mt-[24px]">
                    <div className="flex-1">
                      <div className="mb-4 gap-[6px]">
                        <p className="text-xs text-[#6D6D6D] 2xl:text-sm">
                          From
                        </p>
                        <p className="text-sm leading-[18px] 2xl:text-base">
                          {bookingData.from}
                        </p>
                      </div>
                      <div className="gap-[6px]">
                        <p className="text-xs text-[#6D6D6D] 2xl:text-sm">To</p>
                        <p className="text-sm leading-[18px] 2xl:text-base">
                          {bookingData.to}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex-col text-right">
                      <div className="gap-[6px]">
                        <p className="text-xs text-[#6D6D6D] 2xl:text-sm">
                          Date
                        </p>
                        <p className="text-sm 2xl:text-base">
                          {bookingData.timeAndDate.split(",")[0]}
                        </p>
                      </div>
                      <div className="mt-[33px] gap-[6px]">
                        <p className="text-xs text-[#6D6D6D] 2xl:text-sm">
                          Time
                        </p>
                        <p className="text-sm 2xl:text-base">
                          {bookingData.timeAndDate.split(",")[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-[30px] flex items-center space-x-[14px] rounded-2xl text-sm font-semibold xl:mt-[22px] xl:space-x-[18px] 2xl:mt-[24px] 2xl:space-x-5 2xl:text-base">
                    <p className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.tol_distance}
                    </p>
                    <p className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.distance}
                    </p>
                    <p className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.pax}
                    </p>
                    <p className="text-gray-700">
                      <span className="text-[var(--brand-theme-color)]">
                        &#8226;
                      </span>{" "}
                      {bookingData.bookingType}
                    </p>
                  </div>
                </div>

                <hr className="mt-[12px] border-t border-[#C3D4E9] px-[10px] xl:mt-[18px] 2xl:mt-[20px]" />

                {/* Passenger Details */}
                <div className="mt-4 2xl:mt-[25px]">
                  <h3 className="mb-[20px] text-sm font-semibold text-[var(--brand-theme-color)] xl:text-base 2xl:text-[20px]">
                    Passenger Details
                  </h3>
                  <div className="mt-5 grid grid-cols-[160px,1fr] gap-y-4 text-sm xl:mt-[18px] xl:grid-cols-[160px,1fr] 2xl:mt-[20px] 2xl:grid-cols-[170px,1fr] 2xl:text-base">
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Name
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.name}
                    </p>
                    <span className="text-sm text-[#6A6A6A]">Email</span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.email}
                    </p>
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Contact
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.mob_number}
                    </p>
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Flight
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.flt_no}
                    </p>
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Special Request
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.sp_req}
                    </p>
                  </div>
                </div>

                <hr className="mt-4 border-t border-[#C3D4E9] px-[10px] 2xl:mt-[20px]" />
                {/* Vehicle Details */}
                <div className="mt-4 xl:mt-[25px]">
                  <h3 className="text-sm font-semibold text-[var(--brand-theme-color)] xl:text-base 2xl:text-[20px]">
                    Vehicle Details
                  </h3>
                  <div className="mt-5 grid grid-cols-[160px,1fr] gap-y-4 text-sm xl:grid-cols-[160px,1fr] 2xl:mt-[20px] 2xl:grid-cols-[170px,1fr] 2xl:text-base">
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Type:
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.bookingType}
                    </p>
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Passenger Capacity:
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.pax}
                    </p>
                    <span className="text-sm text-[#6A6A6A] 2xl:text-base">
                      Luggage Capacity:
                    </span>
                    <p className="text-sm font-medium 2xl:text-base">
                      {bookingData.luggage}
                    </p>
                  </div>
                </div>
                <hr className="mt-4 border-t border-[#C3D4E9] px-[10px] 2xl:mt-[20px]" />
                {/* Price and Actions */}
                <div className="mt-3 text-center xl:mt-4 2xl:mt-[20px]">
                  <div className="flex justify-between 2xl:mt-[20px]">
                    <span className="text-left">
                      <h3 className="text-sm font-bold text-[var(--brand-theme-color)] xl:text-[20px]">
                        Total Price
                      </h3>
                      <p className="mt-[6px] text-[10px] font-medium text-[#282828] xl:text-xs mobM:w-max">
                        Includes VAT, Gratuities, Meet & Greet services
                      </p>
                    </span>
                    <span className="text-right">
                      <h1 className="text-[24px] font-bold xl:text-[32px]">
                        {bookingData.totalAmount}
                      </h1>
                    </span>
                  </div>
                  <div className="mt-6 flex justify-end gap-4 text-xs font-medium lg:text-sm xl:mt-[22px] xl:text-base 2xl:mt-[24px]">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={downloadVoucher}
                        className="flex items-center gap-2 rounded-lg bg-[#282828] px-6 py-2 text-white md:rounded-[11px] xl:rounded-[10px] 2xl:px-[24px] 2xl:py-[10px]"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        Voucher
                      </button>
                      <button
                        onClick={downloadInvoice}
                        className="flex items-center gap-2 rounded-lg bg-[var(--brand-theme-color)] px-6 py-2 text-white md:rounded-[11px] xl:rounded-[10px] 2xl:px-[24px] 2xl:py-[10px]"
                      >
                        <InvoiceSvg className="h-4 w-4" />
                        Invoice
                      </button>
                    </div>

                    {/* ✅ Hidden Sections for PDF Generation */}
                    <div className="absolute left-[-9999px]" ref={voucherRef}>
                      <AffiliateVoucher {...bookingData} />
                    </div>
                    <div className="absolute left-[-9999px]" ref={invoiceRef}>
                      <InvoiceComponent {...bookingData} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          )}
        </div>
      </div>
    </Container>
  );
}
