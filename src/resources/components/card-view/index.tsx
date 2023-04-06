import { Formik, FormikProps } from "formik";
import { CardYupFormSchema } from "../forms/credit-card/schema.yup";
import { CreditCardFormValues } from "./types";
import CreditCardForm from "../forms/credit-card";
import CardDetails from "../card-details";
import PrimaryButton from "../buttons/primary";
import { useState } from "react";
import CreditCardThankYou from "../thank-you";

function CreditCardView(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  const initialValues: CreditCardFormValues = {
    name: "",
    number: "",
    expiration_month: "",
    expiration_year: "",
    verification_code: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CardYupFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onReset={handleReset}
      >
        {(props: FormikProps<CreditCardFormValues>) => (
          <div className="flex justify-around items-center h-screen 2xl:px-10 w-4/5 m-auto">
            <div>
              <CardDetails />
            </div>
            <div className="w-[28rem] ml-40  mr-20 p-5">
              {isSubmitted ? (
                <>
                  <CreditCardThankYou handleReset={props.resetForm} />
                </>
              ) : (
                <>
                  <CreditCardForm props={props} />
                  <PrimaryButton
                    onClick={props.handleSubmit}
                    isLoading={props.isSubmitting}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default CreditCardView;
