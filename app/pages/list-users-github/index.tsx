"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { getUserGithub } from "@/app/hooks/user";
import ButtonText from "@/app/components/buttons/button-text";
import ButtonDropdown from "@/app/components/buttons/button-drop-down";
import { MdClear } from "react-icons/md";
import ListCard from "@/app/components/list-card";

interface StateTypes {
  keyword: string;
  perPage: number;
}

const ListUsersGithub = () => {
  const { getUserGithubService, getUserGithubState, getUserGithubReset } =
    getUserGithub();
  const [state, setState] = useState({
    keyword: "",
    perPage: 5,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      q: state?.keyword,
      per_page: state?.perPage,
    };
    getUserGithubService(payload as any);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setState((prevState) => ({ ...prevState, keyword: "" }));
    getUserGithubReset("all");
  };
  console.log("getUserGithub?.data?.length ", getUserGithubState);
  return (
    <div className="container mx-auto  w-full lg:w-1/2 my-2 flex flex-col gap-y-3">
      <form
        onSubmit={onSubmit}
        className="p-5 flex flex-col items-center justify-center gap-y-3 bg-gray-800/80 w-full rounded-t-lg border-2 border-slate-500/30 sticky top-3 shadow-2xl"
      >
        <div className="flex flex-row justify-between items-center border-gray-200/80 border-2 outline-none rounded-xl w-sm px-2">
          <input
            type="text"
            name="keyword"
            placeholder="Enter username"
            value={state.keyword}
            onChange={onChange}
            className="px-3 py-2 outline-none w-full text-base font-mono"
          />
          <ButtonDropdown
            onChange={() => handleReset()}
            icon={MdClear}
            type="reset"
          />
        </div>

        <ButtonText
          title="Search"
          type="submit"
          disable={!state?.keyword}
          loading={getUserGithubState?.loading === "pending"}
        />
      </form>
      <div className="p-5 flex justify-center bg-gray-800/80  w-full rounded-b-lg border-2 border-slate-500/30">
        <div className="flex flex-col items-center w-full gap-y-3">
          {getUserGithubState?.loading === "pending"
            ? "loading..."
            : getUserGithubState?.data?.map?.((user: any, index: number) => (
                <ListCard user={user} key={index} />
              ))}
          {getUserGithubState?.data?.length === 0 &&
            getUserGithubState?.loading !== "pending" && (
              <h2 className="text-base font-mono">
                The data will appear after you perform a search.
              </h2>
            )}
        </div>
      </div>
    </div>
  );
};

export default ListUsersGithub;
