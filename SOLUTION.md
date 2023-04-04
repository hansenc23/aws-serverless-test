# Weather API

## Overview

This Weather API is a serverless application deployed using the Serverless Framework. It provides an endpoint to get weather information based on the country code and postal code provided by the user. This API fetches the data from the Open Weather API and delivers the weather details to the user in a simplified format.

## Base URL

The base URL for the Weather API is:
`https://sineaxycng.execute-api.ap-southeast-2.amazonaws.com/development`

## Endpoint

### Get Weather

Get the current weather information for a specific location based on the provided country code and postal code.

### Request

**Method**: GET
**URL**: `/get-weather/{countryCode}/{postcode}`
**Parameters**:

`countryCode` (required) - A two-letter country code as per the ISO 3166-1 alpha-2 standard (e.g., "US" for the United States, "AU" for Australia).
`postcode` (required) - A string representing the postal code for the location of interest.

## Example

`https://sineaxycng.execute-api.ap-southeast-2.amazonaws.com/development/get-weather/au/2000`

### Response

```
{
    response: {
        lon: 151.2025,
        lat: -33.8699,
        main: "Clouds",
        description: "broken clouds",
        temp: 290.4,
        feels_like: 290.45,
        temp_min: 288.61,
        temp_max: 291.85,
        pressure: 288.61,
        humidity: 87
    }
}
```

# Test API locally

### Run the following command

Make sure you ahve the Serverless CLI installed Globally

```
npm install -g serverless
```

```
npm install
serverless offline
```

Then, follow the instructions returned on the CLI.

# Explanation

**src/handlers/weather.handler**

- Wrapped API request in a try catch block to prevent runtime errors.
- Stored Open Weather API key in an environment variable for security purposes.
- Added input validation for Country Code and Postcode, then return relevant error message. This is to inform users on what they are missing when making the request.
- Deployed the API with API Gateway to add extra layer of security, to simplify client access to microservices by providing a unified API endpoint.
