import {test, expect} from '@playwright/test'
import {username, password} from '../node_modules/@playwright/test/credentials.json'

test.beforeEach (async ({page}) => {

    // Load the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect.soft(page).toHaveTitle('OrangeHRM');
    // removed visual validation due to flakiness
    // await expect.soft(page).toHaveScreenshot()

})

test ('Positive Login Test', async({page}) => {
    
    // Populate username and password field with valid credentials, submit
    await page.locator('[name="username"]').fill(username);
    await page.locator('[name="password"]').fill(password);
    await page.getByRole('button', {name:'Login'}).click();
    //Confirm user taken to homepage/dashboard
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //Logout via dropdown
    await page.getByRole('listitem').locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // removed visual validation due to flakiness
    // await expect.soft(page).toHaveScreenshot()

})

test ('Negative Login Test 1', async({page}) => {
    
    // Attempt login with with invalid password, submit
    await page.locator('[name="username"]').fill(username);
    await page.locator('[name="password"]').fill('negative');
    await page.getByRole('button', {name:'Login'}).click();
    // Confirm alert message shows "invalid credentials"
    await expect(page.getByRole('Alert')).toHaveText('Invalid credentials');

    // removed visual validation due to flakiness
    // await expect.soft(page).toHaveScreenshot()


})

test ('Negative Login Test 2', async({page}) => {
    
    // Attempt login with invalid username, submit
    await page.locator('[name="username"]').fill('negative');
    await page.locator('[name="password"]').fill(password);
    await page.getByRole('button', {name:'Login'}).click();
    // Confirm alert message shows "invalid credentials"
    await expect(page.getByRole('Alert')).toHaveText('Invalid credentials');

    // removed visual validation due to flakiness
    // await expect.soft(page).toHaveScreenshot()

})

test ('Negative Login Test 3', async({page}) => {
    
    // Attempt login without providing credentials, submit
    await page.getByRole('button', {name:'Login'}).click();
    // Confirm username field is shown as mandatory via 'Required' message
    await expect(page.getByText('Required').first()).toHaveText('Required');
    // Confirm password field is shown as mandatory via 'Required' message
    await expect(page.getByText('Required').nth(1)).toHaveText('Required');

    // removed visual validation due to flakiness
    // await expect.soft(page).toHaveScreenshot()

})



test.afterEach (async ({page}) => {

    // Confirm on expected page (login) and close down
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect.soft(page).toHaveTitle('OrangeHRM');
    await page.close()

})