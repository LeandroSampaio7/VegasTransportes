using Microsoft.AspNetCore.Mvc;

namespace VegasTransportes.Controllers
{
    public class ServicosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
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
