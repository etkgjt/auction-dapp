import eventCalendarSagas from "./EventCalendar/sagas"
import rulesHeaderSagas from "./RulesHeader/sagas"
import rulesCenterSagas from "./RulesCenter/sagas"
import rulesFooterSagas from "./RulesFooter/sagas"
export default [
  eventCalendarSagas(),
  rulesHeaderSagas(),
  rulesCenterSagas(),
  rulesFooterSagas()
]
