export default function apiCaller<T, K>(method: string, path: string, data?: K): Promise<T[] | null> {
  return fetch(process.env.REACT_APP_BASE_SERVER_URL + path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => res.json())
}
//
