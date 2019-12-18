$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Tek.feature");
formatter.feature({
  "line": 1,
  "name": "Test Environment page Tests",
  "description": "",
  "id": "test-environment-page-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14536511500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Test Environment page",
  "description": "",
  "id": "test-environment-page-tests;user-should-navigate-to-test-environment-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Practice"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User opens Tek School of America page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Test Environment Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be on Test Environment Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeStepDefinition.user_opens_Main_page()"
});
formatter.result({
  "duration": 8321420300,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepDefinition.user_clicks_on_testLink()"
});
formatter.result({
  "duration": 4145862400,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepDefinition.user_should_see_testPage()"
});
formatter.result({
  "duration": 252200,
  "status": "passed"
});
formatter.after({
  "duration": 6087056300,
  "status": "passed"
});
});