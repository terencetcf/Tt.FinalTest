using System;

namespace Tt.FinalTest.WebApi.Models
{
    public class ProductModel
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public bool InStock { get; set; }
    }
}
