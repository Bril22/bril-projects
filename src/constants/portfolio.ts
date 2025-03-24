export const code = [
    `// BDD (Cucumber) - Cypress Test
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('https://example.com/login');
});

When('I enter valid credentials', () => {
  cy.get('#username').type('testuser');
  cy.get('#password').type('password123');
});

When('I click the login button', () => {
  cy.get('#login-button').click();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

// Mock API response using Cypress Intercept (login.js)
describe('Mock API Login Test', () => {
  it('should mock login API response', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: { token: 'mocked_token' }
    }).as('mockLogin');

    cy.visit('https://example.com/login');
    cy.get('#username').type('testuser');
    cy.get('#password').type('password123');
    cy.get('#login-button').click();
    cy.wait('@mockLogin');
    cy.url().should('include', '/dashboard');
  });
});`,
    `# BDD - Robot Framework Test (login.robot)
*** Settings ***
Library  SeleniumLibrary
Library  Collections
Library  RequestsLibrary

*** Variables ***
{LOGIN_URL}  https://example.com/login
{API_URL}    https://example.com/api/login
{BROWSER}    Chrome
{USERNAME}   testuser
{PASSWORD}   password123

*** Test Cases ***
Valid Login
    Open Browser    {LOGIN_URL}  {BROWSER}
    Input Text      id=username    {USERNAME}
    Input Text      id=password    {PASSWORD}
    Click Button    id=login-button
    Wait Until Location Contains    /dashboard
    Close Browser

Mock API Login
    Create Session    mysession    {API_URL}
    {response}    POST On Session    mysession    /login    json={'username': '{USERNAME}', 'password': '{PASSWORD}'}
    Should Be Equal As Strings    {response.status_code}    200
    Log To Console    {response.json()} 
`,
    `// TDD - Java Selenium with JUnit
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertTrue;

public class LoginTest {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://example.com/login");
    }

    @Test
    public void testValidLogin() {
        WebElement username = driver.findElement(By.id("username"));
        WebElement password = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.id("login-button"));
        
        username.sendKeys("testuser");
        password.sendKeys("password123");
        loginButton.click();
        
        assertTrue(driver.getCurrentUrl().contains("/dashboard"));
    }

    @After
    public void tearDown() {
        driver.quit();
    }
}`,
];
