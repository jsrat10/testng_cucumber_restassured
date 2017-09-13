package steps;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import main.TestRunner;
import cucumber.api.java.en.Then;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import static com.jayway.restassured.RestAssured.given;
import main.ResponseHolder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.testng.Assert;

//import main.TestRunner;

public class MovieListing extends TestRunner{
	private String url;
	//private String body;
	private Long statusCode;
	Map<String, Object> responseMap;
	Map<String, String> query;
	Response response;
	Map<String, String> body;
	//@Given("^the apis are up and running for “http://cmapi\\.bananaappscenter\\.com/“$")
	@Given("^the apis are up and running for (.*)$")
	public void the_apis_are_up_and_running_for_http_cmapi_bananaappscenter_com(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.url = url;
		response = given().when().get(url);
		Assert.assertEquals(200, response.getStatusCode());
		System.out.println(url);
	}
	

	@When("^a user performs a get request to (.*)$")
	public void a_user_performs_a_get_request_to_api_Location_LocationDetails(String endpoint) throws Throwable {
	      System.out.println(this.url+endpoint);
	      final Response response =
			      given()
			        .when()
			                .get(this.url + endpoint);

	      ResponseHolder.setResponse(response);
		
		this.statusCode = new Long(response.statusCode());

	}
	
	@Then("^the response code should be (\\d+)$")
	public void the_response_code_should_be(int status) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(status);
	}
	
	@And("^I should see json response with pairs on the filtered \"([^\"]*)\" node$")
	public void i_should_see_json_response_with_pairs_on_the_filtered_Msg_node(String filter, DataTable dataTable) throws Throwable {
		Map<String,String> query = new LinkedHashMap<String, String>();
		for (DataTableRow row : dataTable.getGherkinRows()) {
			query.put(row.getCells().get(0),row.getCells().get(1));
		}
		//List<List<String>> data = msg.raw();
		//Assert.assertEquals((data.get(1).get(1)), ResponseHolder.getResponseCode());
		//Assert.assertEquals((data.get(1).get(1)), ResponseHolder.getResponseBody());
		ObjectReader reader = new ObjectMapper().reader(Map.class);
		responseMap = reader.readValue(ResponseHolder.getResponseBody());
		responseMap = (Map<String, Object>) responseMap.get(filter);
		for(String key:query.keySet()) {
			System.out.println(key + "\n");
			Assert.assertTrue(responseMap.containsKey(key));
			Assert.assertEquals(query.get(key), responseMap.get(key).toString());
		}
	}
	
	@When("^a user performs a post request to (.*) with below details$")
	public void a_user_performs_a_post_request_to_api_Location_LocationDetails_with_below_details(String url, DataTable dataTable) throws Throwable {
		this.url = this.url+url;
		this.body = new LinkedHashMap<String, String>();
		//Map<String, String> body = new LinkedHashMap<String, String>();
		for (DataTableRow row : dataTable.getGherkinRows()) {
			this.body.put(row.getCells().get(0),  row.getCells().get(1));
		}
	    System.out.println(this.body);
	    
	}

	@When("^and perform the request$")
	public void and_perform_the_request() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	@When("^and perform the post request$")
	public void and_perform_the_post_request() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response = given().contentType(ContentType.JSON).body(this.body).when().post(this.url);
		ResponseHolder.setResponse(response);
	    
	}
}
