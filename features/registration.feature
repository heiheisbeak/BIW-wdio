Feature: Register a new user account

  Scenario: Register a new account with valid details
    Given I am on the home page
    When I select the Register option
    And I enter my registration details
    Then I am able to log in
    And View my account
