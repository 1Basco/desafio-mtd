import * as YupSettings from "yup";
import { translate } from "./i18n.configuration";

YupSettings.setLocale({
  mixed: {
    required: translate("common.cant_be_blank"),
    default: translate("common.cant_be_blank"),
  },
  string: {
    email: translate("common.cant_be_blank"),
    min: translate("common.cant_be_blank"),
    max: translate("common.cant_be_blank"),
  },
  number: {
    min: translate("common.cant_be_blank"),
    max: translate("common.cant_be_blank"),
  },
});

export default YupSettings;
