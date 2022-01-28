using DontBreakTheChain.Dto;
using DontBreakTheChain.Models;
using DontBreakTheChain.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DontBreakTheChain.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize]
    public class ChainPartsController : ControllerBase
    {
        public IChainPartsService chainPartsService { get; set; }

        public ChainPartsController(IChainPartsService chainPartsService)
        {
            this.chainPartsService = chainPartsService;
        }

        // GET: api/<ChainPartsController>
        [HttpGet]
        public IEnumerable<ChainPart> Get()
        {
            return chainPartsService.GetAll();
        }

        // GET api/<ChainPartsController>/5
        [HttpGet("{id}")]
        public ChainPart Get(int id)
        {
            return chainPartsService.Get(x => x.ChainPartID.Equals(id));
        }

        // POST api/<ChainPartsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ChainPartDto dto)
        {

            if (ModelState.IsValid)
            {
                await chainPartsService.Add(new ChainPart { ChainSmallNote = dto.ChainSmallNote, ChainDate = dto.ChainDate }, dto.ChainID.ToString());
                return Ok();
            }

            return ValidationProblem();
        }

        // PUT api/<ChainPartsController>/5
        [HttpPut]
        public async Task<IActionResult> Put( [FromBody] ChainPartDto dto)
        {
            if (dto.ChainPartID == null)
            {
                ModelState.AddModelError("Id error", "ChainPartId cannot be null when updating models!");
            }

            if (ModelState.IsValid)
            {
                await chainPartsService.Update(x => x.ChainPartID.Equals(dto.ChainPartID), new ChainPart
                {
                    ChainSmallNote = dto.ChainSmallNote,
                    ChainDate = dto.ChainDate
                });

                return Ok();
            }
            return ValidationProblem();
        }

        // DELETE api/<ChainPartsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await chainPartsService.DeleteById(x => x.ChainPartID.Equals(id));

            return Ok();
        }
    }
}
