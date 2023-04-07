import { ErrorMessage, Field, FormikProps } from "formik";
import { CreditCardFormValues } from "../../card-view/types";
import CreditCardNumberMaskedInput from "../../inputs/credit-card-number";
import { translate } from "../../../../configuration/i18n.configuration";
import TextInput from "../../inputs/text-input";

export interface CreditCardFormOptions {
  props: FormikProps<CreditCardFormValues>;
}

function CreditCardForm({ props }: CreditCardFormOptions): JSX.Element {
  return (
    <div className="mb-5">
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <div className="mb-4">
          <TextInput
            inputName="name"
            placeholder="e.g. Jane Appleseed"
            title={translate("heading.cardholder_name")}
            props={props}
          />
        </div>

        <CreditCardNumberMaskedInput
          name="number"
          props={props}
          label={translate("heading.card_number")}
        />

        <div className="flex">
          <div className="w-2/4 mr-2">
            <label
              className="block text-gray-700 font-medium uppercase mb-1 text-xs tracking-widest"
              htmlFor="expiration_month"
            >
              {translate("heading.expiration_date")}
            </label>
            <div className="flex justify-between">
              <div className="mr-1">
                <TextInput
                  inputName="expiration_month"
                  placeholder="MM"
                  props={props}
                />
              </div>

              <div className="ml-1">
                <TextInput
                  inputName="expiration_year"
                  placeholder="YY"
                  props={props}
                />
              </div>
            </div>
          </div>

          <div className="w-2/4 ml-2">
            <TextInput
              title={translate("heading.cvc")}
              inputName="verification_code"
              placeholder="e.g. 123"
              props={props}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
