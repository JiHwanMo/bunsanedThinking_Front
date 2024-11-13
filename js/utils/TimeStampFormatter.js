export const timeStampFormatter = (timestamp) => {
  const date = new Date(timestamp);
  return formattedDate = date.toISOString().split('T')[0];
}
// 1676646000000을 2023-02-18로 바꿔줍니다
