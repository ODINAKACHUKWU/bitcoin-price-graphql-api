import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let base_url;

if (process.env.NODE_ENV === "production") {
  base_url = process.env.GRAPHQL_API_PROD_URL;
} else {
  base_url = process.env.GRAPHQL_API_DEV_URL;
}

const Query = {
  calculatePrice: async (root, args, context, info) => {
    try {
      const { type, margin, exchangeRate } = args;
      const {
        data: { data },
      } = await axios({
        method: "post",
        url: `${base_url}/graphql`,
        data: {
          query: `query {
            calculatePrice(type: ${type}, margin: ${margin}, exchangeRate: ${exchangeRate}) {
              code
              rate
              rateFloat
              description
            }
          }`,
        },
      });
      const { calculatePrice } = data;
      return calculatePrice;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default { Query };
