$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testng.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    }
  ],
  "line": 20,
  "name": "City movie locations",
  "description": "",
  "id": "city-movie-locations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Get Locations",
  "description": "",
  "id": "city-movie-locations;get-locations",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the apis are up and running for http://cmapi.bananaappscenter.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "a user performs a get request to api/Location/LocationDetails",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see json response with pairs on the filtered \"Msg\" node",
  "rows": [
    {
      "cells": [
        "Message",
        "Success Location Details"
      ],
      "line": 27
    },
    {
      "cells": [
        "StatusCode",
        "200"
      ],
      "line": 28
    },
    {
      "cells": [
        "isError",
        "false"
      ],
      "line": 29
    },
    {
      "cells": [
        "isSuccess",
        "true"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cmapi.bananaappscenter.com/",
      "offset": 32
    }
  ],
  "location": "MovieListing.the_apis_are_up_and_running_for_http_cmapi_bananaappscenter_com(String)"
});
formatter.result({
  "duration": 1555763474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "api/Location/LocationDetails",
      "offset": 33
    }
  ],
  "location": "MovieListing.a_user_performs_a_get_request_to_api_Location_LocationDetails(String)"
});
formatter.result({
  "duration": 825790945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "MovieListing.the_response_code_should_be(int)"
});
formatter.result({
  "duration": 459757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 55
    }
  ],
  "location": "MovieListing.i_should_see_json_response_with_pairs_on_the_filtered_Msg_node(String,DataTable)"
});
formatter.result({
  "duration": 131929181,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Check the movie details",
  "description": "",
  "id": "city-movie-locations;check-the-movie-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Smoke"
    },
    {
      "line": 32,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the apis are up and running for http://cmapi.bananaappscenter.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "a user performs a post request to api/MovieBooking/MovieBooking with below details",
  "rows": [
    {
      "cells": [
        "Mov_ID",
        "3"
      ],
      "line": 37
    },
    {
      "cells": [
        "Location_ID",
        "5"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "and perform the post request",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I should see json response with pairs on the filtered \"Msg\" node",
  "rows": [
    {
      "cells": [
        "Message",
        "Success Moviebooking Details"
      ],
      "line": 43
    },
    {
      "cells": [
        "StatusCode",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "isError",
        "false"
      ],
      "line": 45
    },
    {
      "cells": [
        "isSuccess",
        "true"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cmapi.bananaappscenter.com/",
      "offset": 32
    }
  ],
  "location": "MovieListing.the_apis_are_up_and_running_for_http_cmapi_bananaappscenter_com(String)"
});
formatter.result({
  "duration": 768953292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "api/MovieBooking/MovieBooking",
      "offset": 34
    }
  ],
  "location": "MovieListing.a_user_performs_a_post_request_to_api_Location_LocationDetails_with_below_details(String,DataTable)"
});
formatter.result({
  "duration": 142705,
  "status": "passed"
});
formatter.match({
  "location": "MovieListing.and_perform_the_post_request()"
});
formatter.result({
  "duration": 720362801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "MovieListing.the_response_code_should_be(int)"
});
formatter.result({
  "duration": 110295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 55
    }
  ],
  "location": "MovieListing.i_should_see_json_response_with_pairs_on_the_filtered_Msg_node(String,DataTable)"
});
formatter.result({
  "duration": 1829179,
  "status": "passed"
});
});