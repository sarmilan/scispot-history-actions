import { useState } from "react";
import DataHistory from "./components/DataHistory";
import SlideOver from "./components/SlideOver";
import { history } from "./data/data";

export default function App() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div>
      <div className="p-4 font-semibold">
        <button onClick={handleToggle}>↺ History</button>
      </div>
      <SlideOver title="dna_seq_v1 History" open={open} onToggle={handleToggle}>
        <DataHistory data={history} />
      </SlideOver>
    </div>
  );
}
