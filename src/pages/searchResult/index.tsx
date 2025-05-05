import NavOptions from "@/components/nav-option";
// import { ArrowLeftCircle } from "lucide-react";
// import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div>
      <div className="3xl:px-[15.625rem] 4xl:px-[400px] w-full px-5 py-6 sm:px-5 md:px-10 lg:px-16 xl:px-32 2xl:px-48">
        <div className="">
          {/* <div>
            <Link to="/">
              <ArrowLeftCircle className="mt-3 w-8 text-gray-600" />
            </Link>
          </div> */}
          <div>
            <NavOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
