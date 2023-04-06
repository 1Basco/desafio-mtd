import { useFormikContext } from "formik";

import cardLogo from "../../../resources/assets/icons/card-logo.svg";

function CardDetails(): JSX.Element {
  const { values }: any = useFormikContext();
  return (
    <div className="max-w-md ml-4">
      <div className="p-8 bg-card-front bg-cover w-[447px] h-[245px] mb-8 shadow-slate-700 shadow-md rounded-xl">
        <img src={cardLogo} alt="Logo on the rigth corner of the credit card" />
        <p className="mt-14 text-2xl tracking-widest-2x min-h-[32px] text-justify w-full text-white">
          {values.number ? values.number : "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between mt-6">
          <p className="uppercase text-white text-base tracking-widest">
            {values.name ? values.name : "Jane Appleseed"}
          </p>
          <p className="text-white text-base tracking-widest">
            {values.expiration_month ? values.expiration_month : "00"}/
            {values.expiration_year ? values.expiration_year : "00"}
          </p>
        </div>
      </div>
      <div className="bg-card-back bg-cover w-[447px] h-[245px] ml-20 mt-8 shadow-slate-700 shadow-md rounded-xl">
        <p className="relative top-[107px] left-[365px] w-fit text-base text-white">
          {values.verification_code ? values.verification_code : "000"}
        </p>
      </div>
    </div>
  );
}

export default CardDetails;
