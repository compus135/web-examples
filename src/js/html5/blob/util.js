export const exportJsonData = function (JsonData, fileName) {
  const json = JSON.stringify(JsonData);
  const blob = new Blob([json], {
    type: "text/json;charset=utf-8",
  });
  downloadFile(blob, fileName + ".json");
};
export const downloadFile = (blob, fileName) => {
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
