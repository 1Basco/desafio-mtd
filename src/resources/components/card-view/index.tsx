import { Formik, FormikProps } from "formik";
import { CardYupFormSchema } from "../forms/credit-card/schema.yup";
import { CreditCardFormValues } from "./types";
import CreditCardForm from "../forms/credit-card";
import CardDetails from "../card-details";
import PrimaryButton from "../buttons/primary";

function CreditCardView(): JSX.Element {
  const initialValues: CreditCardFormValues = {
    name: "",
    number: "",
    expiration_month: "",
    expiration_year: "",
    verification_code: "",
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CardYupFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props: FormikProps<CreditCardFormValues>) => (
          <div className="flex justify-around items-center h-screen 2xl:px-10 w-4/5 m-auto">
            <CardDetails />
            <div className="w-[28rem] ml-60 p-5">
              <CreditCardForm props={props} />
              <PrimaryButton onClick={props.handleSubmit} />
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default CreditCardView;
