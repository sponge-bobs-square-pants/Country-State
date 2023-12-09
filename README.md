# Country-State-City API

## Overview
This Express.js application serves as an API for retrieving information about countries, states, and cities. It is built using the Express, Node and MongoDB.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection URI (update in `.env` file)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sponge-bobs-square-pants/Country-State
   cd express-country-state-city-api
   npm install
2. **Configuration:**
    Create a .env file in the project root and add your MongoDB connection URI:
    ```bash
    MONGO_URI=your_mongo_connection_uri
3.  **Running the Application:**
    Run the following command to start the server:
    ```bash
    npm start
The server will be running on http://localhost:6000

## ENDPOINTS

1.  ### Get Countries:
    **Endpoint:** `/api/v1/Countries`  
    **Method:** `GET`  
    **Description:** Retrieve a list of countries.  
2. ### Get States:  
    **Endpoint:** `/api/v1/State`  
    **Method:** `GET`  
    **Parameters:** `country_id` (required):   Comma-separated list of country IDs.  
    **Description:** Retrieve a list of unique states for the specified countries.  
3. ### Get Cities:
    **Endpoint:** `/api/v1/City`  
    **Method:** `GET`  
    **Parameters:** `state_id` (required): ID of the state.  
    **Description:** Retrieve a list of cities for the specified state.  

4. ### REQUIRED FILES:
    **country.json:**`https://country-state-city-dajz.onrender.com/api/v1/Countries`
    **state.json:**`https://country-state-city-dajz.onrender.com/api/v1/State?country_id=101`
    **city.json:**`https://country-state-city-dajz.onrender.com/api/v1/City?state_id=4021`

5. ### JSON FORMAT:
    1. **country:**
        ```bash
        [
            {
                "_id": "6573248ba237212f170d1b6d",
                "id": 101,
                "name": "India",
                "iso3": "IND",
                "iso2": "IN",
                "numeric_code": "356",
                "phone_code": "91",
                "capital": "New Delhi",
                "currency": "INR",
                "currency_name": "Indian rupee",
                "currency_symbol": "₹",
                "tld": ".in",
                "native": "भारत",
                "region": "Asia",
                "region_id": "3",
                "subregion": "Southern Asia",
                "subregion_id": "14",
                "nationality": "Indian",
                "timezones": [
                    {
                    "zoneName": "Asia/Kolkata",
                    "gmtOffset": 19800,
                    "gmtOffsetName": "UTC+05:30",
                    "abbreviation": "IST",
                    "tzName": "Indian Standard Time",
                    "_id": "6573248ba237212f170d1b6e"
                    }
                ],
                "translations": {
                    "kr": "인도",
                    "pt-BR": "Índia",
                    "pt": "Índia",
                    "nl": "India",
                    "hr": "Indija",
                    "fa": "هند",
                    "de": "Indien",
                    "es": "India",
                    "fr": "Inde",
                    "ja": "インド",
                    "it": "India",
                    "cn": "印度",
                    "tr": "Hindistan",
                    "_id": "6573248ba237212f170d1b6f"
                },
                "latitude": "20.00000000",
                "longitude": "77.00000000",
                "emoji": "🇮🇳",
                "emojiU": "U+1F1EE U+1F1F3",
                "__v": 0
            },
        ]
    2.  **State:**
        ```bash
         [
            {
                "_id": "6573248ca237212f170d23fa",
                "id": 4021,
                "name": "Delhi",
                "country_id": 101,
                "country_code": "IN",
                "country_name": "India",
                "state_code": "DL",
                "type": "Union territory",
                "latitude": "28.70405920",
                "longitude": "77.10249020",
                "__v": 0
            },
         ]
    3.  **city:**
        ```bash
        [
            {
                "_id": "657324f63544220b55f6a446",
                "id": 132406,
                "name": "Karol Bagh",
                "state_id": 4021,
                "state_code": "DL",
                "state_name": "Delhi",
                "country_id": 101,
                "country_code": "IN",
                "country_name": "India",
                "latitude": "28.65136000",
                "longitude": "77.19072000",
                "wikiDataId": "Q13641055",
                "__v": 0
            },
        ]


## Additional Notes
**The application uses Helmet for enhanced security.**
**CORS is configured to allow all origins.**

## License
 **This Countries States Cities Database is made available under the [Open Database License](LICENSE.md). Any rights in individual contents of the database are licensed under the [Database Contents License.](CONTENT_LICENSE.md)**



