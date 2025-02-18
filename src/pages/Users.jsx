
import PaginationUI from "@/components/Common/PaginationUI";
import SearchBox from "@/components/Common/SearchBox";
import UsersTable from "@/components/UsersTable";
import { fetchUsers } from "@/redux/userSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const { userList, loading, error } = useSelector((state) => state.user);

  // Calculate the endIndex dynamically based on startIndex and rowsPerPage
  const endIndex = startIndex + rowsPerPage;
  const filteredUsers = userList.filter(
    (user) =>
      (searchQuery &&
        user.username?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      user.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const usersToRender = searchQuery ? filteredUsers : userList;

  // Handling pagination change, ensuring the endIndex does not exceed the length of recipeList
  const handlePagination = (newStartIndex) => {
    setStartIndex(newStartIndex);
  };

  // Function to fetch the users
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    <p>{error?.message}</p>;
  }

  return (
    <div className="mt-10">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search by username, email or role"
      />
      {loading ? (
        <div className="">
          <DotLottieReact
            src="https://lottie.host/160b9638-f5d0-427a-8a69-0b3d2d12c453/a4yIsDAc2C.lottie"
            loop
            autoplay
          />
        </div>
      ) : (
        <>
          <UsersTable
            startIndex={startIndex}
            endIndex={endIndex}
            usersToRender={usersToRender}
          />
          <PaginationUI
            data={usersToRender}
            rowsPerPage={rowsPerPage}
            startIndex={startIndex}
            setStartIndex={handlePagination}
            endIndex={endIndex}
          />
        </>
      )}
    </div>
  );
};

export default Users;
