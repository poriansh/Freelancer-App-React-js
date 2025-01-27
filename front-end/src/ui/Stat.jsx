import { persianNumber } from "../utils/persianNumber";

const colors = {
  pramery: "bg-pramery-100 text-pramery-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};
function Stat({ value, title, color}) {
  return (
    <div className="flex  flex-col items-center xs:flex-row bg-secondary-0 p-4 rounded-lg gap-4">
      <div
        className={`flex shrink-0 w-36 h-36 items-center justify-center
       p-2 rounded-full
       ${colors[color]}
  `}
      ></div>
      <div className="text-center space-y-3">
        <h5 className="font-bold text-secondary-500 text-base  self-center">{title}</h5>
        <p className="text-3xl font-bold text-secondary-900">{persianNumber(value)}</p>
      </div>
    </div>
  );
}

export default Stat;
