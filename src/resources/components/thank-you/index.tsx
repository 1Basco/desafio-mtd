import iconComplete from "../../../resources/assets/icons/icon-complete.svg";
import PrimaryButton from "../buttons/primary";

interface CreditCardThankYouOptions {
  handleReset: () => void;
}

function CreditCardThankYou({
  handleReset,
}: CreditCardThankYouOptions): JSX.Element {
  return (
    <div className="text-center">
      <img
        className="mx-auto mb-6"
        src={iconComplete}
        alt="Icon with a white tick mark inside of a purple gradient circle"
      />
      <h1 className="uppercase text-2xl font-semibold my-6 tracking-widest">
        Thank you!
      </h1>
      <p className="mb-12 mt-6">We've added your card details</p>

      <PrimaryButton title="Continue" onClick={handleReset} />
    </div>
  );
}

export default CreditCardThankYou;
