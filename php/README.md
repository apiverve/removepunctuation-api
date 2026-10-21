# Remove Punctuation API - PHP Package

Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text. Paid plans add the total count and a list of every punctuation character removed.

## Installation

Install via Composer:

```bash
composer require apiverve/removepunctuation
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Removepunctuation\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['text' => 'Hello, world! How are you doing today? I\'m great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens & more!']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Removepunctuation\Client;
use APIVerve\Removepunctuation\Exceptions\APIException;
use APIVerve\Removepunctuation\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'Hello, world! How are you doing today? I\'m great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens & more!']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "cleaned": "Hello world How are you doing today Im great thanks for asking This text has lots of punctuation periods commas hyphens more",
    "punctuation_removed": [
      "!",
      "&",
      "'",
      ",",
      "-",
      ".",
      ":",
      "?"
    ],
    "count": 11
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/removepunctuation?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/removepunctuation?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/removepunctuation?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
