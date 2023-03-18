using Gym.Domain.Entities;

namespace Gym.Domain.Repositories;

public interface ISubscriptionRepository
{
    Task<IEnumerable<Subscription>> GetAllAsync();
    Task<Subscription?> GetByIdAsync(int id);
    Task AddAsync(Subscription subscription);
    void Update(Subscription subscription);
    void Remove(Subscription subscription);
    Task SaveChangesAsync();
}