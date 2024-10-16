import React from "react";

const Bookings = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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

export default Bookings;
