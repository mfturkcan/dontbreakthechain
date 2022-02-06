using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Dto
{
    public class UserRegisterDto
    {

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
