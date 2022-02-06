using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Dto
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Token { get; set; }
    }
}
