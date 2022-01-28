using DontBreakTheChain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DontBreakTheChain.Services
{
	public class TokenService
	{
		public TokenService(UserManager<User> userManager, IConfiguration configuration)
		{
			UserManager = userManager;
			Configuration = configuration;
		}

		public UserManager<User> UserManager { get; }
		public IConfiguration Configuration { get; }

		public string GenerateToken(User user)
		{
			var claims = new List<Claim>{
				new Claim(ClaimTypes.Name, user.UserName),
				new Claim(ClaimTypes.Email, user.Email)
			};

			//var roles = await UserManager.GetRolesAsync(user);

			//foreach(var role in roles)
			//{
			//	claims.Add(new Claim(ClaimTypes.Role, role));
			//}

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWTSettings:TokenKey"]));

			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

			var tokenOptions = new JwtSecurityToken(
					issuer: null,
					audience: null,
					claims: claims,
					expires: DateTime.Now.AddDays(7),
					signingCredentials: creds
				);

			return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
		}
	}
}
