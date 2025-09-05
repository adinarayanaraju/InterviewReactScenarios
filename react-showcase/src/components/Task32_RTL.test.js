import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Task32_RTL from './Task32_RTL';

describe('Task32_RTL', () => {
  test('allows the user to subscribe successfully', async () => {
    const user = userEvent.setup();
    render(<Task32_RTL />);

    // 1. Find the input field and the button
    const emailInput = screen.getByLabelText(/email/i);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    // 2. Simulate user interaction
    const testEmail = 'test@example.com';
    await user.type(emailInput, testEmail);
    await user.click(subscribeButton);

    // 3. Assert the outcome
    // The success message should now be on the screen
    const successMessage = await screen.findByText(/thank you/i);
    expect(successMessage).toBeInTheDocument();

    // We can also assert that the form is gone
    expect(screen.queryByRole('button', { name: /subscribe/i })).not.toBeInTheDocument();

    // And that the submitted email is displayed
    expect(screen.getByText(`Subscription successful for: ${testEmail}`)).toBeInTheDocument();
  });
});
