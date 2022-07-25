class Api {
  private url: string;
  private headers: { 'Content-type': string };

  constructor(config: { url: string; headers: { 'Content-type': string } }) {
    this.url = config.url;
    this.headers = config.headers;
  }

  private handleResponseData<TResponse>(
    res: Response,
  ): Promise<TResponse> | Promise<never> {
    if (res.ok) {
      return res.json() as Promise<TResponse>;
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  async testApi(data: Request): Promise<Response> {
    const url = `url`;
    const res = await fetch(url, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(data.body),
    });
    return this.handleResponseData<Response>(res);
  }
}

const api = new Api({
  url: process.env.API,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
