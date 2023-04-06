import { useFormikContext } from "formik";

function CardDetails(): JSX.Element {
  const { values } = useFormikContext();
  return (
    <div className="max-w-md">
      <div className="bg-card-front bg-cover w-[447px] h-[245px] mb-8 shadow-slate-700 shadow-md rounded-xl"></div>
      <div className="bg-card-back bg-cover w-[447px] h-[245px] ml-16 mt-8 shadow-slate-700 shadow-md rounded-xl"></div>
    </div>
  );
}

export default CardDetails;
