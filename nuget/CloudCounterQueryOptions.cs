using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.CloudCounter
{
    /// <summary>
    /// Query options for the Cloud Counter API
    /// </summary>
    public class CloudCounterQueryOptions
    {
        /// <summary>
        /// The ID of the counter (e.g., test_counter)
        /// Example: test_counter
        /// </summary>
        [JsonProperty("id")]
        public string Id { get; set; }
    }
}
