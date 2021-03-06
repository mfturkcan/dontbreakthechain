using System.IdentityModel.Tokens.Jwt;
using DontBreakTheChain.Dto;
using DontBreakTheChain.Models;
using DontBreakTheChain.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DontBreakTheChain.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        public UserController(
            UserManager<User> userManager,
            SignInManager<User> signInManager, TokenService tokenService)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            TokenService = tokenService;
        }

        public UserManager<User> UserManager { get; }
        public SignInManager<User> SignInManager { get; }
        public TokenService TokenService { get; set; }

        #region register-region

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(UserRegisterDto registerDto)
        {
            if (ModelState.IsValid)
            {
                User user = new User
                {
                    Email = registerDto.Email,
                    UserName = registerDto.Username,
                };

                IdentityResult result = await UserManager.CreateAsync(user, registerDto.Password);

                if (result.Succeeded)
                {
                    await UserManager.AddToRoleAsync(user, "Member");

                    return Ok(new UserDto
                    {
                        Username = registerDto.Username,
                        Token = TokenService.GenerateToken(user)
                    });
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
            }
            return ValidationProblem();
        }

        #endregion

        #region login-region

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(UserLoginDto loginDto)
        {
            if (ModelState.IsValid)
            {
                string emailOrUsername = loginDto.Username;
                bool isEmail = emailOrUsername.Contains("@");
                User? user;

                if (isEmail) user = await UserManager.FindByEmailAsync(emailOrUsername);
                else user = await UserManager.FindByNameAsync(emailOrUsername);

                if (user == null || !await UserManager.CheckPasswordAsync(user, loginDto.Password))
                {
                    ModelState.AddModelError("No user", "Check your password or username");
                }

                else
                {
                    return Ok(new UserDto
                    {
                        Username = loginDto.Username,
                        Token = TokenService.GenerateToken(user)
                    });
                }
            }
            return ValidationProblem();
        }

        [AllowAnonymous]
        [HttpGet("login/{redirectUrl}")]
        public IActionResult Login(string redirectUrl)
        {
            if (HttpContext.User == null) return Unauthorized();
            return LocalRedirect(redirectUrl);
        }

        #endregion

        [HttpPost("user")]
        public async Task<ActionResult> GetUserInfo()
        {
            return Ok(new UserDto
            {
                Username = User.Identity.Name,
                Token = HttpContext.Request.Headers["Authorization"]
            });
        }

        [HttpPost("deleteAccount")]
        public async Task<IActionResult> DeleteAccount()
        {
            IdentityResult result = await UserManager.DeleteAsync(user: await UserManager.FindByNameAsync(User?.Identity?.Name));

            if (result.Succeeded)
            {
                await SignInManager.SignOutAsync();
                return Ok();
            }

            foreach (IdentityError error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
            return ValidationProblem();
        }
    }
}
