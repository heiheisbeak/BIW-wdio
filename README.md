# BIW-wdio

# WebDriverIO with Cucumber and Allure Reporting

Basic user registration and checkout process testing framework using WebDriverIO with Cucumber and integrated with Allure for reporting. 

### Prerequisites

- Node.js (version 12 or higher)
- NPM (Node Package Manager)
- Java (version 8 or higher) for Allure Reporting
- Chrome web browser

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/heiheisbeak/BIW-wdio.git
   ```
2. Install dependencies: 
   ```
   npm install
   ```

### Running Tests

To run the tests using WebDriverIO, execute the following command:

```
npx wdio wdio.conf.js
```

### Allure Reporting

After running tests, you can generate and view Allure reports by executing:

```
npx allure generate --clean allure-results && npx allure open
```

## Project Structure

- `/allure-report`: Generated Allure report files.
- `/features`: Test specifications and Cucumber feature files.
- `.--/pageobjects`: Page object models for web page abstraction.
- `.--/models`: Contains a constructor for generating customer data on demand using Faker.js.
- `.--/support`: Contains custom world configuration to enable passing values between Steps.
- `wdio.conf.js`: WebDriverIO configuration file.

