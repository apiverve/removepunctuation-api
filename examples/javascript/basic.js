/**
 * Remove Punctuation API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Remove Punctuation API.
 * API Documentation: https://docs.apiverve.com/ref/removepunctuation
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/removepunctuation';

/**
 * Make a POST request to the Remove Punctuation API
 */
async function callRemovePunctuationAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;text&quot;: &quot;Hello, world! How are you doing today? I&#x27;m great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens &amp; more!&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callRemovePunctuationAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
