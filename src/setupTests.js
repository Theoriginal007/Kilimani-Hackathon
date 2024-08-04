// src/setupTests.js

// Import the extended matchers from '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

/**
 * The setupTests.js file is used to configure and initialize the testing environment
 * before each test runs. It allows you to set up global configurations, mocks, and
 * custom matchers for your tests.
 */

// Optionally, you can add other test setup configurations here

/**
 * Example of setting up a global mock for `fetch`, if needed:
 * 
 * global.fetch = jest.fn(() =>
 *   Promise.resolve({
 *     json: () => Promise.resolve({}),
 *   })
 * );
 * 
 * This mock can be useful if your tests make HTTP requests and you want to provide
 * predictable responses.
 */

// Example of setting up global variables or utility functions
/**
 * If you have utility functions or variables that you use across multiple test files,
 * you can import them here and attach them to the global object.
 * 
 * For example:
 * 
 * import { someUtilityFunction } from './testUtils';
 * 
 * global.someUtilityFunction = someUtilityFunction;
 */

/**
 * You can also configure global variables or setup code that should run before
 * each test file is executed. This is useful for initializing testing libraries
 * or setting global states.
 * 
 * Example:
 * 
 * beforeAll(() => {
 *   // Setup code that runs once before all tests
 * });
 * 
 * beforeEach(() => {
 *   // Setup code that runs before each test
 * });
 * 
 * afterAll(() => {
 *   // Cleanup code that runs once after all tests
 * });
 * 
 * afterEach(() => {
 *   // Cleanup code that runs after each test
 * });
 */

// Import any additional testing libraries or polyfills here
// For example, you can add support for browser-specific APIs or add custom matchers

export {};
