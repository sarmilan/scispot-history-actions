import HistoryAction from "./HistoryAction";

export default function DataHistory({ data }) {
  return (
    <div className="flex flex-col items-center">
      {data
        .slice()
        .reverse()
        .map((action) => (
          <HistoryAction action={action} key={action.id} />
        ))}
    </div>
  );
}
