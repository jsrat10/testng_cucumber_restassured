#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)


Feature: City movie locations
@Smoke
Scenario: Get Locations
Given the apis are up and running for http://cmapi.bananaappscenter.com/
When a user performs a get request to api/Location/LocationDetails
Then the response code should be 200
And I should see json response with pairs on the filtered "Msg" node
	| Message    | Success Location Details |
	| StatusCode | 200                      |
	| isError    | false            				|
	| isSuccess  | true                     |

@Smoke @Sanity
Scenario: Check the movie details

Given the apis are up and running for http://cmapi.bananaappscenter.com/
When a user performs a post request to api/MovieBooking/MovieBooking with below details
	| Mov_ID   	 | 3 |
	| Location_ID | 5 |

And and perform the post request
Then the response code should be 200
And I should see json response with pairs on the filtered "Msg" node
	| Message    | Success Moviebooking Details |
	| StatusCode | 200                      |
	| isError    | false            				|
	| isSuccess  | true                     |