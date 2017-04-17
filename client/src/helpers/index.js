export const formatDate = (date) => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  return(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
}

export const timeOptions = ['1m','3m','6m','1y','2y','3y'];
