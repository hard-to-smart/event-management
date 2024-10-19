import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../../redux/slices/authSlice";
import { selectUserBookings } from "../../redux/slices/bookingSlice";
const Profile = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectLoginUser);
  const userBooking = useSelector(selectUserBookings);
  const bookingCounts = userBooking.reduce(
    (acc, booking) => {
      if (booking.status === "registered") {
        acc.registered += 1;
      } else if (booking.status === "pending") {
        acc.pending += 1;
      } else if (booking.status === "rejected") {
        acc.rejected += 1;
      }
      return acc;
    },
    { registered: 0, pending: 0, rejected: 0 }
  );
  return (
    <>
      <main className="relative profile-page w-full min-h-[70vh]">
        <section className=" block h-500-px">
          <div
            className="absolute w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          ></div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg "
              style={{
                background:
                  "radial-gradient(circle at 10% 20%, rgb(255, 246, 236) 39.5%, rgba(100, 46, 122, 0.23) 100.2%)",
              }}
            >
              <div className="px-6">
                <div className="text-center my-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-700 mb-2 uppercase">
                    {user.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-600 font-bold ">
                    Email : {user.email}
                  </div>
                  <div className="mb-2 text-gray-600 mt-2">
                    Phone : {user.phone}
                  </div>
                </div>

                {user.role === "user" && (
                  <div className="mt-10 py-10 flex flex-row justify-center border-t border-gray-200 text-center">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-green-800 ">
                      {bookingCounts.registered}
                      </span>
                      <span className="text-sm text-green-800 font-semibold">
                        Registered Successfully
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block text-yellow-800  uppercase tracking-wide ">
                      {bookingCounts.pending}
                      </span>
                      <span className="text-sm text-yellow-800 font-semibold">
                        Pending Confirmation
                      </span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold text-red-800  block uppercase tracking-wide ">
                      {bookingCounts.rejected}
                      </span>
                      <span className="text-sm text-red-800 font-semibold">
                        Registration Rejected
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
