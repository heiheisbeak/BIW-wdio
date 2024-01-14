Feature: Register a new user account

  Scenario: Register a new account with valid details
    Given I am on the home page
    When I register a new account
    Then I am able to use it to log in
    And View my account
