using Microsoft.AspNetCore.Mvc;
using PocketWord.Models;
using System.Diagnostics;

namespace PocketWord.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Kaymak()
        {
            return View();
        }
        public IActionResult Hakkimda()
        {
            return View();
        }
        public IActionResult Peynir()
        {
            return View();
        }
        public IActionResult Iletisim()
        {
            return View();
        }
        public IActionResult Sut()
        {
            return View();
        }
        public IActionResult Gizlilik()
        {
            return View();
        }
        public IActionResult Tereyagi()
        {
            return View();
        }
        public IActionResult Yogurt()
        {
            return View();
        }




        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
