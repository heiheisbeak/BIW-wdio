Feature: Test the login page
@ignore
  Scenario Outline: As a registered user, I can log into the site using my credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be able to view My <account>

    Examples: 
      | email         | password | account       |
      | alan@test.com | Jtg128!  | alan@test.com |
