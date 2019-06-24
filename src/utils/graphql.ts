import { introspectionQuery } from "graphql";

export const fetchGraphQLSchema = async (endpoint: string): Promise<string> =>
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: introspectionQuery })
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json.data;
    });
