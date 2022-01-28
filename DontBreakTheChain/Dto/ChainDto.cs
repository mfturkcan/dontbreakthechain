using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Dto
{
    public class ChainDto
    {
        [Required]
        public string ChainTitle { get; set; }

        [Required]
        public bool ChainStatus { get; set; }

        [Required]
        public string OverarchingGoal { get; set; }

        [Required]
        public string DailyGoal { get; set; }
        public int? ChainID { get; set; }
    }
}
