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
          <div className="flex flex-col lg:flex-row lg:justify-around items-center h-screen lg:px-5 lg:w-4/5 m-auto">
            <div className="lg:mb-0 mt-4 mb-10">
              <CardDetails />
            </div>
            <div className="lg:w-2/5 lg:mr[5%] lg:ml-[15%] p-5 w-full lg:max-w-[50%] lg:mt-[5%]">
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
