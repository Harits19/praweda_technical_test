import useSWR from "swr";
import { GetAllUserResponse } from "./model";

export default function useGetAllUser({
  page = 1,
  results = 5,
}: {
  page?: number;
  results?: number;
}) {
  return useSWR<GetAllUserResponse | undefined, unknown, string>(
    `http://localhost:8080/user?page=${page}&results=${results}`,
    async (key) => {
      try {
        const response = await fetch(key);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: GetAllUserResponse = await response.json();
        return json;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          return;
        }
        console.log(error);

        return undefined;
      }
    }
  );
}
