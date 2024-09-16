using Microsoft.AspNetCore.Mvc;

namespace VegasTransportes.Controllers
{
	public class SobreController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
