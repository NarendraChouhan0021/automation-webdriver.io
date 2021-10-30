# automation-webdriver.io
# Getting Started with Auto Attendance Fillup for HRMS

## Install wdio from the below link for your system
https://webdriver.io/docs/gettingstarted    


## cd to root directory and install the dependency
 `cd wdio`
 `npm i`


## Modify the two file i.e in /config folder
### `attendance.js` add the array for the attendance.
 `attendance.js`

### `config.js` add the login credentials of your HRMS. 
`config.js`

## run the script using the below command
`npx wdio run ./wdio.conf.js`
