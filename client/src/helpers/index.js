export const formatDate = (date) => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  return(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
}
