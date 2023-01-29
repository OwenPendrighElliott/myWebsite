import getSuspender from './getSuspender';

function fetchData(url: string) {
  const promise = fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    });

  return getSuspender(promise);
}

export default fetchData;
