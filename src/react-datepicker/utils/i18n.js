// 用於客製 i18n 文字設定，覆蓋即可套用

window.__reactDatePikcerI18n = window.__reactDatePikcerI18n || {
  week: {
    'week_0': 'Su',
    'week_1': 'Mo',
    'week_2': 'Tu',
    'week_3': 'We',
    'week_4': 'Th',
    'week_5': 'Fr',
    'week_6': 'Sa',
  },
  month: {
    'month_1': 'Jan',
    'month_2': 'Feb',
    'month_3': 'Mar',
    'month_4': 'Apr',
    'month_5': 'May',
    'month_6': 'Jun',
    'month_7': 'Jul',
    'month_8': 'Aug',
    'month_9': 'Sep',
    'month_10': 'Otc',
    'month_11': 'Nov',
    'month_12': 'Dec',
  },
}

const i18n = () => window.__reactDatePikcerI18n
export default i18n
