const LoginPage = require('../pageobjects/login.page');
const AttendancePage = require('../pageobjects/attendance.page');
const config = require('../config/config');
const { fetchAttendanceData } = require('../config/attendance');
const URL = "http://outsourcing.topshrms.in/attendance_request"

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        browser.maximizeWindow();

        await LoginPage.open();
        const { username, password } = config.loginCredentials;
        await LoginPage.login(username, password);
        await browser.pause(1000);
        browser.navigateTo(URL);
    });



    it('Selection of Punch Request from dropdown list', async () => {
        browser.maximizeWindow()

        const dateArray = fetchAttendanceData()

        for (let i = 0; i < dateArray.length; i++) {
            if (!dateArray[i] || !dateArray[i].length) {
                throw `Invalid Input`
            }

            const ATTENDANCE = dateArray[i].split(" ");
            if (ATTENDANCE.length !== 3) { throw `Invalid Input` }

            const DATE = ATTENDANCE[0];
            const IN_TIME = ATTENDANCE[1];
            const OUT_TIME = ATTENDANCE[2];

            await AttendancePage.addAttendance(DATE, IN_TIME, OUT_TIME, "WFH")
            await browser.pause(3000);
        }

    });

});