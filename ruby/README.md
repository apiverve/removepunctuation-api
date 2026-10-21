# Remove Punctuation API - Ruby Gem

Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text. Paid plans add the total count and a list of every punctuation character removed.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_removepunctuation'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_removepunctuation
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_removepunctuation'

# Initialize the client
client = APIVerve::Removepunctuation::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ text: "Hello, world! How are you doing today? I'm great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens & more!" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "Hello, world! How are you doing today? I'm great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens & more!" })
  puts response["data"]
rescue APIVerve::Removepunctuation::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Removepunctuation::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Removepunctuation::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/removepunctuation?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/removepunctuation?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/removepunctuation?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
