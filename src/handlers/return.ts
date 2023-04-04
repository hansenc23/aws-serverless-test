import { APIGatewayProxyResult } from 'aws-lambda';
export const returnResponse = (
  statusCode,
  responseObject: any,
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(responseObject),
  };
};
