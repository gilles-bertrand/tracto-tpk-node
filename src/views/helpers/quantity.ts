function getQuantityOptions (stock:number) {
  let templateHtml = '';
  for (let i = 1; i <= stock; i++) {
    templateHtml += ` 
    <option>${i}</option>
    `;
  }
  return templateHtml;
}

export { getQuantityOptions };
