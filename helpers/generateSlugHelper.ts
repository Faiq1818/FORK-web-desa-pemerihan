export const generateSlug = (text: string) => {
  let date = Date.now();
  date = date as number;
  console.log(date);
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
  return text + "-" + date;
};
