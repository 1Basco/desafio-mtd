import { ErrorMessage, Field, FormikProps } from "formik";
import { translate } from "../../../../configuration/i18n.configuration";

interface TextInputOptions {
  props: FormikProps<any>;
  inputName: string;
  title?: string;
  placeholder: string;
}

function TextInput({
  props,
  inputName,
  title,
  placeholder,
}: TextInputOptions): JSX.Element {
  return (
    <>
      {title && (
        <label
          className="block text-grayish-violet-900 font-medium uppercase mb-1 text-xs tracking-widest"
          htmlFor={inputName}
        >
          {title ?? "WIP"}
        </label>
      )}

      <Field
        className={` appearance-none border rounded-lg w-full py-2 px-3 border-grayish-violet-200 placeholder-grayish-violet-200 text-grayish-violet-900 leading-tight focus:outline-none hover:cursor-pointer ${
          props.errors[inputName] ? "border-red-error" : ""
        }`}
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
      />
      <div className="text-red-error text-xs mt-1">
        <ErrorMessage name={inputName} />
      </div>
    </>
  );
}

export default TextInput;
