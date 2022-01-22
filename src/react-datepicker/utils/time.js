export function isDateObj(obj) { return (obj instanceof Date) }
export function ISOformat(y, m, d) { return [y, ('0' + m).slice(-2), ('0' + d).slice(-2)].join("-") }

export function parseDate(dateOrString) {
  const date = (() => {
    try {
      return isDateObj(dateOrString) ? dateOrString : new Date(Date.parse(dateOrString))
    } catch (error) {
      return new Date()
    }
  })()

  const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
  const label = ISOformat(year, month, day)

  // https://calendars.fandom.com/wiki/Calculating_the_day_of_the_week#Centuries_table
  const gaussianFormula = ({ d, m, y, c }) => ((d + Math.floor((2.6 * m) - 0.2) + y + Math.floor(y / 4) + Math.floor(c / 4) - (2 * c)) % 7)
  const Y = (month <= 2) ? (year - 1) : year  // year-1 for January or February, year for the rest of the year
  const d = day                               // (1 to 31)
  const m = ((month + 9) % 12) + 1            // shifted month (March=1,...February=12)
  const y = parseInt(`${Y}`.slice(2, 4))      // last 2 digits of Y
  const c = parseInt(`${Y}`.slice(0, 2))      // first 2 digits of Y
  const week = Math.floor(gaussianFormula({ d, m, y, c })) // day of week (0=Sunday,..6=Saturday)

  return { day, week, month, year, label }
}

export function getBeginningOfMonth(year, month) { return new Date(year, (month - 1), 1) }
export function getEndOfMonth(year, month) { return new Date(year, month, 0) }

export function buildMonthOfDayList(year, month) {
  const endOfLastMonth = parseDate(getEndOfMonth(year, month - 1))
  const endOfMonth = parseDate(getEndOfMonth(year, month))
  const beginningOfNextMonth = parseDate(getBeginningOfMonth(year, month + 1))

  const list = [ // 產生當月份日期表，並在頭尾補上非當月日期
    ...Array.from({ length: endOfLastMonth.week + 1 }, (_, d) => [endOfLastMonth.year, endOfLastMonth.month, endOfLastMonth.day - d]).reverse(),
    ...Array.from({ length: endOfMonth.day }, (_, d) => [year, month, d + 1]),
    ...Array.from({ length: (6 + 7) - endOfMonth.week }, (_, d) => [beginningOfNextMonth.year, beginningOfNextMonth.month, d + 1]),
  ]

  return list
}
