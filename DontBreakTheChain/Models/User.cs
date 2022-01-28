using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace DontBreakTheChain.Models
{
    public class User : IdentityUser
    {
        public virtual IList<Chain> Chains { get; set; }
    }
}
