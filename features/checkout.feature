
Feature: Test that a user can add an item to their cart and complete the checkout process

  Background: 
    Given I am on the home page

  Scenario Outline: As a user of the site, I want to add an item to my shopping cart so that I can checkout and complete my purchase.
    Given I am logged in as a registered user
    When I add an <item> to my cart
    And I complete the checkout process
    Then I can review my completed order

    Examples: 
      | item                                |
      | "Leica T Mirrorless Digital Camera" |
      | "HTC One Mini Blue"                 |
