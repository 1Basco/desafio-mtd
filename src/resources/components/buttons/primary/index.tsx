import { ButtonTypeConstants } from "../../../../app/constants/button-type.constants";
import { translate } from "../../../../configuration/i18n.configuration";

interface PrimaryButtonOptions {
  title?: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  icon?: JSX.Element;
  isLoading?: boolean;
}

const PrimaryButton = ({
  title,
  type,
  onClick,
  icon,
}: PrimaryButtonOptions): JSX.Element => (
  <div>
    <button
      type={type || ButtonTypeConstants.SUBMIT}
      className={` group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm bg-purple-950 font-medium rounded-md text-white 
      focus:outline-none`}
      onClick={onClick}
    >
      <>
        {icon && (
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {icon}
          </span>
        )}

        <h1>{title || translate("button.confirm")}</h1>
      </>
    </button>
  </div>
);

export default PrimaryButton;
