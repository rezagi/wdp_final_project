import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HeaderPict} from "../assets"
// import { Route, Routes } from "react-router-dom";



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8"
                  src={HeaderPict}
                  alt="Promoter"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/#news"
                    class=" hover:text-green-500 text-gray-500 px-3 py-2 rounded-md text-sm font-bold"
                  >
                    NEWS
                  </a>

                  <a
                    href="/#layout"
                    class="hover:text-green-500 text-gray-500 px-3 py-2 rounded-md text-sm font-bold"
                  >
                    TICKET
                  </a>

                  <a
                    href="/#promoter"
                    class="hover:text-green-500 text-gray-500 px-3 py-2 rounded-md text-sm font-bold"
                  >
                    PROMOTERS
                  </a>

                  <a
                    href="/#contact"
                    class="hover:text-green-500 text-gray-500 px-3 py-2 rounded-md text-sm font-bold"
                  >
                    CONTACT US
                  </a>

                  <a
                    href="/login"
                    class="hover:text-white hover:bg-green-500 bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    LOGIN
                  </a>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div class="md:hidden" id="mobile-menu">
              <div ref={ref} class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/#news"
                  class="hover:text-white hover:bg-green-500 text-gray-500 block px-3 py-2 rounded-md text-base font-bold"
                >
                  NEWS
               </a>

                <a
                  href="/#layout"
                  class="hover:text-white hover:bg-green-500 text-gray-500 block px-3 py-2 block rounded-md text-base font-bold"
                >
                  TICKET
                </a>

                <a
                  href="/#promoter"
                  class="hover:text-white hover:bg-green-500 text-gray-500 block px-3 py-2 block rounded-md text-base font-bold"
                >
                  PROMOTERS
                </a>

                <a
                  href="/#contact"
                  class="hover:text-white hover:bg-green-500 text-gray-500 block px-3 py-2 block rounded-md text-base font-bold"
                >
                  CONTACT US
                </a>

                <a
                  href="/login"
                  class="hover:text-white hover:bg-green-500 text-white bg-gray-500 block px-3 py-2 block rounded-md text-base font-bold"
                >
                  LOGIN
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>


    </div>
  );
}

export default NavBar;

