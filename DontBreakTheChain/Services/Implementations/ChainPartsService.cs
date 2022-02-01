using DontBreakTheChain.DataAccess;
using DontBreakTheChain.Models;

namespace DontBreakTheChain.Services.Implementations
{
    public class ChainPartsService : ServiceBase<ChainPart>, IChainPartsService
    {
        public ChainPartsService(ChainDbContext dbContext) : base(dbContext)
        {
        }

        public override async Task Add(ChainPart entity, string Id)
        {
            int ChainId = int.Parse(Id);
            Chain chain = dbContext.Chains.Where(x => x.ChainID.Equals(ChainId)).SingleOrDefault();

            entity.Chain = chain;

            await dbContext.Set<ChainPart>().AddAsync(entity);
            await dbContext.SaveChangesAsync();
        }
    }
}
