using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Diagnostics;
using VegasTransportes.Models;

namespace VegasTransportes.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		private readonly IWebHostEnvironment _environment;

		public HomeController(ILogger<HomeController> logger, IWebHostEnvironment environment)
		{
			_logger = logger;
			_environment = environment;
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		public IActionResult EmbarqueAereo()
		{
			return View();
		}

		public IActionResult EnvioRodoviario()
		{
			return View();
		}

		public IActionResult SimularCotacao()
		{
			return View();
		}

        public IActionResult EnvioRapido()
        {
            return View();
        }

		public IActionResult FazerFardo()
		{
			return View();
		}

		public IActionResult MeuOnibus()
		{
			return View();
		}

        public IActionResult ServicoIndex()
        {
            return View();
        }


		public IActionResult ValidaToken()
		{
			var tk = "null"; 
			return Json(new { success = true, message = "Token valido", token = tk });
		}

		public IActionResult ValidaInstanceId()
		{
			var id = "null";
			return Json(new { success = true, message = "Token valido", instanceId = id });
		}

	}
}