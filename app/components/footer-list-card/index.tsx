import { FaCodeFork } from "react-icons/fa6";
import ButtonDropdown from "../buttons/button-drop-down";
import { IoIosStar } from "react-icons/io";

interface FooterListCardTypes {
  repo: any;
}

const FooterListCard = (props: FooterListCardTypes) => {
  const { repo } = props;

  const tolocalTime = (date: string) => {
    if (!date) return "Unknown";
    let updateDate = new Date(date);
    return updateDate.toDateString();
  };

  const languageColor = () => {
    console.log("repo?.language", repo?.language);
    switch (repo?.language) {
      case "javascript":
        return "bg-yellow-400";
      case "typescript":
      case "Go":
        return "bg-blue-400";
      case "HTML":
        return "bg-orange-600";
      default:
        return "bg-yellow-400";
    }
  };

  return (
    <div className="flex flex-row items-center justify-start gap-x-5">
      {repo?.language ? (
        <div className="flex flex-row justify-start items-center gap-x-2 mt-3">
          <div className={`${languageColor()} h-5 w-5 rounded-full`} />
          <span className="text-sm font-mono">{repo?.language}</span>
        </div>
      ) : null}

      {repo?.stargazers_count > 0 && (
        <div className="flex flex-row justify-start items-center gap-x-2 mt-3">
          <ButtonDropdown icon={IoIosStar} />
          <span className="text-sm font-mono">{repo?.stargazers_count}</span>
        </div>
      )}

      {repo?.forks_count > 0 && (
        <div className="flex flex-row justify-start items-center gap-x-2 mt-3">
          <ButtonDropdown icon={FaCodeFork} size={15} />
          <span className="text-sm font-mono">{repo?.forks_count}</span>
        </div>
      )}

      <div className="flex flex-row justify-start items-center gap-x-2 mt-3">
        <span className="text-sm font-mono">
          Update on {tolocalTime(repo?.updated_at)}
        </span>
      </div>
    </div>
  );
};

export default FooterListCard;
