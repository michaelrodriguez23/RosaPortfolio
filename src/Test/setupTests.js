// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

test('renders learn react link', () => {
    const { getByText } = render(<App />); //render is from @testing-library/react
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); //expect assertion is from Jest
  });