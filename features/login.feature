Feature: Test the login page

  Scenario Outline: As a registered user, I can log into the site using my credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be able to access My Account

    Examples: 
      | email            | password | 
      | alan@test.com    | Jtg128!  | 
