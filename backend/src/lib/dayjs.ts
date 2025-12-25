import localizedFormat from "dayjs/plugin/localizedFormat.js";
import "dayjs/locale/pt-br.js";
import dayjs from "dayjs";

dayjs.locale("pt-br");
dayjs.extend(localizedFormat);

export { dayjs };
