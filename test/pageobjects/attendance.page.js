const Page = require('./page');

class AttendancePage {

    get btnAddRequest() { return $('//a[contains(text(), "Add Request")]') }
    get drpDwnRequestFor() { return $('body > div.page-content > div > div > div > div.portlet-body > div > div:nth-child(1) > form > div.form-body > div:nth-child(1) > div > span') }
    get listSelectRequestType() { return $('//li[text()="In-Out Punch Missing"]') }
    get inputDate() { return $('//input[contains(@class,"form-control date-picker")]') }
    get inputInTime() { return $('//input[contains(@name,"txtb_actual_time_in")]') }
    get inputOutTime() { return $('//input[contains(@name,"txtb_actual_time_out")]') }
    get textareaReason() { return $('//textarea[@placeholder="Enter Reason"]') }
    get btnSubmit() { return $('//a[contains(text(),"Back")]') }

    async addAttendance(date, inTime, outTime, reason) {
        await this.btnAddRequest.click();
        await browser.pause(1500);

        await this.drpDwnRequestFor.click();
        await browser.pause(1500);

        await this.listSelectRequestType.click();
        await browser.pause(1500);

        await this.inputDate.setValue(date);
        await browser.pause(1500);
        browser.keys("\uE007");

        await this.inputInTime.setValue("");
        await browser.pause(1000);
        await this.inputInTime.setValue(inTime);
        await browser.pause(1500);

        await this.inputOutTime.setValue("");
        await browser.pause(1000);
        await this.inputOutTime.setValue(outTime);
        await browser.pause(1500);

        await this.textareaReason.setValue(reason);
        await browser.pause(1500);

        await this.btnSubmit.click();
        await browser.pause(1000);
    }

}

module.exports = new AttendancePage();
