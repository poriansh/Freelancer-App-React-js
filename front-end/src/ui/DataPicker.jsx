import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({label, date, setdate, required}) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">
        {label}
        {required && <span className="text-error">*</span>}
      </span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textinput"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setdate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
export default DatePickerField;
