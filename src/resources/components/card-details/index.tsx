import { useFormikContext } from "formik";

import cardLogo from "../../../resources/assets/icons/card-logo.svg";

function CardDetails(): JSX.Element {
  const { values }: any = useFormikContext();
  return (
    <div className="lg:max-w-md flex flex-col-reverse lg:flex-col">
      <div className="bg-card-front bg-cover z-10 lg:z-0 p-4 lg:p-8 max-w-[290px] max-h-[163px] lg:max-w-[447px] lg:max-h-[245px] lg:mb-5 shadow-slate-700 shadow-md rounded-md lg:rounded-xl">
        <img
          className="lg:min-w-min w-1/4"
          src={cardLogo}
          alt="Logo on the rigth corner of the credit card"
        />
        <p className="lg:mt-14 mt-7 text-lg lg:text-2xl tracking-[0.15em] lg:tracking-widest-2x lg:min-h-[32px] text-justify w-full text-white">
          {values.number ? values.number : "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between mt-6">
          <p className="uppercase text-white text-xs lg:text-base tracking-widest">
            {values.name ? values.name : "Jane Appleseed"}
          </p>
          <p className="text-white text-xs lg:text-base tracking-widest">
            {values.expiration_month ? values.expiration_month : "00"}/
            {values.expiration_year ? values.expiration_year : "00"}
          </p>
        </div>
      </div>
      <div className="bg-card-back bg-cover min-w-[290px] min-h-[163px] lg:w-[447px] lg:h-[245px] mb-[-70px] ml-14 lg:mg-0 lg:ml-20 lg:mt-5 shadow-slate-700 shadow-md rounded-md lg:rounded-xl">
        <p className="relative top-[72px] left-[235px] lg:top-[107px] lg:left-[365px] w-fit text-xs lg:text-base text-white">
          {values.verification_code ? values.verification_code : "000"}
        </p>
      </div>
    </div>
  );
}

export default CardDetails;
