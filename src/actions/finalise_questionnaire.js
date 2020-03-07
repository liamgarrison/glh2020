import download from 'downloadjs';

export default async function finaliseQuestionnaire (data) {
  const response = await fetch('https://taction20200307114549.azurewebsites.net/tenant', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  const blob = await response.blob();

  return download(blob, 'download.docx', 'application/msword');
}
