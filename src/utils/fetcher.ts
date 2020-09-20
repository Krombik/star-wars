import axios, { AxiosResponse } from "axios";
import { FetchRV } from "types";

const fetcher = {
  async get<T = {}>(url: string): Promise<FetchRV<T>> {
    try {
      return { res: (await axios.get(url)).data };
    } catch (error) {
      const { data, status } = error.response as AxiosResponse;
      return { res: data, status };
    }
  },
};

export default fetcher;
