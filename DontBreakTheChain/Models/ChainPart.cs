using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Models
{
    public class ChainPart
    {
        public int ChainPartID { get; set; }

        [Required]
        public DateTime ChainDate { get; set; }

        [StringLength(100, ErrorMessage = "Small Note for daily cannot be longer than 100 chars.")]
        public string ChainSmallNote { get; set; }

        public int? ChainID { get; set; }

        [Required]
        public virtual Chain Chain { get; set; }
    }
}
