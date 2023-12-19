import { expect, test } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test.describe('Invite party', () => {
  test('New invite', async ({ page }) => {
    await page.goto('');
    await page.locator('[data-testid="5ee887de652a4f1b907a456a"]').click();
    await expect(page.locator('[data-testid="invite-0"]')).toBeVisible();
  });
});

test.describe('Invite group', () => {
  test('New group invite', async ({ page }) => {
    await page.goto('');
    await page
      .locator('[data-testid="Local Banks for Letters of Credit"]')
      .click();
    await expect(page.locator('[data-testid="invite-table-row"]')).toHaveCount(
      7
    );
  });
});

test.describe('Remove party', () => {
  test('Add and remove invite', async ({ page }) => {
    await page.goto('');
    await page.locator('[data-testid="5ee887de652a4f1b907a456a"]').click();
    await expect(page.locator('[data-testid="invite-0"]')).toBeVisible();
    await page.locator('[data-testid="invite-0"]').click();
    await expect(page.locator('[data-testid="invite-0"]')).not.toBeVisible();
  });
});

test.describe('Add custom email address', () => {
  test('Add custom email address', async ({ page }) => {
    await page.goto('');
    await page.getByPlaceholder('Custom email address').fill('dickerson.pope@cowtown.biz');
    await expect(page.locator('[data-testid="add-custom-email"]')).toBeEnabled();
    await page.locator('[data-testid="add-custom-email"]').click();
    await expect(page.locator('[data-testid="invite-0"]')).toBeVisible();
  });
});
