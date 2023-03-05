import { trackPromise } from 'react-promise-tracker';

function fetchData(url: string, onResolve: any) {
  trackPromise(
    fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log('Fetched: ', res);
        onResolve(res);
        return res;
      }),
  );
}

export default fetchData;
