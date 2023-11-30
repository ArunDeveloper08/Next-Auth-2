"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const page = () => {
  const session = useSession();
  console.log("session", session);
  return (
    <div>
      <div className="flex justify-around mt-10">
        <div className="w-[200px] h-[200px] rounded-full bg-gray-800 relative flex items-center justify-center ">
          <div onClick={() => signIn("google")} className="cursor-pointer">
            <Image
              src="https://th.bing.com/th/id/OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa?rs=1&pid=ImgDetMain"
              alt="image"
              height={50}
              width={50}
              className="bg-white rounded-full "
            />
            <p className="text-white">Login with google</p>
          </div>
        </div>

        <div className="w-[200px] h-[200px] rounded-full bg-gray-800 relative flex items-center justify-center ">
          <div onClick={() => signIn("github")} className="cursor-pointer  ">
            <Image
              src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png"
              alt="image"
              height={60}
              width={80}
              className="bg-white rounded-full "
            />
            <p className="text-white">Login with Github</p>
          </div>
        </div>
      </div>
      <p className="text-xl flex justify-center font-semibold italic ">
        Status : {session?.status}
      </p>
      {session?.data && (
        <div className="flex justify-center">
          <Image
            src={session?.data?.user?.image}
            alt="dp"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-5">
            <p>Name:{session?.data?.user?.name}</p>
            <p>Email:{session?.data?.user?.email}</p>
          </div>
        </div>
      )}
      {session?.data && (
        <div className="flex justify-center">
          <button
            className="bg-red-600 px-2 py-2 border-black border-[1px] hover:bg-red-800 text-white rounded-md"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
