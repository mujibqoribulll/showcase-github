import { useState } from "react";
import ButtonDropdown from "../buttons/button-drop-down";
import { BsChevronDoubleDown, BsChevronDoubleRight } from "react-icons/bs";
import { getUserRepository } from "@/app/hooks/user";
import Image from "next/image";
import FooterListCard from "../footer-list-card";

const ListCard = (props: any) => {
  const { user } = props;
  const [listDropdown, setListDropdown] = useState<string[]>([]);

  const { getUserGithubRepoService, getUserGithubRepoState } =
    getUserRepository();

  const handleDropdown = () => {
    const newListDropdown: string[] = [...listDropdown];
    const findindex = newListDropdown.findIndex((item) => item === user?.login);
    if (findindex === -1) {
      setListDropdown([...newListDropdown, user?.login]);
      getUserGithubRepoService(user?.repos_url);
    } else {
      const updatedList = [...newListDropdown];
      updatedList.splice(findindex, 1);
      setListDropdown(updatedList);
    }
  };

  return (
    <div className="w-1/1 bg-slate-300/40 rounded-lg">
      <div className="flex flex-row justify-between items-center p-3 ">
        <div className="flex flex-row justify-start items-center gap-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-gray-200 overflow-hidden hover:scale-110 transition-transform">
            <Image
              src={user?.avatar_url}
              alt="Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h2 className="text-base font-bold font-mono">{user?.login}</h2>
        </div>
        <ButtonDropdown
          onChange={() => handleDropdown()}
          icon={
            listDropdown.includes(user?.login)
              ? BsChevronDoubleDown
              : BsChevronDoubleRight
          }
        />
      </div>
      {getUserGithubRepoState?.loading === "pending" ? (
        <>
          <div className=" mx-3 mb-3 p-4 bg-gray-800 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-700 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
          </div>
          <div className=" mx-3 mb-3 p-4 bg-gray-800 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-700 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
          </div>
        </>
      ) : (
        listDropdown.includes(user?.login) && (
          <div className="bg-slate-200 ml-5 text-gray-900 p-2 mx-5 mb-5 mt-2 rounded-lg">
            {getUserGithubRepoState?.data?.map((repo: any, index: number) => (
              <div key={index} className="border-b-2 py-3">
                <div className="flex flex-row items-center gap-x-3">
                  <h2 className="text-lg font-semibold font-mono">
                    {repo?.name}
                  </h2>
                  <div className="bg-slate-500/90 px-2 rounded-lg">
                    <p className="text-sm font-mono capitalize">
                      {repo?.owner?.user_view_type}
                    </p>
                  </div>
                </div>
                {repo?.description ? (
                  <p className="text-sm font-mono italic mt-3 ">
                    {repo?.description}
                  </p>
                ) : null}

                <FooterListCard repo={repo} />
              </div>
            ))}
            {getUserGithubRepoState?.data?.length <= 0 ? (
              <h2 className="text-sm font-semibold font-mono text-center">
                Repository not found.
              </h2>
            ) : null}
          </div>
        )
      )}
    </div>
  );
};

export default ListCard;
