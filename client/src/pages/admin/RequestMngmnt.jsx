import React from "react";

const RequestMngmnt = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* {/* <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
           
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Action
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

          <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div> 
        </div> 
      </div> */}
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-[#874E4C]">
          <tr>
            <th scope="col" class="px-6 py-3">
              Attendee
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Event Detail
            </th>
            <th scope="col" class="px-6 py-3" >
              Request Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <td
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold"> Attendee ID</div>
                <div class="font-normal text-gray-500">Neil Sims</div>
              </div>
            </td>
            <td class="px-6 py-4">category</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                event
              </div>
            </td>
            <td class="px-6 py-4 gap-6 " colSpan={2} >
              <a
                href="#"
                class="font-medium mr-4 text-green-600  hover:underline"
              >
                Accept
              </a>
            
              <a
                href="#"
                class="font-medium text-red-600  hover:underline"
              >
                Reject
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestMngmnt;
