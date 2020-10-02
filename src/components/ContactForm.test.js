import ContactForm from './ContactForm'
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

test('renders form without errors', () => {
    render(<ContactForm />)
});

test('Checks all inputs and submit button', () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput =screen.getByTestId(/test/i); 
    const messageInput = screen.getByText(/message/i);
    const submitButton = screen.getByRole(/button/i);

    fireEvent.change(firstNameInput, { target: {value: 'Cora' } });
    fireEvent.change(lastNameInput, {target: {value: 'Krynick'}});
    fireEvent.change(emailInput, {target: {name: 'email', value: 'cora@cora.com'}});
    fireEvent.change(messageInput, {target: {name: 'message'}}); 
    fireEvent.change(submitButton);
});
