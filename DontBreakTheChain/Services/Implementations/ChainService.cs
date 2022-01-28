using DontBreakTheChain.DataAccess;
using DontBreakTheChain.Models;

namespace DontBreakTheChain.Services.Implementations
{
    public class ChainService : ServiceBase<Chain>, IChainService
    {
        public ChainService(ChainDbContext dbContext) : base(dbContext)
        {
        }

        public override async Task Add(Chain entity, string Id)
        {
            User user = dbContext.Users.Where(x => x.Id.Equals(Id)).FirstOrDefault();

            entity.ChainUser = user;

            await dbContext.Set<Chain>().AddAsync(entity);
            await dbContext.SaveChangesAsync();
        }
    }
}
