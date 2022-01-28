using DontBreakTheChain.Dto;
using DontBreakTheChain.Models;
using DontBreakTheChain.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DontBreakTheChain.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize]
    public class ChainController : ControllerBase
    {
        public IChainService chainService { get; set; }
        public UserManager<User> UserManager { get; set; }

        public ChainController(IChainService chainService, UserManager<User> userManager)
        {
            this.chainService = chainService;
            this.UserManager = userManager;
        }

        // GET: api/<ChaincController>
        [HttpGet]
        public IEnumerable<Chain> Get()
        {
            return chainService.GetAll();
        }

        // GET api/<ChaincController>/5
        [HttpGet("{id}")]
        public Chain Get(int id)
        {
            return chainService.Get(x => x.ChainID.Equals(id));
        }

        // POST api/<ChaincController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ChainDto chainDto)
        {
            if (ModelState.IsValid)
            {
                User user = await UserManager.GetUserAsync(User);

                Chain chain = new Chain
                {
                    ChainStatus = chainDto.ChainStatus,
                    ChainTitle = chainDto.ChainTitle,
                    DailyGoal = chainDto.DailyGoal,
                    OverarchingGoal = chainDto.OverarchingGoal,
                    ChainUser = user
                };

                await chainService.Add(chain, user.Id);

                return Ok(chain);
            }

            return ValidationProblem();
        }

        // PUT api/<ChaincController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] ChainDto chainDto)
        {
            if(chainDto.ChainID == null)
            {
                ModelState.AddModelError("Id error", "ChainId cannot be null when updating models!");
            }
            if (ModelState.IsValid)
            {
                await chainService.Update(x => x.ChainID.Equals(chainDto.ChainID), new Chain
                {
                    ChainStatus = chainDto.ChainStatus,
                    ChainTitle = chainDto.ChainTitle,
                    DailyGoal = chainDto.DailyGoal,
                    OverarchingGoal = chainDto.OverarchingGoal
                });

                return Ok();
            }

            return ValidationProblem();
        }

        // DELETE api/<ChaincController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await chainService.DeleteById(x => x.ChainID.Equals(id));

            return Ok();
        }
    }
}
