using DontBreakTheChain.DataAccess;

namespace DontBreakTheChain.Services.Implementations
{
    public abstract class ServiceBase<T> : IServiceBase<T> where T : class
    {
        public ChainDbContext dbContext { get; set; }
        protected ServiceBase(ChainDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //public async Task Add(T entity)
        //{
        //    await dbContext.Set<T>().AddAsync(entity);
        //}

        public abstract Task Add(T entity, string Id);

        public async Task Delete(T entity)
        {
            dbContext.Set<T>().Remove(entity);
            await dbContext.SaveChangesAsync();
        }

        public T Get(Func<T, bool> condition)
        {
            return dbContext.Set<T>().Where(condition).FirstOrDefault();
        }

        public IList<T> GetAll()
        {
            return dbContext.Set<T>().ToList();
        }

        public IList<T> GetAllWhere(Func<T, bool> condition)
        {
            return dbContext.Set<T>().Where(condition).ToList();
        }

        public async Task Update(Func<T, bool> condition, T entity)
        {
            T oldEntity = dbContext.Set<T>().Where(condition).FirstOrDefault();

            dbContext.Entry<T>(oldEntity).CurrentValues.SetValues(entity);

            await dbContext.SaveChangesAsync();
        }

        public async Task DeleteById(Func<T, bool> condition)
        {
            T entity = dbContext.Set<T>().Where(condition).FirstOrDefault();
            dbContext.Remove(entity);

            await dbContext.SaveChangesAsync();
        }
    }
}
