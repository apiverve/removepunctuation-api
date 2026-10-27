Pod::Spec.new do |s|
  s.name             = 'APIVerveRemovePunctuation'
  s.version          = '1.2.3'
  s.summary          = 'Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text.'
  s.description      = <<-'DESC'
Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text. Paid plans add the total count and a list of every punctuation character removed.

This iOS/macOS SDK provides a convenient way to access the Remove Punctuation from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/removepunctuation?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/removepunctuation-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveRemovePunctuation/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
