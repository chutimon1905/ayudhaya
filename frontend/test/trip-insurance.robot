*** Settings ***
Resource    trip-insurance-keywords.robot
Library    SeleniumLibrary
Test Setup    Open web browser on Google Chrome
Test Template    Buy a trip insurace package
Test Teardown    Close Google Chrome browser

*** Test Cases ***
Buy a trip insurance package    NUMLABYOD    REPRAKAN    1799310717171    MS. ANCHISA TEA    0887788990    nearreann@gmail.com       