export const timeFormat = (time, format = 'YYYY-MM-DD') => {
  const date = new Date(time)

  const formatParts = {
    'YYYY': date.getFullYear(),
    'MM': ('0' + (date.getMonth() + 1)).slice(-2),
    'DD': ('0' + date.getDate()).slice(-2),
    'HH': ('0' + date.getHours()).slice(-2),
    'mm': ('0' + date.getMinutes()).slice(-2),
    'ss': ('0' + date.getSeconds()).slice(-2)
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => formatParts[match])
}
