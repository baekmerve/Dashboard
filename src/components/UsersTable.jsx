import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "react-router-dom";

const UsersTable = ({ startIndex, endIndex, usersToRender }) => {
  return (
    <div className=" mt-10">
      <p className=" text-2xl font-bold mb-6 text-center">User List</p>

      <Table>
        <TableHeader className=" bg-[#630303]  dark:bg-[#402732]">
          <TableRow className="font-semibold ">
            <TableHead className="py-5 text-center text-white font-semibold">
              User Id
            </TableHead>

            <TableHead className="text-center text-white  font-semibold">
              Username
            </TableHead>
            <TableHead className="text-center text-white  font-semibold">
              Phone
            </TableHead>
            <TableHead className="text-center text-white  font-semibold">
              Email
            </TableHead>
            <TableHead className=" text-white  font-semibold text-center">
              Access Level
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-beige/90">
          {usersToRender?.length > 0 ? (
            usersToRender?.slice(startIndex, endIndex).map((user) => (
              <TableRow
                key={user.id}
                className=" hover:bg-beige transition duration-200 ease-in-out text-center text-[15px]  text-darkbrown"
              >
                <TableCell className="px-4 py-3 text-center">
                  {user.id}
                </TableCell>

                <TableCell className="hover:scale-105 transform px-4 py-3  transition-all duration-200 ease-in-out ">
                  <Link
                    to={`/users/${user.id}`}
                    className="font-semibold text-[#630303] border-double border-b-2 border-[#630303]  hover:border-none "
                  >
                    {user.username}
                  </Link>
                </TableCell>
                <TableCell className="px-4 py-3">{user.phone}</TableCell>
                <TableCell className="px-4 py-3 ">{user.email}</TableCell>
                <TableCell className="px-4 py-3 text-brown">
                  {user.role}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6" className="px-4 py-3 text-center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
