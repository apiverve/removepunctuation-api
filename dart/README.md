# Remove Punctuation API - Dart/Flutter Client

Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text. Paid plans add the total count and a list of every punctuation character removed.

[![pub package](https://img.shields.io/pub/v/apiverve_removepunctuation.svg)](https://pub.dev/packages/apiverve_removepunctuation)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Remove Punctuation API](https://apiverve.com/marketplace/removepunctuation?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_removepunctuation: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_removepunctuation/apiverve_removepunctuation.dart';

void main() async {
  final client = RemovepunctuationClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'text': 'Hello, world! How are you doing today? I\'m great - thanks for asking. This text has lots of punctuation: periods, commas, hyphens & more!'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Remove Punctuation API](https://apiverve.com/marketplace/removepunctuation?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/removepunctuation](https://docs.apiverve.com/ref/removepunctuation?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
