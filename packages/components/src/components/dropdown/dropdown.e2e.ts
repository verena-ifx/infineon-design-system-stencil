// dropdown.e2e.ts
import { newE2EPage } from '@stencil/core/testing';

describe('Dropdown Component', () => {
    let page;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`
      <ifx-dropdown>
        <ifx-dropdown-trigger-button icon="menu" variant="solid" color="primary" size="m"></ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="https://example.com" icon="home" target="_blank"></ifx-dropdown-item>
          <ifx-dropdown-item href="https://example2.com" icon="settings" target="_blank"></ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    `);
    });

    it('should be rendered', async () => {
        const dropdown = await page.find('ifx-dropdown');
        expect(dropdown).not.toBeNull();
    });

    it('should open the dropdown when the trigger is clicked', async () => {
        const trigger = await page.find('ifx-dropdown >>> ifx-dropdown-trigger-button');
        await trigger.click();

        const dropdown = await page.find('ifx-dropdown');
        const dropdownIsOpen = await dropdown.getProperty('internalIsOpen');
        expect(dropdownIsOpen).toBe(true);
    });

    it('should close the dropdown when clicking outside the dropdown', async () => {
        // First, open the dropdown
        const trigger = await page.find('ifx-dropdown >>> ifx-dropdown-trigger-button');
        await trigger.click();

        // Then, click outside the dropdown
        await page.click('body');

        const dropdown = await page.find('ifx-dropdown');
        const dropdownIsOpen = await dropdown.getProperty('internalIsOpen');
        expect(dropdownIsOpen).toBe(false);
    });

    it('should navigate to the appropriate link when a dropdown item is clicked', async () => {
        // First, open the dropdown
        const trigger = await page.find('ifx-dropdown >>> ifx-dropdown-trigger-button');
        await trigger.click();

        // Then, click the dropdown item
        const item = await page.find('ifx-dropdown-menu >>> ifx-dropdown-item');
        await item.click();

        // Expect a navigation event to the item's href
        const [response] = await Promise.all([
            page.waitForNavigation(),
            item.click(),
        ]);

        expect(response.url()).toBe('https://example.com');
    });

    it('should not navigate when clicking a disabled item', async () => {
        // First, open the dropdown
        const trigger = await page.find('ifx-dropdown >>> ifx-dropdown-trigger-button');
        await trigger.click();

        // Then, click the disabled dropdown item
        const item = await page.find('ifx-dropdown-menu >>> ifx-dropdown-item:nth-child(2)');
        item.setProperty('disabled', true);
        await page.waitForChanges();

        // Try to click the item
        const responsePromise = page.waitForNavigation();
        await item.click();

        // Expect no navigation event
        const response = await responsePromise;
        expect(response).toBeNull();
    });

    it('should render the correct icon for each dropdown item', async () => {
        // Open the dropdown
        const trigger = await page.find('ifx-dropdown >>> ifx-dropdown-trigger-button');
        await trigger.click();

        // Check the icons for each dropdown item
        const item1Icon = await page.find('ifx-dropdown-menu >>> ifx-dropdown-item:nth-child(1) >>> ifx-icon');
        expect(await item1Icon.getProperty('icon')).toBe('home');

        const item2Icon = await page.find('ifx-dropdown-menu >>> ifx-dropdown-item:nth-child(2) >>> ifx-icon');
        expect(await item2Icon.getProperty('icon')).toBe('settings');
    });
});