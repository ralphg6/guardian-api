import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { StatusCodes } from "http-status-codes";

export const get = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    return {
        body: JSON.stringify({
            message: "Hello World!!! cicd",
        }),
        statusCode: StatusCodes.OK,
    };
};
