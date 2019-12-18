package stepDefinition;

import org.testng.Assert;

import core.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import practicePageObjects.PracticeProjectPageObject;

public class PracticeStepDefinition extends Base {
	
	PracticeProjectPageObject practiceProject = new PracticeProjectPageObject();
	
	@Given("^User opens Tek School of America page$")
	
	public void user_opens_Main_page()throws Throwable {
		
		Base.initializeDriver();
		String expectedTitle = "TEK School – Knowledge is power";

		Assert.assertEquals(practiceProject.pageTitle(), expectedTitle);

		
	}
	
	@When("^User clicks on Test Environment Link$")
	
	public void user_clicks_on_testLink()throws Throwable {
		
		practiceProject.clickOnTestLink();
	}
	
	@Then("^User should be on Test Environment Page$")
	public void user_should_see_testPage() throws Throwable {
		
		System.out.println("this is just a praCtice");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
