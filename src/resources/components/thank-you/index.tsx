import { translate } from "../../../configuration/i18n.configuration";
import iconComplete from "../../../resources/assets/icons/icon-complete.svg";
import PrimaryButton from "../buttons/primary";

interface CreditCardThankYouOptions {
  handleReset: () => void;
}

function CreditCardThankYou({
  handleReset,
}: CreditCardThankYouOptions): JSX.Element {
  return (
    <div className="text-center w-full lg:mt-[10%]">
      <img
        className="mx-auto mb-5"
        src={iconComplete}
        alt="Icon with a white tick mark inside of a purple gradient circle"
      />
      <h1 className="text-grayish-violet-900 uppercase text-2xl font-semibold my-6 tracking-widest">
        {translate("heading.thank_you")}
      </h1>
      <p className="mb-12 mt-5 font-semibold text-grayish-violet-500">
        {translate("heading.we_ve_added_your_card_details")}
      </p>

      <PrimaryButton title="Continue" onClick={handleReset} />
    </div>
  );
}

export default CreditCardThankYou;
