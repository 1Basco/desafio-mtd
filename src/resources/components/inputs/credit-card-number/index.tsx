import { ErrorMessage, Field, FormikProps } from "formik";
import MaskedInput from "react-text-mask";

interface CreditCardNumberMaskedInputOptions {
  name: string;
  props: FormikProps<any>;
  label?: string;
}

const CreditCardNumberMaskedInput = ({
  props,
  name,
  label,
}: CreditCardNumberMaskedInputOptions) => {
  const cardNumberMask = [
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    " ",
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    " ",
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    " ",
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
    /[A-Za-z0-9]/,
  ];

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-grayish-violet-900 first-line:text-xs tracking-widest font-medium mb-1 uppercase"
      >
        {label || "WIP"}
      </label>
      <MaskedInput
        id={name}
        name={name}
        className={`appearance-none border rounded w-full py-2 px-3 border-grayish-violet-200 placeholder-grayish-violet-200 text-grayish-violet-900 leading-tight focus:outline-none hover:cursor-pointer focus:border-gradient-purple ${
          props.errors[name] ? "border-red-error" : ""
        }`}
        mask={cardNumberMask}
        guide={false}
        placeholder="e.g. 1234 5678 9123 000"
        value={props.values[name]}
        onBlur={props.handleBlur}
        onChange={props.handleChange}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mt-1 text-xs"
      />
    </div>
  );
};

export default CreditCardNumberMaskedInput;
