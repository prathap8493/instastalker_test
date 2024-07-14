// "use client";
import Header from "./components/Header/header";
import Features from "./components/Features/Features";
import Features2 from "./components/Features/Features2";
import Testimonials from "./components/Testinomials/Testinomials";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  // const handleSearch = () => {
  //   console.log("hello Prathao");
  //   toast.error("Please enter something");
  // };
  return (
    <>
      <Header />
      <h1 className="text-[36px] text-center font-[600] mt-10 mb-2">
        Instagram Story Viewer - InstaStalker
      </h1>
      <p className="text-[18px] text-center font-[400] mb-5">
        Foolproof Way To View Instagram Stories Without Them Knowing
      </p>

      <div className="max-w-4xl mx-auto mb-12 mt-12 px-20 py-10 rounded-lg shadow-md bg-sky-100">
        <div className="flex w-full items-center mx-auto">
          <div className="w-[80%] flex justify-self-end">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Username or Link"
              className="block w-[100%] mx-auto rounded-md border border-pink-200 py-3 px-2 text-gray-900 shadow-sm ring:outline-none focus:outline-pink-300  placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="w-[20%] flex ml-2 justify-self-start">
            <button
              className="border w-full border-pink-500 hover:bg-pink-600 px-10 py-2.5 rounded-md bg-pink-500 text-white font-[500] text-[18px]"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Features />
      <Features2 />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
