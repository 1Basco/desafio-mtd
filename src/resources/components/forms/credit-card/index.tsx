import { ErrorMessage, Field, FormikProps } from "formik";
import { CreditCardFormValues } from "../../card-view/types";
import CreditCardNumberMaskedInput from "../../inputs/credit-card-number";
import { translate } from "../../../../configuration/i18n.configuration";

export interface CreditCardFormOptions {
  props: FormikProps<CreditCardFormValues>;
}

function CreditCardForm({ props }: CreditCardFormOptions): JSX.Element {
  return (
    <div className="mb-5">
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium uppercase mb-1 text-sm"
            htmlFor="name"
          >
            {translate("heading.cardholder_name")}
          </label>
          <Field
            className={` appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-950`}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Jane Appleseed"
          />
          <div className="text-red-500 text-xs mt-1 italic">
            <ErrorMessage name="name" />
          </div>
        </div>

        <CreditCardNumberMaskedInput
          name="number"
          props={props}
          label={translate("heading.card_number")}
        />

        <div className="flex">
          <div className="w-2/4 mr-2">
            <label
              className="block text-gray-700 font-medium uppercase mb-1 text-sm"
              htmlFor="expiration_month"
            >
              {translate("heading.expiration_date")}
            </label>
            <div className="flex justify-between">
              <div className="mr-1">
                <Field
                  className={` appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-950`}
                  type="text"
                  id="expiration_month"
                  name="expiration_month"
                  placeholder="MM"
                />
                <div className="text-red-500 text-xs italic mt-1">
                  <ErrorMessage name="expiration_month" />
                </div>
              </div>

              <div className="ml-1">
                <Field
                  className={` appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-950`}
                  type="text"
                  id="expiration_year"
                  name="expiration_year"
                  placeholder="YY"
                />
                <div className="text-red-500 text-xs italic mt-1">
                  <ErrorMessage name="expiration_year" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/4 ml-2">
            <label
              className="block text-gray-700 font-medium uppercase mb-1 text-sm"
              htmlFor="verification_code"
            >
              {translate("heading.cvc")}
            </label>
            <Field
              className={` appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-950`}
              type="text"
              id="verification_code"
              name="verification_code"
              placeholder="e.g. 123"
            />
            <div className="text-red-500 text-xs italic">
              <ErrorMessage name="verification_code" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
