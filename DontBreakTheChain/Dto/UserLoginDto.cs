using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Dto
{
    public class UserLoginDto
    {
        [Required]
        public string EmailOrUsername { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
