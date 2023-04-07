import iconComplete from "../../../resources/assets/icons/icon-complete.svg";
import PrimaryButton from "../buttons/primary";

interface CreditCardThankYouOptions {
  handleReset: () => void;
}

function CreditCardThankYou({
  handleReset,
}: CreditCardThankYouOptions): JSX.Element {
  return (
    <div className="text-center w-full lg:mt-[20%]">
      <img
        className="mx-auto mb-5"
        src={iconComplete}
        alt="Icon with a white tick mark inside of a purple gradient circle"
      />
      <h1 className="text-grayish-violet-900 uppercase text-2xl font-semibold my-6 tracking-widest">
        Thank you!
      </h1>
      <p className="mb-12 mt-5 font-semibold text-grayish-violet-500">
        We've added your card details
      </p>

      <PrimaryButton title="Continue" onClick={handleReset} />
    </div>
  );
}

export default CreditCardThankYou;
