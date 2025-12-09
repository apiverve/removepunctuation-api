using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.RemovePunctuation
{
    /// <summary>
    /// Query options for the Remove Punctuation API
    /// </summary>
    public class RemovePunctuationQueryOptions
    {
        /// <summary>
        /// The text to remove punctuation from
        /// Example: Hello, World! How are you?
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
