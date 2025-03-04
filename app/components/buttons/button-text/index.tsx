import { ButtonTypes } from "@/app/store/types";

const ButtonText = (props: ButtonTypes) => {
  const { title, type, onChange, disable, loading } = props;
  return (
    <button
      onClick={onChange}
      disabled={disable}
      type={type}
      className={`${
        disable
          ? "bg-slate-100"
          : "bg-slate-300/40 hover:bg-slate-200/40 cursor-pointer"
      } w-sm px-3 py-2 rounded-lg text-slate-300 text-base font-mono flex flex-row justify-center items-center`}
    >
      {!loading ? (
        title
      ) : (
        <div className="flex gap-x-2">
          <div className="w-5 h-5 border-2 border-x-neutral-700 rounded-full animate-spin" />
          <p className="text-base font-mono">Loading...</p>
        </div>
      )}
    </button>
  );
};

export default ButtonText;
