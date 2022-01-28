using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DontBreakTheChain.Models
{
    public class Chain
    {
        [Key]
        public int ChainID { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Chain Title cannot be longer than 50 characters.")]
        public string ChainTitle { get; set; }

        [Required]
        public string OverarchingGoal { get; set; }

        [Required]
        public string DailyGoal { get; set; }

        public virtual IList<ChainPart> ChainParts { get; set; }

        [Required]
        public virtual User ChainUser { get; set; }

        [Required]
        public bool ChainStatus { get; set; }
    }
}
