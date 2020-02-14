using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DevApp.Models;
using DevApp.Services;
using System.Threading;

namespace DevApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IEmailSender _emailSender;


        public HomeController(
        ILogger<HomeController> logger,
        IEmailSender emailSender)
        {
            _logger = logger;
            _emailSender = emailSender;

        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task SendEmail(string name, string email, string service, string budget, string message)
        {

            Thread.Sleep(4000);

            string subject = $"Client name:{name} - Service:{service} - Budget:{budget}";

            await _emailSender.SendEmailAsync(subject,message,email,name);

        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
