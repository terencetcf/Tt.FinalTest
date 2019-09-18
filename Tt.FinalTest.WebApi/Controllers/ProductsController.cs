using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Tt.FinalTest.WebApi.Models;

namespace Tt.FinalTest.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<ProductModel>> Get()
        {
            var products = new List<ProductModel>
            {
                new ProductModel
                {
                    Id = Guid.NewGuid(),
                    Title = "iPhone 11 Pro Max",
                    Description = "Apple iPhone 11 Pro Max",
                    InStock = true,
                    Price = 1149
                },
                new ProductModel
                {
                    Id = Guid.NewGuid(),
                    Title = "iPhone 11 Pro",
                    Description = "Apple iPhone 11 Pro",
                    InStock = true,
                    Price = 1049
                },
                new ProductModel
                {
                    Id = Guid.NewGuid(),
                    Title = "iPhone 11",
                    Description = "Apple iPhone 11",
                    InStock = true,
                    Price = 729
                },
            };

            return products;
        }
    }
}