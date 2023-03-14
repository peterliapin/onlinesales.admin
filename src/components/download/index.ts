export const downloadFile = (url: string) => {
  const a = document.createElement("a");
  a.href = decodeURIComponent(url);
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
