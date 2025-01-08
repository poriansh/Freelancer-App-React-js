import {Switch} from "@headlessui/react";

function Togglebtn({onChange, enabled, lable}) {
  return (
    <div className="flex items-center gap-1">
      <span className="block w-8">{lable}</span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-pramery-900"
      >
        <span className="size-4 -translate-x-6 rounded-full bg-white transition group-data-[checked]:-translate-x-1" />
      </Switch>
    </div>
  );
}

export default Togglebtn;
