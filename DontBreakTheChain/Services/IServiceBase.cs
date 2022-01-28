namespace DontBreakTheChain.Services
{
    public interface IServiceBase<T>
    {
        public Task Add(T entity, string Id);
        public Task Update(Func<T, bool> condition, T entity);
        public Task Delete(T entity);
        public Task DeleteById(Func<T, bool> condition);
        public T Get(Func<T, bool> condition);
        public IList<T> GetAll();
        public IList<T> GetAllWhere(Func<T, bool> condition);
    }
}
