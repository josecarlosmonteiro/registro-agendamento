type GET<T = any> = (url: string, tags?: string[]) => Promise<T>;
type POST<T = any> = (url: string, body: any, tags?: string[]) => Promise<T>;

const get: GET = async (url, tags) => {
  const response = await fetch(url, {
    next: { tags }
  });

  return response.json();
}

const post: POST = async (url, body, tags) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    next: { tags }
  });

  return response.json();
}

export const client = {
  get,
  post,
}