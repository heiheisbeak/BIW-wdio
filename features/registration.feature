#@ignore
Feature: Register a new user account
    As a new user, I can register an account so that I can make orders and view my account details

  Background: Given I am viewing the home page

  Scenario: Register a new account with valid details
    When I select the Register option
    And I enter my registration details
    Then I am able to log in
    And View my account
