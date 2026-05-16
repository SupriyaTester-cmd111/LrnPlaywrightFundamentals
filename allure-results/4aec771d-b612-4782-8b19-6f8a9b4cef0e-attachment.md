# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task2_pw\Project5_Profile.spec.ts >> Profile complition form
- Location: tests\task2_pw\Project5_Profile.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.isChecked: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('continent-{name: "Asia"}')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - button "Get started" [expanded] [ref=e21] [cursor=pointer]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
          - img [ref=e25]
        - list [ref=e27]:
          - listitem [ref=e28]:
            - link "Overview" [ref=e29] [cursor=pointer]:
              - /url: ../index.html
              - img [ref=e31]
              - generic [ref=e34]: Overview
      - generic [ref=e35]:
        - button "Selectors & Locators" [expanded] [ref=e36] [cursor=pointer]:
          - img [ref=e37]
          - generic [ref=e39]: Selectors & Locators
          - img [ref=e40]
        - list [ref=e42]:
          - listitem [ref=e43]:
            - link "Multiple Element Filter" [ref=e44] [cursor=pointer]:
              - /url: ../multiple_element_filter.html
              - img [ref=e46]
              - generic [ref=e49]: Multiple Element Filter
          - listitem [ref=e50]:
            - link "Web Table Directory" [ref=e51] [cursor=pointer]:
              - /url: ../webtable.html
              - img [ref=e53]
              - generic [ref=e58]: Web Table Directory
      - generic [ref=e59]:
        - button "Tables & Forms" [expanded] [ref=e60] [cursor=pointer]:
          - img [ref=e61]
          - generic [ref=e64]: Tables & Forms
          - img [ref=e65]
        - list [ref=e67]:
          - listitem [ref=e68]:
            - link "QA Profile Form" [ref=e69] [cursor=pointer]:
              - /url: ./practice.html
              - img [ref=e71]
              - generic [ref=e74]: QA Profile Form
          - listitem [ref=e75]:
            - link "Companies Table" [ref=e76] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e78]
              - generic [ref=e81]: Companies Table
          - listitem [ref=e82]:
            - link "Tall Buildings Table" [ref=e83] [cursor=pointer]:
              - /url: ./webtable1.html
              - img [ref=e85]
              - generic [ref=e87]: Tall Buildings Table
          - listitem [ref=e88]:
            - link "Custom Dropdowns" [ref=e89] [cursor=pointer]:
              - /url: ./dropdowns.html
              - img [ref=e91]
              - generic [ref=e94]: Custom Dropdowns
          - listitem [ref=e95]:
            - link "Select Box Variants" [ref=e96] [cursor=pointer]:
              - /url: ./select-boxes.html
              - img [ref=e98]
              - generic [ref=e101]: Select Box Variants
          - listitem [ref=e102]:
            - link "Sortable Admin Table" [ref=e103] [cursor=pointer]:
              - /url: ./sortable.html
              - generic [ref=e105]: Sortable Admin Table
          - listitem [ref=e106]:
            - link "Cricket Scorecard" [ref=e107] [cursor=pointer]:
              - /url: ./scorecard.html
              - generic [ref=e109]: Cricket Scorecard
      - generic [ref=e110]:
        - button "Frames" [expanded] [ref=e111] [cursor=pointer]:
          - img [ref=e112]
          - generic [ref=e117]: Frames
          - img [ref=e118]
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "Frames overview" [ref=e122] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e124]
              - generic [ref=e126]: Frames overview
          - listitem [ref=e127]:
            - link "Multi-frame frameset" [ref=e128] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e130]
              - generic [ref=e135]: Multi-frame frameset
          - listitem [ref=e136]:
            - link "Nested iframes" [ref=e137] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e139]
              - generic [ref=e143]: Nested iframes
          - listitem [ref=e144]:
            - link "Courses frameset" [ref=e145] [cursor=pointer]:
              - /url: ../frames/courses-frameset.html
              - generic [ref=e147]: Courses frameset
      - generic [ref=e148]:
        - button "Widgets" [expanded] [ref=e149] [cursor=pointer]:
          - img [ref=e150]
          - generic [ref=e153]: Widgets
          - img [ref=e154]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - link "SVG locators" [ref=e158] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e160]: SVG locators
          - listitem [ref=e161]:
            - link "Shadow DOM" [ref=e162] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e164]: Shadow DOM
          - listitem [ref=e165]:
            - link "Calendar / date picker" [ref=e166] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e168]: Calendar / date picker
          - listitem [ref=e169]:
            - link "Drag & drop Kanban" [ref=e170] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e172]: Drag & drop Kanban
          - listitem [ref=e173]:
            - link "Toasts & notifications" [ref=e174] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e176]: Toasts & notifications
          - listitem [ref=e177]:
            - link "Native dialogs" [ref=e178] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e180]: Native dialogs
          - listitem [ref=e181]:
            - link "Hover menus" [ref=e182] [cursor=pointer]:
              - /url: ../widgets/hover-menu.html
              - generic [ref=e184]: Hover menus
          - listitem [ref=e185]:
            - link "Right-click menu" [ref=e186] [cursor=pointer]:
              - /url: ../widgets/context-menu.html
              - generic [ref=e188]: Right-click menu
          - listitem [ref=e189]:
            - link "Keyboard navigation" [ref=e190] [cursor=pointer]:
              - /url: ../widgets/keyboard-form.html
              - generic [ref=e192]: Keyboard navigation
          - listitem [ref=e193]:
            - link "Windows & Tabs" [ref=e194] [cursor=pointer]:
              - /url: ../widgets/windows-tabs.html
              - img [ref=e196]
              - generic [ref=e198]: Windows & Tabs
          - listitem [ref=e199]:
            - link "Upload & Download" [ref=e200] [cursor=pointer]:
              - /url: ../widgets/upload-download.html
              - img [ref=e202]
              - generic [ref=e205]: Upload & Download
          - listitem [ref=e206]:
            - link "Scroll" [ref=e207] [cursor=pointer]:
              - /url: ../widgets/scroll.html
              - generic [ref=e209]: Scroll
          - listitem [ref=e210]:
            - link "Assertions (expect)" [ref=e211] [cursor=pointer]:
              - /url: ../widgets/expect.html
              - generic [ref=e213]: Assertions (expect)
          - listitem [ref=e214]:
            - link "Test modifiers · hooks · data" [ref=e215] [cursor=pointer]:
              - /url: ../widgets/test-modifiers.html
              - generic [ref=e217]: Test modifiers · hooks · data
          - listitem [ref=e218]:
            - link "Data-driven + POM" [ref=e219] [cursor=pointer]:
              - /url: ../widgets/data-driven.html
              - generic [ref=e221]: Data-driven + POM
          - listitem [ref=e222]:
            - link "JavaScript notes" [ref=e223] [cursor=pointer]:
              - /url: ../notes.html
              - generic [ref=e225]: JavaScript notes
      - generic [ref=e226]:
        - button "Network" [expanded] [ref=e227] [cursor=pointer]:
          - img [ref=e228]
          - generic [ref=e231]: Network
          - img [ref=e232]
        - list [ref=e234]:
          - listitem [ref=e235]:
            - link "Network interception" [ref=e236] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e238]: Network interception
      - generic [ref=e239]:
        - button "Coming next" [expanded] [ref=e240] [cursor=pointer]:
          - img [ref=e241]
          - generic [ref=e243]: Coming next
          - img [ref=e244]
        - list
    - generic [ref=e246]:
      - generic [ref=e247]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e248] [cursor=pointer]:
        - img [ref=e249]
  - generic [ref=e251]:
    - banner [ref=e252]:
      - button "Open sidebar" [ref=e253] [cursor=pointer]:
        - img [ref=e254]
      - generic [ref=e256]:
        - link "Practice" [ref=e257] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e258]
        - generic [ref=e260]: Tables
        - img [ref=e261]
        - strong [ref=e263]: QA Profile Form
      - generic [ref=e264]:
        - generic [ref=e265] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e266]
          - generic [ref=e267]: Locator markers
        - generic [ref=e268]: Form practice
        - button "Toggle dark mode" [ref=e269] [cursor=pointer]:
          - img [ref=e270]
          - img [ref=e272]
    - main [ref=e275]:
      - region "QA Profile Form practice" [ref=e276]:
        - generic [ref=e277]: Form practice · Inputs & widgets
        - heading "QA Profile Form practice" [level=1] [ref=e279]:
          - text: QA
          - emphasis [ref=e280]: Profile Form
          - text: practice
        - paragraph [ref=e281]: "A focused form for practising every input type Playwright tests cover: text fields, radio groups, dropdowns, dates, checkboxes, tabs, file upload, and downloads. Build out your locator strategy before you reveal the solution."
      - tablist "Page sections" [ref=e282]:
        - tab "Page" [selected] [ref=e283] [cursor=pointer]
        - tab "Practice 10" [ref=e284] [cursor=pointer]:
          - text: Practice
          - generic [ref=e285]: "10"
        - tab "Solution" [ref=e286] [cursor=pointer]
      - tabpanel "Page" [ref=e287]:
        - generic [ref=e288]:
          - generic [ref=e289]:
            - heading "Personal information" [level=2] [ref=e290]
            - generic [ref=e291]:
              - generic [ref=e292]:
                - generic [ref=e293]: First name
                - textbox "First name" [ref=e294]:
                  - /placeholder: Aarav
                  - text: Aarav
                - generic [ref=e295]:
                  - generic [ref=e296]:
                    - generic [ref=e297]: id
                    - text: =first-name
                  - generic [ref=e298]:
                    - generic [ref=e299]: name
                    - text: =firstName
                  - generic [ref=e300]:
                    - generic [ref=e301]: data-testid
                    - text: =first-name
              - generic [ref=e302]:
                - generic [ref=e303]: Last name
                - textbox "Last name" [ref=e304]:
                  - /placeholder: Sharma
                  - text: Sharma
                - generic [ref=e305]:
                  - generic [ref=e306]:
                    - generic [ref=e307]: id
                    - text: =last-name
                  - generic [ref=e308]:
                    - generic [ref=e309]: name
                    - text: =lastName
                  - generic [ref=e310]:
                    - generic [ref=e311]: data-testid
                    - text: =last-name
            - generic [ref=e312]:
              - generic [ref=e313]: Gender
              - radiogroup "Gender" [ref=e314]:
                - generic [ref=e315] [cursor=pointer]:
                  - radio "Male" [ref=e316]
                  - text: Male
                - generic [ref=e317] [cursor=pointer]:
                  - radio "Female" [checked] [ref=e318]
                  - text: Female
              - generic [ref=e319]:
                - generic [ref=e320]:
                  - generic [ref=e321]: name
                  - text: =gender
                - generic [ref=e322]:
                  - generic [ref=e323]: data-testid
                  - text: =gender-male / gender-female
          - generic [ref=e324]:
            - heading "Professional details" [level=2] [ref=e325]
            - generic [ref=e326]:
              - generic [ref=e327]:
                - generic [ref=e328]: Years of experience
                - combobox "Years of experience" [ref=e329]:
                  - option "Select years"
                  - option "1"
                  - option "2"
                  - option "3"
                  - option "4"
                  - option "5"
                  - option "6"
                  - option "7" [selected]
                - generic [ref=e330]:
                  - generic [ref=e331]:
                    - generic [ref=e332]: id
                    - text: =years-experience
                  - generic [ref=e333]:
                    - generic [ref=e334]: name
                    - text: =yearsExperience
                  - generic [ref=e335]:
                    - generic [ref=e336]: data-testid
                    - text: =years-experience
              - generic [ref=e337]:
                - generic [ref=e338]: Date
                - textbox "Date" [ref=e339]
                - generic [ref=e340]:
                  - generic [ref=e341]:
                    - generic [ref=e342]: id
                    - text: =profile-date
                  - generic [ref=e343]:
                    - generic [ref=e344]: name
                    - text: =date
                  - generic [ref=e345]:
                    - generic [ref=e346]: data-testid
                    - text: =profile-date
            - generic [ref=e347]:
              - generic [ref=e348]: Profession
              - radiogroup "Profession" [ref=e349]:
                - generic [ref=e350] [cursor=pointer]:
                  - radio "Manual Tester" [ref=e351]
                  - text: Manual Tester
                - generic [ref=e352] [cursor=pointer]:
                  - radio "Automation Tester" [checked] [ref=e353]
                  - text: Automation Tester
              - generic [ref=e354]:
                - generic [ref=e355]:
                  - generic [ref=e356]: name
                  - text: =profession
                - generic [ref=e357]:
                  - generic [ref=e358]: data-testid
                  - text: =profession-manual / profession-automation
          - generic [ref=e359]:
            - heading "Technical skills" [level=2] [ref=e360]
            - generic [ref=e361]:
              - generic [ref=e362]: Automation tools
              - generic "Automation tools" [ref=e363]:
                - generic [ref=e364] [cursor=pointer]:
                  - checkbox "UFT" [ref=e365]
                  - text: UFT
                - generic [ref=e366] [cursor=pointer]:
                  - checkbox "Protractor" [ref=e367]
                  - text: Protractor
                - generic [ref=e368] [cursor=pointer]:
                  - checkbox "Selenium Webdriver" [ref=e369]
                  - text: Selenium Webdriver
              - generic [ref=e370]:
                - generic [ref=e371]:
                  - generic [ref=e372]: name
                  - text: =tools
                - generic [ref=e373]:
                  - generic [ref=e374]: data-testid
                  - text: =tool-uft / tool-protractor / tool-selenium
            - generic [ref=e375]:
              - generic [ref=e376]: Continents you have worked from
              - generic "Continents" [ref=e377]:
                - generic [ref=e378] [cursor=pointer]:
                  - checkbox "Asia" [active] [ref=e379]
                  - text: Asia
                - generic [ref=e380] [cursor=pointer]:
                  - checkbox "Europe" [ref=e381]
                  - text: Europe
                - generic [ref=e382] [cursor=pointer]:
                  - checkbox "Africa" [ref=e383]
                  - text: Africa
                - generic [ref=e384] [cursor=pointer]:
                  - checkbox "Australia" [ref=e385]
                  - text: Australia
                - generic [ref=e386] [cursor=pointer]:
                  - checkbox "South America" [ref=e387]
                  - text: South America
                - generic [ref=e388] [cursor=pointer]:
                  - checkbox "North America" [ref=e389]
                  - text: North America
                - generic [ref=e390] [cursor=pointer]:
                  - checkbox "Antarctica" [ref=e391]
                  - text: Antarctica
              - generic [ref=e392]:
                - generic [ref=e393]:
                  - generic [ref=e394]: name
                  - text: =continents
                - generic [ref=e395]:
                  - generic [ref=e396]: data-testid
                  - text: "=continent-{name}"
          - generic [ref=e397]:
            - heading "Selenium commands" [level=2] [ref=e398]
            - tablist [ref=e399]:
              - tab "Browser Commands" [ref=e400] [cursor=pointer]
              - tab "Navigation Commands" [ref=e401] [cursor=pointer]
              - tab "Switch Commands" [ref=e402] [cursor=pointer]
              - tab "Wait Commands" [ref=e403] [cursor=pointer]
              - tab "WebElement Commands" [ref=e404] [cursor=pointer]
            - generic [ref=e405]:
              - strong [ref=e406]: Browser commands
              - text: — open and close the browser, get titles and URLs, manage windows.
              - code [ref=e407]: driver.getTitle(); driver.getCurrentUrl(); driver.close();
            - generic [ref=e408]:
              - generic [ref=e409]:
                - generic [ref=e410]: id
                - text: =selenium-tabs · selenium-tab-panel
              - generic [ref=e411]:
                - generic [ref=e412]: data-testid
                - text: =tab-browser / tab-navigation / tab-switch / tab-wait / tab-webelement
              - generic [ref=e413]:
                - generic [ref=e414]: role
                - text: =tab
          - generic [ref=e415]:
            - heading "File operations" [level=2] [ref=e416]
            - generic [ref=e417]:
              - generic [ref=e418] [cursor=pointer]:
                - img [ref=e419]
                - text: Upload Image
                - button "Upload Image" [ref=e421]
              - generic [ref=e422]: No file chosen
              - link "Download file" [ref=e423] [cursor=pointer]:
                - /url: /playwright/sample-download.txt
                - text: Download file
                - img [ref=e424]
            - generic [ref=e426]:
              - generic [ref=e427]:
                - generic [ref=e428]: id
                - text: =upload-image · download-file
              - generic [ref=e429]:
                - generic [ref=e430]: data-testid
                - text: =upload-image · download-file
          - generic [ref=e431]:
            - button "Save profile" [ref=e432] [cursor=pointer]
            - button "Reset" [ref=e433] [cursor=pointer]
            - button "Button" [ref=e434] [cursor=pointer]
          - generic [ref=e435]:
            - generic [ref=e436]:
              - generic [ref=e437]: id
              - text: =profile-submit · profile-button
            - generic [ref=e438]:
              - generic [ref=e439]: data-testid
              - text: =profile-submit / profile-reset / profile-button
            - generic [ref=e440]:
              - generic [ref=e441]: role
              - text: =button
          - generic [ref=e442]: Submitted profile JSON will appear here.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Profile complition form',async ({page}) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
  6  | 
  7  |     const firstname = await page.locator('#first-name').fill('Aarav');
  8  | 
  9  |     const laststname = await page.locator('#last-name').fill('Sharma');
  10 | 
  11 |     const gender = await page.getByTestId('gender-female').click();
  12 | 
  13 |     const wrkexp = await page.locator('#years-experience').selectOption('7');
  14 | 
  15 | 
  16 |     const profession = await page.getByTestId('profession-automation').click();
  17 | 
  18 |     const technicalskil = await page.getByTestId('tool-selenium').isChecked();
  19 | 
> 20 |     const continent = await page.getByTestId('continent-{name: "Asia"}').isChecked();
     |                                                                          ^ Error: locator.isChecked: Test timeout of 30000ms exceeded.
  21 | 
  22 |     const uploadimg = await page.getByTestId('upload-image').setInputFiles('test-data/Screenshot (147).png');
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | await page.waitForTimeout(4000);
  30 | 
  31 | 
  32 | })
```