import { translate } from "../../../../configuration/i18n.configuration";
import YupSettings from "../../../../configuration/yup.configuration";

export const CardYupFormSchema = YupSettings.object().shape({
  number: YupSettings.string()
    .required(translate("common.cant_be_blank"))
    .matches(/^[0-9\s]+$/, translate("common.wrong_format_number_only")),

  expiration_month: YupSettings.string()
    .max(2, translate("common.max_2_digits"))
    .required(translate("common.cant_be_blank"))
    .matches(/^[0-9]+$/, translate("common.wrong_format_number_only"))
    .matches(/^(0[1-9]|1[0-2])+$/, translate("common.invalid_month")),

  expiration_year: YupSettings.string()
    .max(2, translate("common.max_2_digits"))
    .required(translate("common.cant_be_blank"))
    .matches(/^[0-9]+$/, translate("common.wrong_format_number_only")),

  verification_code: YupSettings.string()
    .min(3)
    .max(4)
    .required(translate("common.cant_be_blank"))
    .matches(/^[0-9]{3,4}$/, translate("common.wrong_format_letters_only")),

  name: YupSettings.string()
    .required()
    .min(3)
    .max(255)
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/u,
      translate("common.wrong_format_letters_only")
    ),
});
