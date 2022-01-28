using System.ComponentModel.DataAnnotations;

namespace DontBreakTheChain.Dto
{
    public class ChainPartDto
    {
        [Required]
        [DataType(DataType.Date)]
        public DateTime ChainDate { get; set; }
        public string ChainSmallNote { get; set; }

        public int? ChainPartID { get; set; }

        [Required]
        public int ChainID { get; set; }
    }
}
