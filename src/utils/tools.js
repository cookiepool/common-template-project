/**
 * 返回当前时间：YYYY-MM-DD 星期X HH:mm:ss
 * @return { String }
 * **/
export function transformNowTime() {
  const weekList = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ];

  const time = new Date();
  const year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  const week = time.getDay();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let second = time.getSeconds();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second = second < 10 ? '0' + second : second;

  return `${year}年${month}月${day}日 ${weekList[week]} ${hours}:${minutes}:${second}`;
}
