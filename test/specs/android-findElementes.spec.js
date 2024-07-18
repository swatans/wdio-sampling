describe('Android Element Tests', () => {
    it('Find Element by accebility ID', async () => {
        //find element id
       const appOption = await $('~App')


        //click
        await appOption.click();

        //asert
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting;
    });

    it('find Element by classname', async () => {
        //find element by class name
        const className = await $('android.widget.TextView')
        console.log(await className.getText());

        //assert
        await expect(className).toHaveText("API Demos")
        
    });
    
    it('find element by xpath', async () => {
        //find element by xpath - //tagname[@atribute="value"]
        const xpath =  await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await xpath.click();

        //find resouece id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class
        const textAssert = await $('android.widget.TextView');
        await expect(textAssert).toHaveText("You selected: 1 , Command two");

    });

    it('find element by UiAutomation', async () => {
        //find textr constain
        await $('android=new UiSelector().textContains("App")').click();
        
    });
    
    it.only('FInd mutiple Elementes', async () => {
        const expectedList = [
            'API Demos' , "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content', 
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]

        const actualList = []

        //find multiple
        const textList = await $$('android.widget.TextView');

        //loop
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //asert
        await expect(actualList).toEqual(expectedList);
    });

    it('input text', async () => {
        await $('//*[@text="Auto Complete"').click();
    });
});