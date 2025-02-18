import { fetchSingleUser } from "@/redux/userSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchSingleUser(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return (
      <DotLottieReact
        src="https://lottie.host/0bfa0f1e-810d-4015-9771-33e994ef4997/sUOMVsj4Hv.lottie"
        loop
        autoplay
      />
    );
  }
  if (error) {
    return (
      <div className="text-red-600">
        <p>
          Oops, something went wrong while fetching user data. Please try again
          later.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 justify-around items-start">
      {/* Left div - User Info */}
      <div className="flex flex-col items-center gap-5 max-w-[500px] bg-indigo-100 rounded-2xl p-5 shadow-lg border border-indigo-300">
        {/* Profile Image */}
        <div className="max-w-[250px] h-full rounded-3xl shadow-lg overflow-hidden mt-5">
          <img
            src={
              user.gender === "female"
                ? "https://buly.kr/GZwyXhi"
                : "https://buly.kr/7x5qTkC"
            }
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold text-brown">{user.username}</p>
        {/* User Details */}
        <div className="flex flex-col gap-4 w-full text-brown ">
          <div className="p-4 ">
            <h1 className="text-center font-bold border-b-2 border-brown/60 pb-2">
              USER DETAILS
            </h1>

            <div className="flex py-2">
              <p className="w-28 font-semibold">Name:</p>
              <p>
                {user.firstName || "N/A"} {user.lastName || "N/A"}
              </p>
            </div>
            <div className="flex py-2">
              <p className="w-28 font-semibold">Birthday:</p>
              <p>{user.birthDate}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-4">
            <h1 className="text-center font-bold text-brown border-b-2 border-brown/60 pb-2">
              CONTACT
            </h1>

            <div className="flex py-2">
              <p className="w-28 font-semibold">Email:</p>
              <p>{user.email}</p>
            </div>
            <div className="flex py-2">
              <p className="w-28 font-semibold">Phone:</p>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right div - Career & Education */}
      <div className="flex flex-col gap-10 w-full max-w-[600px] ">
        {/* Career Info */}
        <div className="flex flex-col gap-5 bg-yellow-50 border border-yellow-200 p-5 rounded-2xl shadow-md bg-red-100 text-brown">
          <h1
            className="font-bold text-center text-brown border-b-2 border-brown/60 pb-2
            "
          >
            CAREER
          </h1>

          <div className="flex py-2">
            <p className="w-40 font-semibold">Company:</p>
            <p>{user.company ? user.company.name : "N/A"}</p>
          </div>
          <div className="flex py-2">
            <p className="w-40 font-semibold">Position:</p>
            <p>{user.company ? user.company.title : "N/A"}</p>
          </div>
          <div className="flex py-2">
            <p className="w-40 font-semibold">Department:</p>
            <p>{user.company ? user.company.department : "N/A"}</p>
          </div>
          <div className="flex py-2">
            <p className="min-w-40 font-semibold">Address:</p>
            <p>
              {user.company && user.company.address
                ? `${user.company.address.address}, ${user.company.address.city}, ${user.company.address.state}, ${user.company.address.country}`
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Education Info */}
        <div className="flex flex-col gap-5 bg-yellow-50  border border-yellow-200  p-5 rounded-2xl shadow-md bg-red-100 text-brown">
          <h1 className="font-bold text-center border-b-2 border-brown/60 pb-2">
            EDUCATION
          </h1>

          <div className="flex py-2">
            <p className="min-w-40 font-semibold">University:</p>
            <p>{user.university}</p>
          </div>
        </div>

        {/* Last Login Info */}
        <div className="flex flex-col gap-5 bg-yellow-50  border border-yellow-200 p-5 rounded-2xl shadow-md bg-red-100 text-brown">
          <h1 className="font-bold text-center border-b-2 border-brown/60 pb-2">
            LAST LOGIN INFO
          </h1>

          <div className="flex py-2">
            <p className="min-w-40 font-semibold">Last Login:</p>
            <p>{user.userAgent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
