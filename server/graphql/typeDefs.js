import { gql } from "apollo-server-express";

const typeDefs = gql`
  """
  This is the GraphQL API for Bitcoin Exchange Calculator
  """
  type Query {
    "The current price of the Bitcoin in Nigerian Naira equivalence (NGN)"
    calculatePrice(
      "The type of transaction. It can either be 'BUY' or 'SELL'"
      type: Transaction!

      "The percentage that is used in the calculation of current price."
      margin: Float!

      "The custom exchange rate that is used in the calculation of current price."
      exchangeRate: Float!
    ): BitcoinExchangePrice!
  }

  """
  The current bitcoin price in Nigerian Naira
  """
  type BitcoinExchangePrice {
    "The currency code"
    code: String!

    "Describes the currency"
    description: String!

    "The delimitered bitcoin price"
    rate: String!

    "The current bitcoin price"
    rateFloat: Float!
  }

  """
  This is the list of available transaction types
  """
  enum Transaction {
    BUY
    SELL
  }
`;

export default typeDefs;
