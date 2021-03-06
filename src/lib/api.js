import useSWR from "swr";

export function getStrapiUrl(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchApi(path) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export function useFetchApiSWR(path) {
  const requestUrl = getStrapiUrl(path);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  return useSWR(requestUrl, fetcher);
}
