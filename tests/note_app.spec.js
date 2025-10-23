import { test, expect } from '@playwright/test'
import { loginWith, createNote } from './helper'

test.describe('Note app', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('front page can be opened', async ({ page }) => {
    const locator = await page.getByText('Notes')
    await expect(locator).toBeVisible()
    await expect(page.getByText('Note app, Department of Computer Science, University of Helsinki 2025')).toBeVisible()
  })

  test('user can log in', async ({ page }) => {
    await loginWith(page, 'jamil', 'qwerty')
    await expect(page.getByText('richard logged in')).toBeVisible()
  })

  test.describe('when logged in', async () => {
    test.beforeEach(async ({ page }) => {
      await loginWith(page, 'jamil', 'qwerty')
    })

    test('a new note can be created', async ({ page }) => {
      await createNote(page, 'a note created by playwright')
      await expect(page.getByText('a note created by playwright')).toBeVisible()
    })
  })
})