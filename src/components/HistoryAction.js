export default function HistoryAction({ action }) {
  return (
    <div className="ml-5 border-l-2">
      <div className="border rounded m-5 p-3 min-w-[600px]">
        <div className="border-b">
          <h2 className="text-sm pb-1">
            Action performed on{" "}
            <span className="font-semibold">
              {new Date(action.date).toLocaleString()}
            </span>{" "}
            by <span className="font-semibold text-base">{action.user}</span>
          </h2>
        </div>
        <div className="px-2">
          <h3 className="font-semibold text-lg">{action.title}</h3>
          <p className="text-sm">
            <span className="pl-1"> ⇒ </span>
            {action.description}
          </p>
          {action.files_in && (
            <div className="flex flex-row">
              <div className="text-sm px-6 py-2 mr-2 border">
                {action.files_in.map((file) => {
                  return <p>📄 {file}</p>;
                })}
              </div>
              <div className="my-auto">⇒</div>
              <div className="text-sm px-6 py-2 ml-2 border my-auto">
                {action.files_out.map((file) => {
                  return <p>📄 {file}</p>;
                })}
              </div>
            </div>
          )}
          <p className="text-sm"></p>
          <p className="pt-1 text-sm font-semibold">
            <button>
              View dataset at this point<span> ↩ </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
