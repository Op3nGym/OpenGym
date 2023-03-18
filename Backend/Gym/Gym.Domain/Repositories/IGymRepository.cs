namespace Gym.Domain.Repositories;
public interface IGymRepository
{
    Task<IEnumerable<Entities.Gym>> GetAllAsync();
    Task<Entities.Gym?> GetByIdAsync(int id);
    Task AddAsync(Entities.Gym gym);
    void Update(Entities.Gym gym);
    void Remove(Entities.Gym gym);
    Task SaveChangesAsync();
}
